import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Pagination } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CreateWorkoutPlan = ({ onSave }) => {
    const [planTitle, setPlanTitle] = useState('');
    const [exercises, setExercises] = useState([]);
    const [selectedExercises, setSelectedExercises] = useState(Array(3).fill(null)); // Initialize with 3 blank slots
    const [openDialog, setOpenDialog] = useState(false);
    const [currentExercise, setCurrentExercise] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 6;

    useEffect(() => {
        axios.get('http://localhost:8000/fitConnect/exercises')
            .then(response => {
                setExercises(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const userId = localStorage.getItem('user_id');

    const handleSave = () => {
        const workoutPlanData = {
            user: userId,
            planName: planTitle,
            creationDate: new Date().toISOString(),
            exercises: selectedExercises
                .filter(exercise => exercise != null) // Filter out null values
                .map(exercise => ({
                    exercise: exercise.id,
                    sets: exercise.sets, // Ensure 'sets' is part of your exercise object
                    reps: exercise.reps, // Ensure 'reps' is part of your exercise object
                    weight: exercise.weight, // Ensure 'weight' is part of your exercise object
                    durationMinutes: exercise.durationMinutes // Ensure 'durationMinutes' is part of your exercise object
                }))
        };

        onSave(workoutPlanData);
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === "workoutPlan" && source.droppableId !== "workoutPlan") {
            const addedExercise = exercises[source.index];
            const newSelectedExercises = Array.from(selectedExercises);
            newSelectedExercises[destination.index] = addedExercise;
            setSelectedExercises(newSelectedExercises);
        }
    };

    const handleDialogOpen = (exercise) => {
        setCurrentExercise(exercise);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    return (
        <div>
            <Typography variant="h6">Create New Workout Plan</Typography>
            <TextField
                label="Plan Title"
                value={planTitle}
                onChange={(e) => setPlanTitle(e.target.value)}
                fullWidth
                margin="normal"
            />

            {/* Workout Plan Table */}
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="workoutPlan">
                    {(provided) => (
                        <TableContainer component={Paper} ref={provided.innerRef} {...provided.droppableProps}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Exercise</TableCell>
                                        <TableCell>Sets</TableCell>
                                        <TableCell>Reps</TableCell>
                                        <TableCell>Weight</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {selectedExercises.map((exercise, index) => (
                                        <Draggable key={index} draggableId={`selected-${index}`} index={index}>
                                            {(provided) => (
                                                <TableRow ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <TableCell>{exercise ? exercise.name : ''}</TableCell>
                                                    <TableCell>{/* Add inputs for sets */}</TableCell>
                                                    <TableCell>{/* Add inputs for reps */}</TableCell>
                                                    <TableCell>{/* Add inputs for weight */}</TableCell>
                                                </TableRow>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </Droppable>
            </DragDropContext>

            {/* Exercise Bank Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Muscle Group</TableCell>
                            <TableCell>Equipment</TableCell>
                            <TableCell>Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentExercises.map((exercise, index) => (
                            <Draggable key={exercise.id} draggableId={`exercise-${exercise.id}`} index={index}>
                                {(provided) => (
                                    <TableRow ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <TableCell>{exercise.name}</TableCell>
                                        <TableCell>{exercise.muscle_group_name}</TableCell>
                                        <TableCell>{exercise.equipment_name}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleDialogOpen(exercise)}>Details</Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </Draggable>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={handlePageChange} />

            {/* Exercise Description Dialog */}
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>{currentExercise.name}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{currentExercise.description}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>

            <Button variant="contained" color="primary" onClick={handleSave}>Save Plan</Button>
        </div>
    );
};

export default CreateWorkoutPlan;

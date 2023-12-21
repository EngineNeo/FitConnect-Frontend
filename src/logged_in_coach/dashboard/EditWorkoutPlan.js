import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Table, TableBody, 
         TableCell, TableHead, TableRow, Toolbar, IconButton, 
         Dialog, Snackbar, Alert, Paper } from '@mui/material';
import { withStyles } from '@mui/styles';
import ExerciseBank from '../../shared/components/ExerciseBank';
import axios from 'axios';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

const styles = theme => ({
    container: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
    },
    textField: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    button: {
        marginBottom: theme.spacing(2),
    },
    table: {
        marginTop: theme.spacing(2),
    },
    toolbar: {
        justifyContent: 'space-between',
        padding: theme.spacing(1),
    },
    Paper: {
        padding: "10px"
    }
});


const EditWorkoutPlan = (props) => {
    const { classes, plan, onSave, onCancel } = props;

    const [planTitle, setPlanTitle] = useState(plan.plan_name);
    const [exercises, setExercises] = useState(plan.exercises);
    const [openExerciseBank, setOpenExerciseBank] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'info',
    });

    useEffect(() => {
        const editedExercises = plan.exercises.map((item) => {
            return {...item, duration: item.duration_minutes, name: item.exercise.name, description: item.exercise.description, editMode: false};
        });
        setExercises(editedExercises);
    }, [plan])
    


    const handleAddExercise = exercise => {
        setExercises([...exercises, { ...exercise, editMode: true }]);
        setOpenExerciseBank(false);
    };

    const toggleExerciseBankDialog = () => {
        setOpenExerciseBank(!openExerciseBank);
    };

    const handleFieldChange = (index, field, value) => {
        const editedExercises = exercises.map((exercise, idx) => {
            if (idx === index) {
                return { ...exercise, [field]: value };
            }
            return exercise;
        });
        setExercises(editedExercises);
    };

    const handleCancel = () => {
        onCancel(plan)
    };

    const toggleEditMode = (index) => {
        const editedExercises = exercises.map((exercise, idx) => {
            if (idx === index) {
                return { ...exercise, editMode: !exercise.editMode };
            }
            return exercise;
        });
        setExercises(editedExercises);
    };

    const handleSave = async () => {

        const workoutPlanData = {
                exercise_in_plan_id: exercises[0].exercise_in_plan_id,
                sets: exercises[0].sets,
                reps: exercises[0].reps,
                weight: exercises[0].weight,
                duration_minutes: parseInt(exercises[0].duration, 10) 
        };
        // const workoutPlanName = {
        //     plan_name: planTitle
        // };
        

        try {
            const response = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/fitConnect/exercise_in_plan/${exercises[0].plan_id}`, workoutPlanData);
            if (response.status === 200) {
                onSave();
                setSnackbar({ open: true, message: 'Workout plan edit successfully!', severity: 'success' });
            } else {
                setSnackbar({ open: true, message: 'Failed to edit workout plan.', severity: 'error' });
            }
        } catch (error) {
            console.error('Error saving workout plan:', error);
            setSnackbar({ open: true, message: 'An error occurred while saving.', severity: 'error' });
        }
    };

    if (!plan || !plan.exercises || plan.exercises.length === 0) {
        return <div className={classes.container}>No exercises found for this plan.</div>;
    }

    return (
        <div className={classes.container}>
            <Paper className={classes.Paper}>
                <Typography variant="h6">Edit Workout Plan</Typography>
                <TextField
                    label="Plan Title"
                    value={planTitle}
                    onChange={(e) => setPlanTitle(e.target.value)}
                    margin="normal"
                    className={classes.textField}
                />
                <Button variant="contained" color="primary" onClick={handleSave} className={classes.button}>
                    Update Plan
                </Button>
                <Button variant="outlined" color="primary" onClick={handleCancel} className={classes.button}>
                    Cancel
                </Button>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6">Workout Plan</Typography>
                    <IconButton color="primary" onClick={toggleExerciseBankDialog}>
                        <AddCircleOutlineIcon />
                        <Typography variant="subtitle2">Add Exercise</Typography>
                    </IconButton>
                </Toolbar>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Exercise Name</TableCell>
                            <TableCell>Sets</TableCell>
                            <TableCell>Reps</TableCell>
                            <TableCell>Weight</TableCell>
                            <TableCell>Duration (mins)</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {exercises.map((exercise, index) => (
                            <TableRow key={index}>
                                <TableCell>{exercise.name}</TableCell>
                                {['sets', 'reps', 'weight', 'duration'].map(field => (
                                    <TableCell key={field}>
                                        {exercise.editMode ? (
                                            <TextField
                                                value={exercise[field] || ''}
                                                onChange={(e) => handleFieldChange(index, field, e.target.value)}
                                                type="number"
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        ) : (
                                            exercise[field] || ''
                                        )}
                                    </TableCell>
                                ))}
                                <TableCell>
                                    <IconButton onClick={() => toggleEditMode(index)}>
                                        {exercise.editMode ? <CheckIcon /> : <EditIcon />}
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Dialog
                    open={openExerciseBank}
                    onClose={toggleExerciseBankDialog}
                    maxWidth="lg"
                    fullWidth
                >
                    <ExerciseBank
                        onAddExercise={handleAddExercise}
                        isDialogMode={true}
                    />
                </Dialog>
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Paper>
        </div>
    );
};

export default withStyles(styles, { withTheme: true })(EditWorkoutPlan);
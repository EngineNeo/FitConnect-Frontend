import React, { Fragment, useState } from 'react';
import {
    Paper, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    IconButton, Toolbar, Typography, TextField,
    Button
} from '@mui/material';
import { withRouter } from "react-router-dom";
import { withStyles } from '@mui/styles';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

const styles = (theme) => ({
    container: {
        padding: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
    },
    title: {
        marginBottom: 20,
        marginLeft: 20,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center', // Align items vertically
        justifyContent: 'space-between',
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
    Paper: {
        padding: "10px",
        marginTop: 40,
        marginBottom: 40
    },
    narrowTextField: {
        width: '100px',
        marginRight: theme.spacing(1),
    },
});

const UpdateWorkoutPlan = (props) => {
    const { classes, plan } = props;
    const [exercises, setExercises] = useState(plan.exercises.map(exercise => ({
        ...exercise,
        editMode: true,
        newEntry: { reps: '', weight: '', duration: '' }
    })));
    const [entriesSubmitted, setEntriesSubmitted] = useState(false);
    const [newEntries, setNewEntries] = useState({});

    if (!plan || !plan.exercises || plan.exercises.length === 0) {
        return <div className={classes.container}>No exercises found for this plan.</div>;
    }

    const toggleEditMode = async (index) => {
        const updatedExercises = exercises.map((exercise, idx) => {
            if (idx === index) {
                if (exercise.editMode) {
                    handleSubmit(index);
                }
                return { ...exercise, editMode: !exercise.editMode };
            }
            return exercise;
        });
        setExercises(updatedExercises);
    };

    const handleAddEntry = (index) => {
        const newExercises = exercises.map((exercise, idx) => {
            if (idx === index) {
                return { ...exercise, editMode: true };
                setNewEntries(prevEntries => ({ ...prevEntries, [index]: true }));
            }
            return exercise;
        });
        setExercises(newExercises);
    };

    const handleEntryChange = (index, field, value) => {
        const newExercises = [...exercises];
        newExercises[index].newEntry[field] = value;
        setExercises(newExercises);
    };

    const handleSubmit = async (index) => {
        const exercise = exercises[index];
        const entryData = exercise.newEntry;

        // Call your API endpoint to save the entry
        const response = await fetch(`http://localhost:8000/fitConnect/exercise_in_plan/${plan.plan_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                exercise_id: exercise.id,
                reps: entryData.reps,
                weight: entryData.weight,
                duration: entryData.duration
            })
        });

        if (response.ok) {
            console.log("Entry added successfully");
            toggleEditMode(index);
            setEntriesSubmitted(true);
        } else {
            console.error("Failed to add entry");
        }
    };

    const handleTitleSubmit = () => {
        console.log("Entries submitted");
        setEntriesSubmitted(true);
        setNewEntries({});
    };

    return (
        <Fragment>
            <div className={classes.container}>
                <Paper className={classes.Paper}>
                    <Toolbar className={classes.toolbar}>
                        <Typography variant="h4">{plan.plan_name}</Typography>
                    </Toolbar>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Exercise Name</TableCell>
                                <TableCell>Sets</TableCell>
                                <TableCell>Reps</TableCell>
                                <TableCell>Weight</TableCell>
                                <TableCell>Duration (mins)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {plan.exercises.map((exercise, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <div className={classes.toolbar}>
                                            <Typography variant="subtitle1">{exercise.exercise.name}</Typography>
                                        </div>
                                    </TableCell>
                                    <TableCell>{exercise.sets}</TableCell>
                                    <TableCell>{exercise.reps}</TableCell>
                                    <TableCell>{exercise.weight}</TableCell>
                                    <TableCell>{exercise.duration_minutes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                {exercises.map((exercise, index) => (
                    <div key={index}>
                        <Paper className={classes.Paper}>
                            <Toolbar className={classes.toolbar}>
                                <Typography variant="h6">{exercise.exercise.name}</Typography>
                                {Object.keys(newEntries).length > 0 && !entriesSubmitted && (
                                    <Button variant="contained" color="primary" onClick={handleTitleSubmit}>
                                        Submit Entries
                                    </Button>
                                )}
                                {!exercise.editMode && !entriesSubmitted && (
                                    <IconButton color="primary" onClick={() => handleAddEntry(index)}>
                                        <AddCircleOutlineIcon />
                                        <Typography variant="subtitle2">Add Entry</Typography>
                                    </IconButton>
                                )}
                            </Toolbar>
                            <TableContainer>
                                <Table aria-label="exercise table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Set</TableCell>
                                            <TableCell>Reps</TableCell>
                                            <TableCell>Weight</TableCell>
                                            <TableCell>Duration (Min)</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* Display existing entries here */}
                                        <TableRow>
                                            {/* Add input fields with "/" for new entry */}
                                            <TableCell>1</TableCell>
                                            <TableCell>
                                                <TextField
                                                    className={classes.narrowTextField}
                                                    value={exercise.newEntry.reps}
                                                    type="number"
                                                    onChange={(e) => handleEntryChange(index, 'reps', e.target.value)}
                                                    size="small"
                                                /> / {exercise.reps}
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    className={classes.narrowTextField}
                                                    value={exercise.newEntry.weight}
                                                    type="number"
                                                    onChange={(e) => handleEntryChange(index, 'weight', e.target.value)}
                                                    size="small"
                                                /> / {exercise.weight}
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    className={classes.narrowTextField}
                                                    value={exercise.newEntry.duration}
                                                    type="number"
                                                    onChange={(e) => handleEntryChange(index, 'duration', e.target.value)}
                                                    size="small"
                                                /> / {exercise.duration_minutes}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleSubmit(index)}>
                                                    {exercise.editMode ? <CheckIcon /> : <EditIcon />}
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default withRouter(withStyles(styles)(UpdateWorkoutPlan));

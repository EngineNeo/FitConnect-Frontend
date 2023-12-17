import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import { withStyles } from '@mui/styles';

const styles = theme => ({
    container: {
        padding: theme.spacing(2),
    },
    table: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    Paper: {
        padding: "10px",
        marginBottom: theme.spacing(3),
    },
    dateSection: {
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        marginBottom: theme.spacing(2),
    },
    exerciseName: {
        fontWeight: 'bold',
        margin: theme.spacing(1, 0),
    },
    viewLogsButton: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

const ReadWorkoutPlan = ({ plan, classes }) => {
    const [showLogs, setShowLogs] = useState(false);
    const [items, setItems] = useState([]);
    const userId = localStorage.getItem('user_id');


    useEffect(() => {
        setShowLogs(false);

        const fetchWorkoutLogs = async () => {
            try {
                const response = await fetch(`http://localhost:8000/fitConnect/view_workout_logs/${userId}`);
                const data = await response.json();

                // Filter logs that match the selected plan's name
                const filteredLogs = data.filter(log => log.plan === plan.plan_name);
                setItems(filteredLogs);
            } catch (error) {
                console.error('Error fetching workout logs:', error);
            }
        };

        if (plan) {
            fetchWorkoutLogs();
        }
    }, [userId, plan]);

    const handleToggleLogs = () => {
        setShowLogs(!showLogs);
    };

    const renderWorkoutLogTables = () => {
        // Group logs by date
        const logsGroupedByDate = items.reduce((acc, log) => {
            const dateGroup = acc[log.completed_date] = acc[log.completed_date] || {};
            const exerciseLogs = dateGroup[log.exercise] = dateGroup[log.exercise] || [];
            exerciseLogs.push(log);
            return acc;
        }, {});

        // Map through each date group
        return Object.entries(logsGroupedByDate).map(([date, exercises]) => (
            <div key={date} className={classes.dateSection}>
                <Paper className={classes.Paper}>
                <Typography variant="h6">{date}</Typography>
                {Object.entries(exercises).map(([exerciseName, logs], index) => (
                    <div key={index}>
                        <Typography variant="subtitle1" className={classes.exerciseName}>{exerciseName}</Typography>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Set</TableCell>
                                    <TableCell>Reps</TableCell>
                                    <TableCell>Weight</TableCell>
                                    <TableCell>Duration (mins)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {logs.map((log, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{log.reps}</TableCell>
                                        <TableCell>{log.weight}</TableCell>
                                        <TableCell>{log.duration_minutes}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                ))}
                </Paper>
            </div>
        ));
    };

    if (!plan || !plan.exercises || plan.exercises.length === 0) {
        return <div className={classes.container}>No exercises found for this plan.</div>;
    }
    return (
        <div className={classes.container}>
            <Paper className={classes.Paper}>
                <Typography variant="h6">{plan.plan_name}</Typography>
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
                                <TableCell>{exercise.exercise.name}</TableCell>
                                <TableCell>{exercise.sets}</TableCell>
                                <TableCell>{exercise.reps}</TableCell>
                                <TableCell>{exercise.weight}</TableCell>
                                <TableCell>{exercise.duration_minutes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>

            <Button onClick={handleToggleLogs} className={classes.viewLogsButton}>
                {showLogs ? 'Hide Logs' : 'View Logs'}
            </Button>

            {showLogs && (
                <div>
                    {renderWorkoutLogTables()}
                </div>
            )}
        </div>
    );
};

export default withStyles(styles)(ReadWorkoutPlan);

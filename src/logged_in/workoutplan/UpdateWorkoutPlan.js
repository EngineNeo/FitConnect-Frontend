import React from 'react';
import { Typography, Paper } from '@mui/material';
import { withRouter } from "react-router-dom";
import withStyles from '@mui/styles/withStyles';

const styles = (theme) => ({
    container: {
        padding: 20,
        margin: 20,
        width: '100%',
    },
    title: {
        marginBottom: 20,
    },
});

const UpdateWorkoutPlan = (props, { plan }) => {
    const { classes } = props;

    if (!plan || !plan.exercises || plan.exercises.length === 0) {
        return <div className={classes.container}>No exercises found for this plan.</div>;
    }
    return (
        <Paper className={classes.container}>
            <Typography variant="h5" className={classes.title}>
                Update
            </Typography>
        </Paper>
    );
};

export default withRouter(withStyles(styles)(UpdateWorkoutPlan));

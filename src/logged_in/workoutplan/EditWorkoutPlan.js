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

const EditWorkoutPlan = (props, { selectedPlan }) => {
    const { classes } = props;
    return (
        <Paper className={classes.container}>
            <Typography variant="h5" className={classes.title}>
                {selectedPlan ? selectedPlan.content : 'Select a Plan'}
            </Typography>
            {/* Additional configuration options here */}
        </Paper>
    );
};

export default withRouter(withStyles(styles)(EditWorkoutPlan));

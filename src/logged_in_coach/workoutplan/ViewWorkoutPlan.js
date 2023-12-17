import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const CreateWorkoutPlan = ({ onSave }) => {
    const [planTitle, setPlanTitle] = useState('');

    const handleSave = () => {
        onSave({ title: planTitle });
    };

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
            <Button variant="contained" color="primary" onClick={handleSave}>
                Save Plan
            </Button>
        </div>
    );
};

export default CreateWorkoutPlan;
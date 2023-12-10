import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, Divider, TextField, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const mockCoachRequests = [
  { id: 1, name: 'John Doe', requestDate: '2023-01-01' },
  { id: 2, name: 'Jane Smith', requestDate: '2023-01-05' },
];

const mockExerciseBank = [
  { id: 1, name: 'Push-ups' },
  { id: 2, name: 'Sit-ups' },
];

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const AdminDashboard = () => {
  const [coachRequests, setCoachRequests] = useState(mockCoachRequests);
  const [exerciseBank, setExerciseBank] = useState(mockExerciseBank);
  const [newExercise, setNewExercise] = useState('');

  const handleAcceptRequest = (requestId) => {
    // Implement acceptance logic
  };

  const handleRejectRequest = (requestId) => {
    // Implement rejection logic
  };

  const handleAddExercise = () => {
    // Implement add exercise logic
  };

  const handleRemoveExercise = (exerciseId) => {
    // Implement remove exercise logic
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: 'black', color: 'white', p: 3, boxSizing: 'border-box' }}>
      <Box mb={4}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Manage Coach Requests</Typography>
        <Box sx={{ maxHeight: 300, overflow: 'auto', backgroundColor: 'black' }}>
          <List>
            {coachRequests.map((request) => (
              <ListItem
                key={request.id}
                sx={{ borderBottom: '1px solid grey', display: 'flex', justifyContent: 'space-between' }}
              >
                <Box>{request.name} - {request.requestDate}</Box>
                <Box>
                  <StyledButton
                    variant="contained"
                    color="success"
                    onClick={() => handleAcceptRequest(request.id)}
                  >
                    Accept
                  </StyledButton>
                  <StyledButton
                    variant="contained"
                    color="error"
                    onClick={() => handleRejectRequest(request.id)}
                  >
                    Reject
                  </StyledButton>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Divider light />
      <Box mt={4} display="flex" gap={2}>
        <Box width="50%">
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Add Exercise to Exercise Bank</Typography>
          <TextField
            label="New Exercise"
            value={newExercise}
            onChange={(e) => setNewExercise(e.target.value)}
            variant="outlined"
            sx={{
              input: { color: 'white' },
              label: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&:hover fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
              },
              mb: 2
            }}
            fullWidth
          />
          <StyledButton
            onClick={handleAddExercise}
            variant="contained"
            color="success"
          >
            Add Exercise
          </StyledButton>
        </Box>
        <Box width="50%" sx={{ overflow: 'auto', maxHeight: '300px' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>Exercise Bank</Typography>
          <List>
            {exerciseBank.map((exercise) => (
              <Box key={exercise.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography>{exercise.name}</Typography>
                <StyledButton
                  variant="contained"
                  color="error"
                  onClick={() => handleRemoveExercise(exercise.id)}
                >
                  Remove
                </StyledButton>
              </Box>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;

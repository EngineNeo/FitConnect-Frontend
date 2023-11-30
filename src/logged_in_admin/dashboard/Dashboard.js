import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, Divider, TextField } from '@mui/material';

const mockCoachRequests = [
  { id: 1, name: 'John Doe', requestDate: '2023-01-01' },
  { id: 2, name: 'Jane Smith', requestDate: '2023-01-05' },
];

const mockExerciseBank = [
  { id: 1, name: 'Push-ups' },
  { id: 2, name: 'Sit-ups' },
];

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

  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', p: 3 }}>
      <Box mb={4}>
        <Typography variant="h6">Manage Coach Requests</Typography>
        <List>
          {coachRequests.map((request) => (
            <ListItem
              key={request.id}
              sx={{ borderBottom: '1px solid grey' }}
            >
              {request.name} - {request.requestDate}
              <Button
                sx={{
                  ml: 1,
                  bgcolor: 'green',
                  '&:hover': { bgcolor: 'darkgreen' },
                }}
                onClick={() => handleAcceptRequest(request.id)}
              >
                Accept
              </Button>
              <Button
                sx={{
                  ml: 1,
                  bgcolor: 'red',
                  '&:hover': { bgcolor: 'darkred' },
                }}
                onClick={() => handleRejectRequest(request.id)}
              >
                Reject
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
      <Divider light />
      <Box mt={4} display="flex" justifyContent="space-between">
        <Box width="50%">
          <Typography variant="h6">Add Exercise to Exercise Bank</Typography>
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
            }}
            fullWidth
            margin="normal"
          />
          <Button
            onClick={handleAddExercise}
            sx={{ bgcolor: 'green', '&:hover': { bgcolor: 'darkgreen' } }}
          >
            Add Exercise
          </Button>
        </Box>
        <Box width="50%" sx={{ overflow: 'auto', maxHeight: '300px' }}>
          <Typography variant="h6">Exercise Bank</Typography>
          <List>
            {exerciseBank.map((exercise) => (
              <ListItem key={exercise.id}>
                {exercise.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;

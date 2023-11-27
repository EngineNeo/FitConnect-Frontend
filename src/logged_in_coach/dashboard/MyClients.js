import React, { useState } from 'react';
import { Box, Card, CardContent, CardActionArea, CardMedia, Typography, Button, Modal, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

//mock
const mockClients = [
  { id: 1, name: "John Doe", age: 30, goal: "Weight Loss", plan: "Chest Day" },
  { id: 2, name: "Jane Smith", age: 28, goal: "Muscle Gain", plan: "Arm Day" },
  { id: 3, name: "Alice Johnson", age: 32, goal: "Endurance Training", plan: "Leg Day" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
    padding: theme.spacing(3),
  },
  card: {
    backgroundColor: '#222',
    color: 'white',
    margin: theme.spacing(2),
    '&:hover': {
      backgroundColor: '#333',
    },
  },
  media: {
    height: 140,
    backgroundSize: 'cover',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  },
  paper: {
    backgroundColor: '#000',
    color: 'white',
    padding: theme.spacing(2),
    outline: 'none',
    maxWidth: '500px',
    margin: 'auto',
  },
  button: {
    margin: theme.spacing(1),
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  editButton: {
    backgroundColor: theme.palette.warning.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  createButton: {
    backgroundColor: theme.palette.success.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.success.dark,
    },
  },
}));

function ClientModule() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleOpen = (client) => {
    setSelectedClient(client);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {mockClients.map((client) => (
          <Grid item xs={12} sm={6} md={4} key={client.id}>
            <Card className={classes.card}>
              <CardActionArea onClick={() => handleOpen(client)}>
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/150" // Static image placeholder
                  title="Client Image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {client.name}
                  </Typography>
                  <Typography variant="body2">
                    Plan: {client.plan}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedClient && (
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
        >
          <Box className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              {selectedClient.name}
            </Typography>
            <Typography variant="body1">
              Age: {selectedClient.age}
            </Typography>
            <Typography variant="body1">
              Goal: {selectedClient.goal}
            </Typography>
            <Typography variant="body1">
              Workout Plan: {selectedClient.plan}
            </Typography>
            <Box>
              <Button className={`${classes.button} ${classes.editButton}`}>
                Edit Workout Plan
              </Button>
              <Button className={`${classes.button} ${classes.createButton}`}>
                Create New Plan
              </Button>
              <Button className={`${classes.button} ${classes.deleteButton}`}>
                Delete Plan
              </Button>
              <Button className={`${classes.button} ${classes.deleteButton}`}>
                Remove Client
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
}

export default ClientModule;

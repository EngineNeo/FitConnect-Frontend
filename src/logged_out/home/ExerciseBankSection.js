import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@mui/styles';
import { Grid, Paper, Typography, TextField, Button, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CableIcon from '@mui/icons-material/Cable';
import LineWeightIcon from '@mui/icons-material/LineWeight';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AdjustIcon from '@mui/icons-material/Adjust';
import classNames from 'classnames';

const styles = (theme) => ({
  searchContainer: {
    padding: theme.spacing(2),
  },
  exerciseBox: {
    padding: theme.spacing(1),
    textAlign: 'center',
    width: '100%', 
    aspectRatio: '1 / 1', 
    border: '1px solid #ddd',
    backgroundColor: 'transparent',
    margin: 'auto',
  },
  icon: {
    fontSize: 40,
  },
  gridContainer: {
    maxWidth: 'calc(100% - 16px)',
    margin: 'auto',
  }
});

function SearchBar() {
  return (
    <Paper className={styles.searchContainer}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <TextField fullWidth label="Search Exercises" variant="outlined" />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

function ExerciseBox({ exercise, classes }) {
  const Icon = getIconForEquipmentId(exercise.equipment_id);

  return (
    <Grid item xs={6} sm={4} md={2} lg={1.714}>
      <Paper className={classes.exerciseBox}>
        <Icon className={classes.icon} />
        <Typography variant="subtitle1">{exercise.name}</Typography>
      </Paper>
    </Grid>
  );
}

function getIconForEquipmentId(equipmentId) {
  switch (equipmentId) {
    case 1: return DirectionsRunIcon;
    case 2:
    case 3: return FitnessCenterIcon;
    case 4: return CableIcon;
    case 5: return LineWeightIcon;
    case 6: return LocalMallIcon;
    case 7: return AdjustIcon;
    default: return DirectionsRunIcon;
  }
}

function ExerciseBankSection(props) {
  const { classes } = props;
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 14;

  useEffect(() => {
    axios.get('http://localhost:8000/fitConnect/exercises')
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="lg-p-top" style={{ backgroundColor: "#0e1111" }}>
      <Typography variant="h3" align="center" className={classNames("lg-mg-bottom", classes.textWhite)}>
        Exercises
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix, classes.textWhite)}>
        <SearchBar />
        <Grid container spacing={3} className={classes.gridContainer}>
          {currentExercises.map(exercise => (
            <ExerciseBox key={exercise.id} exercise={exercise} classes={classes} />
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          color="primary"
          style={{ paddingTop: '1rem' }}
        />
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ExerciseBankSection);

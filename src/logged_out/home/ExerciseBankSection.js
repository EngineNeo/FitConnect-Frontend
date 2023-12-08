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
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
});

// function SearchBar({ onSearchChange }) {
//   const [searchInput, setSearchInput] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchInput(event.target.value);
//     onSearchChange(event.target.value);
//   };

//   return (
//     <Paper className={styles.searchContainer}>
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs>
//           <TextField
//             fullWidth
//             label="Search Exercises"
//             variant="outlined"
//             value={searchInput}
//             onChange={handleSearchChange}
//           />
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }

function ExerciseBox({ exercise, classes }) {
  const Icon = getIconForEquipmentName(exercise.equipment_name);

  return (
    <Grid item xs={6} sm={4} md={2} lg={1.714}>
      <Paper className={classes.exerciseBox}>
        <Icon className={classes.icon} />
        <Typography variant="subtitle1">{exercise.name}</Typography>
      </Paper>
    </Grid>
  );
}

function getIconForEquipmentName(equipmentName) {
  switch (equipmentName.toLowerCase()) {
    case 'none': return DirectionsRunIcon;
    case 'barbell': return FitnessCenterIcon;
    case 'dumbbell': return FitnessCenterIcon;
    case 'cables': return CableIcon;
    case 'band': return LineWeightIcon;
    case 'kettlebell': return LocalMallIcon;
    case 'plate': return AdjustIcon;
    default: return DirectionsRunIcon;
  }
}

function ExerciseBankSection(props) {
  const { classes } = props;
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const exercisesPerPage = 14;

  useEffect(() => {
    axios.get('http://localhost:8000/fitConnect/exercises')
      .then(response => {
        setExercises(response.data);
        setFilteredExercises(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const filtered = exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.muscle_group_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exercise.equipment_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExercises(filtered);
    setCurrentPage(1); // Reset to first page on new search
  }, [searchTerm, exercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = filteredExercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="lg-p-top" style={{ backgroundColor: "#0e1111" }}>
      <Typography variant="h3" align="center" className={classNames("lg-mg-bottom", classes.textWhite)}>
        Exercises
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix, classes.textWhite)}>
        <Paper className={classes.searchContainer}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <TextField
                fullWidth
                label="Search Exercises"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<SearchIcon />}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={3} className={classes.gridContainer}>
          {currentExercises.map(exercise => (
            <ExerciseBox key={exercise.id} exercise={exercise} classes={classes} />
          ))}
        </Grid>
        <div className={classes.paginationContainer}>
          <Pagination
            count={Math.ceil(filteredExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(ExerciseBankSection);

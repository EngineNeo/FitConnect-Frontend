import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Grid, Divider } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

import WorkoutPlanList from "./WorkoutPlanList";
import ReadWorkoutPlan from "./ReadWorkoutPlan";
import UpdateWorkoutPlan from "./UpdateWorkoutPlan";
import CreateWorkoutPlan from "./CreateWorkoutPlan";

const styles = (theme) => ({
  PlanList: {
    width: "300px",
    height: '100vh',
  },
});

function WorkoutPlan(props) {
  const { selectWorkoutPlan, classes } = props;
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [viewMode, setViewMode] = useState('viewingPlan');

  useEffect(selectWorkoutPlan, [selectWorkoutPlan]);

  const userId = localStorage.getItem('user_id');

  const fetchWorkoutPlans = async () => {
    try {
      const response = await fetch(`http://localhost:8000/fitConnect/users/${userId}/plans`);
      const data = await response.json();
      setWorkoutPlans(data)
    } catch (error) {
      console.error('Error fetching workout plans:', error);
    }
  };

  useEffect(() => {
    fetchWorkoutPlans();
  }, []);


  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setViewMode('viewingPlan');
  };

  const handleCreateNewPlan = () => {
    setSelectedPlan(null);
    setViewMode('creatingPlan');
  };

  const handleSelectTodaysPlan = (plan) => {
    setSelectedPlan(plan);
    setViewMode('updatingPlan');
  };

  const handleSaveNewPlan = (newPlan) => {
    setWorkoutPlans([...workoutPlans, newPlan]);
    setViewMode('viewingPlan');
    fetchWorkoutPlans();
  };

  return (
    <Fragment>
      <Grid container className={classes.fullHeight}>
        <Grid item className={classes.PlanList}>
          <WorkoutPlanList
            plans={workoutPlans}
            onSelectPlan={handleSelectPlan}
            onCreateNewPlan={handleCreateNewPlan}
            onSelectTodaysPlan={handleSelectTodaysPlan}
          />
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.fullHeight} />
        <Grid item xs className={classes.fullHeight}>
          {viewMode === 'creatingPlan' && <CreateWorkoutPlan onSave={handleSaveNewPlan} />}
          {viewMode === 'updatingPlan' && <UpdateWorkoutPlan plan={selectedPlan} />}
          {viewMode === 'viewingPlan' && <ReadWorkoutPlan plan={selectedPlan} />}
        </Grid>
      </Grid>
    </Fragment>
  );
}

WorkoutPlan.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  selectWorkoutPlan: PropTypes.func.isRequired,
};

export default withRouter(withStyles(styles)(WorkoutPlan));
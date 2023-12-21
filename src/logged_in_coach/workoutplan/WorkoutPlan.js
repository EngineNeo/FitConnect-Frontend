import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Grid, Divider } from '@mui/material';
import withStyles from '@mui/styles/withStyles';

import WorkoutPlanList from "./WorkoutPlanList";
// import ViewWorkoutPlan from "./ViewWorkoutPlan";
import EditWorkoutPlan from "./EditWorkoutPlan";
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
  const [isCreatingNewPlan, setIsCreatingNewPlan] = useState(false);

  useEffect(selectWorkoutPlan, [selectWorkoutPlan]);

  const handleSelectPlan = (plan) => {
    setIsCreatingNewPlan(false);
    setSelectedPlan(plan);
  };

  const handleCreateNewPlan = () => {
    setIsCreatingNewPlan(true);
  };

  const handleSaveNewPlan = (newPlan) => {
    setIsCreatingNewPlan(false);
  };

  return (
    <Fragment>
      <Grid container className={classes.fullHeight}>
        <Grid item className={classes.PlanList}>
          <WorkoutPlanList
            onSelectPlan={handleSelectPlan}
            onCreateNewPlan={handleCreateNewPlan}
          />
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.fullHeight} />
        <Grid item xs className={classes.fullHeight}>
          {isCreatingNewPlan ? (
            <CreateWorkoutPlan onSave={handleSaveNewPlan} />
          ) : (
            <EditWorkoutPlan selectedPlan={selectedPlan} />
          )}
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
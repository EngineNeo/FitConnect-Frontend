import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

function WorkoutPlan(props) {
  const {
    selectWorkoutPlan,
  } = props;

  useEffect(selectWorkoutPlan, [selectWorkoutPlan]);

  return (
    <Fragment>
    </Fragment>
  );
}

WorkoutPlan.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  selectWorkoutPlan: PropTypes.func.isRequired,
};

export default WorkoutPlan;

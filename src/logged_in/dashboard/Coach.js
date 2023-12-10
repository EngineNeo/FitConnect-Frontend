import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

function Coach(props) {
  const {
    selectCoach,
  } = props;

  useEffect(selectCoach, [selectCoach]);

  return (
    <Fragment>
    </Fragment>
  );
}

Coach.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  selectCoach: PropTypes.func.isRequired,
};

export default Coach;

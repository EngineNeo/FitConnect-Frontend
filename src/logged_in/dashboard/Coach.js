import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
// import { Typography, Box } from "@mui/material";
// import SettingsArea from "./SettingsArea";
// import UserDataArea from "./UserDataArea";
// import AccountInformationArea from "./AccountInformationArea";
import StatisticsArea from "./StatisticsArea";

function Coach(props) {
  const {
    selectCoach,
    CardChart,
    statistics,
    // toggleAccountActivation,
    // pushMessageToSnackbar,
    // targets,
    // setTargets,
    // isAccountActivated,
  } = props;

  useEffect(selectCoach, [selectCoach]);

  return (
    <Fragment>
      <StatisticsArea CardChart={CardChart} data={statistics} />
    </Fragment>
  );
}

Coach.propTypes = {
  CardChart: PropTypes.elementType,
  // statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectCoach: PropTypes.func.isRequired,
};

export default Coach;

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import StatisticsArea from "./StatisticsArea";

function Dashboard(props) {
  const {
    selectDashboard,
    CardChart,
    statistics,
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <StatisticsArea CardChart={CardChart} data={statistics} />
    </Fragment>
  );
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType,
  // statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;

import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

function UserLogs(props) {
  const {
    selectUserLogs,
  } = props;

  useEffect(selectUserLogs, [selectUserLogs]);

  return (
    <Fragment>

    </Fragment>
  );
}

UserLogs.propTypes = {
  pushMessageToSnackbar: PropTypes.func,
  selectUserLogs: PropTypes.func.isRequired,
};

export default UserLogs;

import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FindCoach from "./FindCoach";

function Coach(props) {
  const { selectCoach } = props;
  const [hasCoach, setHasCoach] = useState(true);

  useEffect(() => {
    selectCoach();

    const userHasCoach = localStorage.getItem("has_coach") === "true";
    setHasCoach(userHasCoach);
  }, [selectCoach]);

  return (
    <Fragment>
      {!hasCoach && <FindCoach />}
    </Fragment>
  );
}

Coach.propTypes = {
  selectCoach: PropTypes.func.isRequired,
};

export default Coach;

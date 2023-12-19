import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import FindCoach from "./FindCoach";
import ViewCoach from "./ViewCoach";

function Coach(props) {
  const { selectCoach } = props;
  const [hasCoach, setHasCoach] = useState(localStorage.getItem("has_coach") === "true");
  const [coachData, setCoachData] = useState(null);

  useEffect(() => {
    selectCoach();

    const fetchCoachClients = async () => {
      const hiredCoachId = localStorage.getItem("hired_coach");

      if (!hiredCoachId) return;

      try {
        const response = await fetch(`http://localhost:8000/fitConnect/coaches/${hiredCoachId}/clients`);
        if (!response.ok) throw new Error('Failed to fetch coach clients');

        const clients = await response.json();
        const userId = localStorage.getItem("user_id");
        const matchedClient = clients.find(client => client.user_id.toString() === userId);        

        if (matchedClient) {
          localStorage.setItem("has_coach", "true");
          setHasCoach(true);
          setCoachData(matchedClient);
        }
      } catch (error) {
        console.error("Error fetching coach clients:", error);
      }
    };

    fetchCoachClients();
  }, [selectCoach]);

  return (
    <Fragment>
      {!hasCoach && <FindCoach />}
      {hasCoach && coachData && <ViewCoach coach={coachData} />}
    </Fragment>
  );
}

Coach.propTypes = {
  selectCoach: PropTypes.func.isRequired,
};

export default Coach;
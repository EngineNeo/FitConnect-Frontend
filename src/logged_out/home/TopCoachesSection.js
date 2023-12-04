import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { withTheme } from "@mui/styles";
import axios from 'axios';
import TopCoachesCard from './TopCoachesCard';

function TopCoachesSection() {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/fitConnect/coaches')
      .then(response => {
        const topCoaches = response.data.slice(0, 5);
        setCoaches(topCoaches);
      })
      .catch(error => {
        console.error('There was an error fetching the coaches data:', error);
      });
  }, []);

  return (
    <div id="TopCoachesSection" style={{ backgroundColor: "#0e1111" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom" color="#FFFFFF">
          Our Top Coaches
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {coaches.map(coach => (
            <TopCoachesCard
              key={coach.coach_id}
              image="images/ProfilePic/JohnSmith.jpg"
              headline={`${coach.first_name} ${coach.last_name}`}
              text={coach.bio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withTheme(TopCoachesSection);
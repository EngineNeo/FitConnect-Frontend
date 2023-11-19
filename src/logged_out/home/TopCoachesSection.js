import React from "react";
import { Typography } from "@mui/material";
import { withTheme } from "@mui/styles";

function TopCoachesSection(props) {
  // const { theme } = props;

  return (
    <div style={{ backgroundColor: "#0e1111" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom" color="#FFFFFF">
          Our Top Coaches
        </Typography>
      </div>
    </div>
  );
}

TopCoachesSection.propTypes = {};

export default withTheme(TopCoachesSection);

import React from "react";
import { Typography } from "@mui/material";
import { withTheme } from "@mui/styles";

function FeaturesSection(props) {
  // const { theme } = props;

  return (
    <div id="FeaturesSection" style={{ backgroundColor: "#0e1111" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom" color="#FFFFFF">
          Features
        </Typography>
      </div>
    </div>
  );
}

FeaturesSection.propTypes = {};

export default withTheme(FeaturesSection);

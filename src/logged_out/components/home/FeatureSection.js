import React from "react";
import { Grid, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import ComputerIcon from "@mui/icons-material/Computer";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MeassageIcon from "@mui/icons-material/Message"
import calculateSpacing from "./calculateSpacing";
import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import FeatureCard from "./FeatureCard";
import useWidth from "../../../shared/functions/useWidth";

const iconSize = 30;
function FeatureSection(props) {
  const { theme } = props;
  const width = useWidth();
  const isWidthUpMd = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div style={{ backgroundColor: "#0e1111" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom" color="#FFFFFF">
          Coaches
        </Typography>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);

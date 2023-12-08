import React from "react";
import classNames from "classnames";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import useWidth from "../../shared/functions/useWidth";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("lg")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
  textWhite: {
    color: "#FFFFFF",
  }
});

function ExerciseBankSection(props) {
  const { classes } = props;

  return (
    <div className="lg-p-top" style={{ backgroundColor: "#0e1111" }}>
      <Typography variant="h3" align="center" className={classNames("lg-mg-bottom", classes.textWhite)}>
        Exercises
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix, classes.textWhite)}>

      </div>
    </div>
  );
}

ExerciseBankSection.propTypes = {};

export default withStyles(styles, { withTheme: true })(ExerciseBankSection);

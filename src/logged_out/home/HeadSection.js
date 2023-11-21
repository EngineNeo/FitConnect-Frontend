import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Typography, Box, Button } from "@mui/material";
import withStyles from "@mui/styles/withStyles";
// import WaveBorder from "../../shared/components/WaveBorder";
import useMediaQuery from "@mui/material/useMediaQuery";

const gifFiles = [
  "/images/logged_out/DumbbellOpt.gif",
  "/images/logged_out/JumpRopeOpt.gif",
  "/images/logged_out/RunningOpt.gif",
];

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("xl")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.common.black,
    paddingBottom: theme.spacing(2),
    overflow: "hidden",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "50px",
      backgroundColor: "#0e1111",
      transform: "skewY(-1deg)",
      transformOrigin: "100%",
      zIndex: 3
    },
  },
  backgroundGif: {
    position: "absolute",
    width: "100%",
    left: 0,
    top: 0,
    height: "100%",
    zIndex: 1,
    opacity: 0,
    transition: "opacity 2s ease-in-out",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  activeGif: {
    opacity: 0.5,
    objectFit: "contain", // Same as above, consider removing or adjusting this
  },
  container: {
    marginTop: theme.spacing(30),
    marginBottom: theme.spacing(30),
    [theme.breakpoints.down("lg")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  grid: {
    zIndex: 3,
  }
  // waveBorder: {
  //   paddingTop: theme.spacing(4),
  // },
});

function HeadSection(props) {
  const { classes, theme } = props;
  const isWidthUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [currentGif, setCurrentGif] = useState(0);
  const [nextGif, setNextGif] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGif(nextGif);
      setNextGif((prevNextGif) => (prevNextGif + 1) % gifFiles.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [nextGif]);

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
              <div className={classNames(classes.containerFix, "container")}>
              <Box justifyContent="space-between" className= "row">
                  <Grid item xs={12} md={5} className={classNames(classes.grid)}>
                      <Typography 
                      variant={isWidthUpLg ? "h3" : "h4"}
                      data-aos-delay="200"
                      data-aos="zoom-out"
                      color="#FFFFFF"
                      textAlign="center">
                        Elevate your fitness journey and connect with one of our expert coaches
                      </Typography>
                      <Box display="flex" justifyContent="center" marginTop="50px">
                        <Button variant="contained">
                          Learn More
                        </Button>
                      </Box>  
                  </Grid>
                </Box>
              </div>
          </Box>
        </div>
        {gifFiles.map((gif, index) => (
          <div
            key={gif}
            className={`${classes.backgroundGif} ${index === currentGif ? classes.activeGif : ""
              }`}
            style={{ backgroundImage: `url(${gif})` }}
          />
        ))}
      </div>
      {/* <WaveBorder
        upperColor={theme.palette.common.black}
        lowerColor="#0e1111"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      /> */}
    </Fragment>
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  theme: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(HeadSection);

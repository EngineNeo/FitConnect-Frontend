import React, { memo, useCallback, useState, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from '@mui/styles/withStyles';
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import ConsecutiveSnackbarMessages from "../shared/components/ConsecutiveSnackbarMessages";
import smoothScrollTop from "../shared/functions/smoothScrollTop";
import { Box, Grid, Typography } from '@mui/material';

const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
});


function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [CardChart, setCardChart] = useState(null);
  const [hasFetchedCardChart, setHasFetchedCardChart] = useState(false);
  const [targets, setTargets] = useState([]);
  const [isAccountActivated, setIsAccountActivated] = useState(false);
  const [pushMessageToSnackbar, setPushMessageToSnackbar] = useState(null);

  const toggleAccountActivation = useCallback(() => {
    if (pushMessageToSnackbar) {
      if (isAccountActivated) {
        pushMessageToSnackbar({
          text: "Your account is now deactivated.",
        });
      } else {
        pushMessageToSnackbar({
          text: "Your account is now activated.",
        });
      }
    }
    setIsAccountActivated(!isAccountActivated);
  }, [pushMessageToSnackbar, isAccountActivated, setIsAccountActivated]);

  const selectDashboard = useCallback(() => {
    smoothScrollTop();
    document.title = "FitConnect - Coach Dashsboard";
    setSelectedTab("Dashboard");
    if (!hasFetchedCardChart) {
      setHasFetchedCardChart(true);
      import("../shared/components/CardChart").then((Component) => {
        setCardChart(Component.default);
      });
    }
  }, [
    setSelectedTab,
    setCardChart,
    hasFetchedCardChart,
    setHasFetchedCardChart,
  ]);

  const getPushMessageFromChild = useCallback(
    (pushMessage) => {
      setPushMessageToSnackbar(() => pushMessage);
    },
    [setPushMessageToSnackbar]
  );

  const handleTabChange = useCallback((newTab) => {
    setSelectedTab(newTab);
  }, []);

  // useEffect(() => {
  //   fetchRandomTargets();
  //   fetchRandomStatistics();
  //   fetchRandomTransactions();
  //   fetchRandomMessages();
  // }, [
  //   fetchRandomTargets,
  //   fetchRandomStatistics,
  //   fetchRandomTransactions,
  //   fetchRandomMessages,
  // ]);

  return (
    <Fragment>
      <NavBar
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
      />
      <ConsecutiveSnackbarMessages
        getPushMessageFromChild={getPushMessageFromChild}
      />
      <main className={classNames(classes.main)}>
        <Routing
          isAccountActivated={isAccountActivated}
          CardChart={CardChart}
          toggleAccountActivation={toggleAccountActivation}
          pushMessageToSnackbar={pushMessageToSnackbar}
          targets={targets}
          selectDashboard={selectDashboard}
          setTargets={setTargets}
        />
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));

import React, { memo, useCallback, useState, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import withStyles from '@mui/styles/withStyles';
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import ConsecutiveSnackbarMessages from "../shared/components/ConsecutiveSnackbarMessages";
import smoothScrollTop from "../shared/functions/smoothScrollTop";

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

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [CardChart, setCardChart] = useState(null);
  const [hasFetchedCardChart, setHasFetchedCardChart] = useState(false);
  const [targets, setTargets] = useState([]);
  const [isAccountActivated, setIsAccountActivated] = useState(false);
  const [pushMessageToSnackbar, setPushMessageToSnackbar] = useState(null);

  // const fetchRandomTargets = useCallback(() => {
  //   const targets = [];
  //   for (let i = 0; i < 35; i += 1) {
  //     const randomPerson = persons[Math.floor(Math.random() * persons.length)];
  //     const target = {
  //       id: i,
  //       number1: Math.floor(Math.random() * 251),
  //       number2: Math.floor(Math.random() * 251),
  //       number3: Math.floor(Math.random() * 251),
  //       number4: Math.floor(Math.random() * 251),
  //       name: randomPerson.name,
  //       profilePicUrl: randomPerson.src,
  //       isActivated: Math.round(Math.random()) ? true : false,
  //     };
  //     targets.push(target);
  //   }
  //   setTargets(targets);
  // }, [setTargets]);

  // const fetchRandomStatistics = useCallback(() => {
  //   const statistics = { profit: [], views: [] };
  //   const iterations = 300;
  //   const oneYearSeconds = 60 * 60 * 24 * 365;
  //   let curProfit = Math.round(3000 + Math.random() * 1000);
  //   let curViews = Math.round(3000 + Math.random() * 1000);
  //   let curUnix = Math.round(new Date().getTime() / 1000) - oneYearSeconds;
  //   for (let i = 0; i < iterations; i += 1) {
  //     curUnix += Math.round(oneYearSeconds / iterations);
  //     curProfit += Math.round((Math.random() * 2 - 1) * 10);
  //     curViews += Math.round((Math.random() * 2 - 1) * 10);
  //     statistics.profit.push({
  //       value: curProfit,
  //       timestamp: curUnix,
  //     });
  //     statistics.views.push({
  //       value: curViews,
  //       timestamp: curUnix,
  //     });
  //   }
  //   setStatistics(statistics);
  // }, [setStatistics]);

  // const fetchRandomTransactions = useCallback(() => {
  //   const transactions = [];
  //   const iterations = 32;
  //   const oneMonthSeconds = Math.round(60 * 60 * 24 * 30.5);
  //   const caseTemplates = [
  //     {
  //       clientName: "Starter subscription",
  //       isSubscription: true,
  //       caseStatus: "Completed",
  //     },
  //     {
  //       clientName: "Premium subscription",
  //       isSubscription: true,
  //       caseStatus: "Completed",
  //     },
  //     {
  //       clientName: "Business subscription",
  //       isSubscription: true,
  //       caseStatus: "Stage 1",
  //     },
  //     {
  //       clientName: "Tycoon subscription",
  //       isSubscription: true,
  //       caseStatus: "Stage 2",
  //     },
  //     {
  //       clientName: "Added funds",
  //       isSubscription: false,
  //       caseStatus: "Stage 3",
  //     },
  //     {
  //       clientName: "Added funds",
  //       isSubscription: false,
  //       caseStatus: "Stage 4",
  //     },
  //   ];
  //   let curUnix = Math.round(
  //     new Date().getTime() / 1000 - iterations * oneMonthSeconds
  //   );
  //   for (let i = 0; i < iterations; i += 1) {
  //     const randomTransactionTemplate =
  //       caseTemplates[
  //         Math.floor(Math.random() * caseTemplates.length)
  //       ];
  //     const transaction = {
  //       id: i,
  //       clientName: randomTransactionTemplate.clientName,
  //       caseStatus: randomTransactionTemplate.caseStatus,
  //       paidUntil: curUnix + oneMonthSeconds,
  //       timestamp: curUnix,
  //     };
  //     curUnix += oneMonthSeconds;
  //     transactions.push(transaction);
  //   }
  //   transactions.reverse();
  //   setTransactions(transactions);
  // }, [setTransactions]);

  // const fetchRandomMessages = useCallback(() => {
  //   shuffle(persons);
  //   const messages = [];
  //   const iterations = persons.length;
  //   const oneDaySeconds = 60 * 60 * 24;
  //   let curUnix = Math.round(
  //     new Date().getTime() / 1000 - iterations * oneDaySeconds
  //   );
  //   for (let i = 0; i < iterations; i += 1) {
  //     const person = persons[i];
  //     const message = {
  //       id: i,
  //       src: person.src,
  //       date: curUnix,
  //       text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed.",
  //     };
  //     curUnix += oneDaySeconds;
  //     messages.push(message);
  //   }
  //   messages.reverse();
  //   setMessages(messages);
  // }, [setMessages]);

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
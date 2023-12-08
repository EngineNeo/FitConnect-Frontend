import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import withStyles from '@mui/styles/withStyles';
import Dashboard from "./dashboard/Dashboard";
import Coach from "./dashboard/Coach"
import WorkoutPlan from "./dashboard/WorkoutPlan"
import UserLogs from "./dashboard/UserLogs"
import PropsRoute from "../shared/components/PropsRoute";
import useLocationBlocker from "../shared/functions/useLocationBlocker";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    classes,
    pushMessageToSnackbar,
    CardChart,
    statistics,
    targets,
    setTargets,
    selectDashboard,
    selectCoach,
    selectWorkoutPlan,
    selectUserLogs
  } = props;
  useLocationBlocker();
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path=""
          component={Dashboard}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          setTargets={setTargets}
          selectDashboard={selectDashboard}
        />
        <PropsRoute
          path=""
          component={Coach}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          setTargets={setTargets}
          selectCoach={selectCoach}
        />
        <PropsRoute
          path=""
          component={WorkoutPlan}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          setTargets={setTargets}
          selectWorkoutPlan={selectWorkoutPlan}
        />
        <PropsRoute
          path=""
          component={UserLogs}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          setTargets={setTargets}
          selectUserLogs={selectUserLogs}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  pushMessageToSnackbar: PropTypes.func,
  setTargets: PropTypes.func.isRequired,
  toggleAccountActivation: PropTypes.func,
  CardChart: PropTypes.elementType,
  // statistics: PropTypes.object.isRequired,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectCoach: PropTypes.func.isRequired,
  selectWorkoutPlan: PropTypes.func.isRequired,
  selectUserLogs: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));

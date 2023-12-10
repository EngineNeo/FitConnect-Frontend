import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import withStyles from '@mui/styles/withStyles';
import Dashboard from "./dashboard/Dashboard";
import PropsRoute from "../shared/components/PropsRoute";
import useLocationBlocker from "../shared/functions/useLocationBlocker";

const styles = (theme) => ({
  wrapper: {
    width: '100%',
    height: '100vh', 
    margin: 0, 
    padding: 0, 
    overflow: 'hidden',
  },
});

function Routing(props) {
  const {
    classes,
    pushMessageToSnackbar,
    toggleAccountActivation,
    CardChart,
    statistics,
    targets,
    setTargets,
    isAccountActivated,
    selectDashboard,
  } = props;
  useLocationBlocker();
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          exact path="/admin" component={Dashboard}
          key="dashboard"
          toggleAccountActivation={toggleAccountActivation}
          pushMessageToSnackbar={pushMessageToSnackbar}
          CardChart={CardChart}
          statistics={statistics}
          targets={targets}
          setTargets={setTargets}
          isAccountActivated={isAccountActivated}
          selectDashboard={selectDashboard}
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
  statistics: PropTypes.object.isRequired,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  openAddBalanceDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));
// what is /c/ when creating paths?
// the highlight around dashboard tab
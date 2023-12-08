import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import TopCoachesSection from "./TopCoachesSection";
import FeaturesSection from "./FeaturesSection";
import ExerciseBankSection from "./ExerciseBankSection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <FeaturesSection />
      <TopCoachesSection />
      <ExerciseBankSection />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;

import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'; // or you can use fetch
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Dashboard(props) {
  const { selectDashboard, user_id } = props;
  const [weightData, setWeightData] = useState([]);
  const [calorieData, setCalorieData] = useState([]);
  const [waterData, setWaterData] = useState([]);

  useEffect(() => {
    selectDashboard();
    fetchData();
  }, [selectDashboard, user_id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/fitConnect/daily_survey/${user_id}/`);
      processResponseData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const processResponseData = (data) => {
    // Initialize arrays for each type of data
    const processedWeightData = [];
    const processedCalorieData = [];
    const processedWaterData = [];

    // Iterate through each entry in the fetched data
    data.forEach(entry => {
      const { recorded_date, calorie_amount, water_amount, weight } = entry;

      // Add an object for each chart, assuming 'weight' field is available
      processedWeightData.push({ date: recorded_date, weight: weight });
      processedCalorieData.push({ date: recorded_date, calories: calorie_amount });
      processedWaterData.push({ date: recorded_date, water: water_amount });
    });

    // Update the state with the processed data
    setWeightData(processedWeightData);
    setCalorieData(processedCalorieData);
    setWaterData(processedWaterData);
  };

  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '30%' }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weightData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="weight" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div style={{ width: '30%' }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={calorieData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="calories" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{ width: '60%', margin: '0 auto' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={waterData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="water" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Fragment>
  );
}

Dashboard.propTypes = {
  weightData: PropTypes.array.isRequired,
  calorieData: PropTypes.array.isRequired,
  waterData: PropTypes.array.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;

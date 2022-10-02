import React from "react";
import Accordian from "../../Accordian/Accordian";
import "./forecast.css";

/**
 * @description functional react component for the Forecast section to display the weather forecast
 * for 7 days
 * @param {object} data - to pass the data from the response
 * @return {*} JSX
 */

const Forecast = ({ data }) => {
  return (
    <>
    <div className="forecast-container">
      {data.list.slice(0, 7).map((item, index) => (
        <Accordian item={item} index={index} key={index} />
      ))}
    </div>
    </>
  );
};

export default Forecast;

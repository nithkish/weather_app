import React, { useState } from "react";
import PropTypes from "prop-types";
import { WEEK_DAYS } from "../../constants/util/week";
import "./accordian.css"

/**
 * Re-usable Functional react component for AccordianItem
 * @description used to display the created question and answers along with respective edit and delete buttons
 * answer is dispalyed on click of the question
 * @param {*} { id, question, answer }
 * @return {*} JSX
 */

function Accordian({ item, index }) {
  const [collapse, setCollapse] = useState(false);
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

  return (
    <>
      <div className="accordian-box">
        <div
          className="accordian-header"
          onClick={() => setCollapse(!collapse)}
        >
          <div className="daily-item">
            <img
              src={`icons/${item.weather[0].icon}.png`}
              className="icon-small"
              alt="weather"
            />
            <label className="day">{forecastDays[index]}</label>
            <label className="description">{item.weather[0].description}</label>
            <label className="min-max">
              {Math.round(item.main.temp_max)}°C /
              {Math.round(item.main.temp_min)}°C
            </label>
          </div>
        </div>
        {collapse && (
          <div data-testid="panel" className="panel">
            <div className="daily-details-grid">
              <div className="daily-details-grid-item">
                <label>Pressure:</label>
                <label>{item.main.pressure}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Humidity:</label>
                <label>{item.main.humidity}</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Clouds:</label>
                <label>{item.clouds.all}%</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Wind speed:</label>
                <label>{item.wind.speed} m/s</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Sea level:</label>
                <label>{item.main.sea_level}m</label>
              </div>
              <div className="daily-details-grid-item">
                <label>Feels like:</label>
                <label>{item.main.feels_like}°C</label>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

Accordian.propTypes = {

};

export default Accordian;

import React from "react";
import "./currentweather.css";

/**
 * Functional react component for the weather card to display the current weather
 * @param {object} data - to pass the data from the response
 * @return {*} JSX
 */

const CurrentWeather = ({data}) => {
  return (
    <div className="current-weather-container">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)+"°C"}</p>
        <div className="details">
        <div className="parameter-row">
            <span className="parameter-label">Min/Max</span>
            <span className="parameter-value">{Math.round(data.main.temp_max)}°C /
              {Math.round(data.main.temp_min)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Clouds</span>
            <span className="parameter-value">{data.clouds.all}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

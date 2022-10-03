import React, { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../../api/weatherService";
import CurrentWeather from "./Current/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import ClipLoader from "react-spinners/ClipLoader";
import "./weather.css";

// css override object for spinner
const overide = {
  display: "block",
  margin: "30px auto",
};

/**
 * functional react component for the complete weather forecast section
 * @param {string} search - to pass the search value from the search box
 * @return {*} JSX
 */

const Weather = ({search}) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);

  /**
    * @description triggers the weather forecast api calls function
    * @return {void} 
  */
  const onSearchChange = () => {
    const [lat, lon] = search.value.split(" ");
    getWeatherForecast(lat, lon);
  };

   /**
    * @description triggers the weather forecast api calls to fetch the weather and forecast
    * @param {string} lat latitude of the location 
    * @param {string} lon longitude of the location 
    * @return {void} 
  */
  const getWeatherForecast = (lat, lon) => {
    Promise.all([getCurrentWeather({ lat, lon }), getForecast({ lat, lon })])
      .then(async (response) => {
        const weatherResponse = await response[0].data;
        const forcastResponse = await response[1].data;

        const label = weatherResponse.name +","+ weatherResponse.sys.country;

        setCurrentWeather({city:search?.label??label,...weatherResponse});
        setForecast(forcastResponse);
        setLoading(false);
      })
      .catch(() => {
        setCurrentWeather(null);
        setForecast(null);
        setLoading(false);
        setError("❌ Weather Service not available!")
      });
  };

   /**
    * @description uses Geolocation API to get current location, sets the state of position
    * @return {void} 
  */
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position.coords);
      },
      () => {
        setLoading(false);
        setError(
          "❌ Geolocation is not supported by this browser,Please search for the city!"
        );
      }
    );
  };

  /*
    * useEffect hook with search value as dependency, triggers the 
    * onSearchChange method if there is a search word else triggers the currentlocation
  */
  useEffect(() => {
    console.log("abc");
    setError(null);
    setLoading(true);
    if (search) onSearchChange();
    else getCurrentLocation();
  }, [search]);

  /*
    * additional useEffect hook to handle asynchronusity of setPosition and trigger
    * API calls for fetching current weather and forecast once current location is set.
  */
  useEffect(() => {
    if (position) getWeatherForecast(position.latitude, position.longitude);
  }, [position]);

  return (
    <>
      {error && <div className="error-box">{error}</div>}
      <ClipLoader
        color={"gray"}
        cssOverride={overide}
        loading={loading}
        size={100}
      />
      <div className="weather-container">
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
};

export default Weather;

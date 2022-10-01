import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../../api/weatherService";
import CurrentWeather from "./Current/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import "./weather.css";

const Weather = ({ search, setSearch }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null);

  const onSearchChange = () => {
    const [lat, lon] = search.value.split(" ");
    getWeatherForecast(lat, lon);
  };

  const getWeatherForecast = (lat, lon) => {
    Promise.all([getCurrentWeather({ lat, lon }), getForecast({ lat, lon })])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({city:search.label,...weatherResponse});
        setForecast(forcastResponse);
      })
      .catch(() => {
        setCurrentWeather(null);
        setForecast(null);
      });
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition(position.coords);
      },
      () => {
        setError(
          "Geolocation is not supported by this browser,Please search for the city."
        );
      }
    );
  };

  useEffect(() => {
    setError(null);
    if (search) onSearchChange();
    else getCurrentLocation();
  }, [search]);

  useEffect(() => {
    if (position) getWeatherForecast(position.latitude, position.longitude);
  }, [position]);

  return (
    <>
      {error && <div className="error-box">{error}</div>}
      <div className="weather-container">
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </>
  );
};

export default Weather;

import { useEffect, useState } from "react";
import { getCurrentWeather, getForecast } from "../../api/weatherService";
import CurrentWeather from "./Current/CurrentWeather";
import Forecast from "./Forecast/Forecast";
import ClipLoader from "react-spinners/ClipLoader";
import "./weather.css";

const overide = {
  display: "block",
  margin: "30px auto",
};

const Weather = ({ search}) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearchChange = () => {
    const [lat, lon] = search.value.split(" ");
    getWeatherForecast(lat, lon);
  };

  const getWeatherForecast = (lat, lon) => {
    Promise.all([getCurrentWeather({ lat, lon }), getForecast({ lat, lon })])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({city:search?search.label:null,...weatherResponse});
        setForecast(forcastResponse);
        setLoading(false);
      })
      .catch(() => {
        setCurrentWeather(null);
        setForecast(null);
        setError("❌ Weather Service not available!")
      });
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
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

  useEffect(() => {
    setError(null);
    setLoading(true);
    if (search) onSearchChange();
    else getCurrentLocation();
  }, [search]);

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

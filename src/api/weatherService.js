import { WEATHER_API_KEY, WEATHER_API_URL } from "../constants/api/weather";

export const getCurrentWeather = ({ lat, lon }) =>
  fetch(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
export const getForecast = ({ lat, lon }) =>
  fetch(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );

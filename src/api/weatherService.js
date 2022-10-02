import { WEATHER_API_KEY, WEATHER_API_URL } from "../constants/api/weather";
import axios from "axios";

/**
 * @description wrapper method for fetching the current weather of input location
 * @param {string} lat -latitude
 * @param {string} lon -longitude
 * @return {Promise} promise
 */
export const getCurrentWeather = ({ lat, lon }) =>
  axios.get(
    `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );
  
/**
 * @description wrapper method for fetching the forecast of input location
 * @param {string} lat -latitude
 * @param {string} lon -longitude
 * @return {Promise} promise
 */
export const getForecast = ({ lat, lon }) =>
  axios.get(
    `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  );

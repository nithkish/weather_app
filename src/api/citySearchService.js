import axios from "axios";
import { config, GET_CITIES_URL } from "../constants/api/cities";

/**
 * @description wrapper method for fetching the cities on getting the search term
 * @param {string} params
 * @return {Promise} promise
 */
export const getCities = (input) =>
  axios.get(`${GET_CITIES_URL}${input}`,config );

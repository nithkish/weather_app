import { getCitiesOptions, GET_CITIES_URL } from "../constants/api/cities";

export const getCities = (params) =>
  fetch(
    `${GET_CITIES_URL}/cities?minPopulation=1000&namePrefix=${params}`,
    getCitiesOptions
  );

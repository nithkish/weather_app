import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCities } from "../../api/citySearchService";
import { debounce } from "lodash";

const Search = ({ search,setSearch }) => {

  const debouncedHandleChange = debounce((searchData) => {
    setSearch(searchData);
  },1000)

  const loadOptions = (inputValue) => {
    return getCities(inputValue)
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city)=>{
            return {
              value: `${city.latitude} ${city.longitude}`,
              label:`${city.name},${city.countryCode}`
            }
          })
        }
      }
      )
      .catch((err)=>console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={debouncedHandleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;

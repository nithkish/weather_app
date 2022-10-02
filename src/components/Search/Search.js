import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCities } from "../../api/citySearchService";

/**
 * Functional react wrapper component for Search functionality
 * @description implements the AsyncPaginate component of the react-select-async-paginate package.
 * @param {string} search - to pass the seached value to the Parent
 * @param {function} setSearch - setter to set the search value
 * @return {*} JSX
 */

const Search = ({ search, setSearch }) => {
  const [error, setError] = useState(null);
  
  const onChange = (searchData) => {
    setSearch(searchData);
    console.log(searchData);
  };

  /**
 * @function 
 * @description to pass the loadOptions of the AsyncPaginate
 * @param {string} inputValue - to pass the seached value to the API
 * @return {object} options object
 */
  const loadOptions = (inputValue) => {
    return (
      inputValue &&
      getCities(inputValue)
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          setError(null);
          return {
            options: res.data.map((city) => {
              console.log(city);
              return {
                value: `${city.latitude} ${city.longitude}`,
                label: `${city.name},${city.countryCode}`,
              };
            }),
          };
        })
        .catch(() => {
          setError("❌ Search Service Unavailable.Try again!");
        })
    );
  };

  return (
    <>
      {error && <div className="error-box">{error}</div>}
      <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={onChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;

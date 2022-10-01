import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { getCities } from "../../api/citySearchService";

const Search = ({ search, setSearch }) => {
  const [error, setError] = useState(null);
  
  const onChange = (searchData) => {
    setSearch(searchData);
  };

  const loadOptions = (inputValue) => {
    return (
      inputValue &&
      getCities(inputValue)
        .then((res) => res.json())
        .then((res) => {
          setError(null);
          return {
            options: res.data.map((city) => {
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
        onClick={()=>setSearch(null)}
      />
    </>
  );
};

export default Search;

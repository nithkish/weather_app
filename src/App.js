import React, { useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";
import Weather from "./components/Weather/Weather";

function App() {
  const [search, setSearch] = useState(null);

  return (
    <div className="container">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <Search search={search} setSearch={setSearch} />
      <Weather search={search} setSearch={setSearch} />
    </div>
  );
}

export default App;

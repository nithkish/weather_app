import Accordian from "../../Accordian/Accordian";
import "./forecast.css"

const Item = {
  dt: 1664625600,
  main: {
    temp: 27.96,
    feels_like: 30.08,
    temp_min: 25.91,
    temp_max: 27.96,
    pressure: 1007,
    sea_level: 1007,
    grnd_level: 947,
    humidity: 66,
    temp_kf: 2.05,
  },
  weather: [
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
  ],
  clouds: {
    all: 27,
  },
  wind: {
    speed: 3.62,
    deg: 281,
    gust: 4.8,
  },
  visibility: 10000,
  pop: 0.93,
  rain: {
    "3h": 3.26,
  },
  sys: {
    pod: "d",
  },
  dt_txt: "2022-10-01 12:00:00",
};

const Forecast = ({ data }) => {
  return (
    <>
    <div className="forecast-container">
      {data.list.slice(0, 7).map((item, index) => (
        <Accordian item={item} index={index} />
      ))}
    </div>
    </>
  );
};

export default Forecast;

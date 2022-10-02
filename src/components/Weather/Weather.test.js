import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import Weather from "./Weather";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../constants/api/weather";

const testSearch = {
  value: "18.519574 73.855287",
  label: "Pune,IN",
};

const testWeather = {
  coord: { lon: 73.9349, lat: 18.5226 },
  weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }],
  base: "stations",
  main: {
    temp: 21.6,
    feels_like: 22.22,
    temp_min: 21.6,
    temp_max: 21.6,
    pressure: 1010,
    humidity: 92,
    sea_level: 1010,
    grnd_level: 948,
  },
  visibility: 10000,
  wind: { speed: 2.75, deg: 279, gust: 4.23 },
  clouds: { all: 0 },
  dt: 1664736940,
  sys: { country: "IN", sunrise: 1664758499, sunset: 1664801498 },
  timezone: 19800,
  id: 7357900,
  name: "Pune",
  cod: 200,
};

const testForecast = {
  list: [
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
    {
      dt: 1664690400,
      main: {
        temp: 27.28,
        feels_like: 28.87,
        temp_min: 27.28,
        temp_max: 27.28,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 949,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 37,
      },
      wind: {
        speed: 2.95,
        deg: 305,
        gust: 2.74,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-10-02 06:00:00",
    },
  ],
};

describe("Weather", () => {
  let mock;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("renders without crashing and shows the labels correct/ly", async () => {
    mock
      .onGet(
        `${WEATHER_API_URL}/weather?lat=18.519574&lon=73.855287&appid=${WEATHER_API_KEY}&units=metric`
      )
      .reply(200, testWeather)
      .onGet(
        `${WEATHER_API_URL}/forecast?lat=18.519574&lon=73.855287&appid=${WEATHER_API_KEY}&units=metric`
      )
      .reply(200, testForecast);
    await act( async () => render((<Weather search={testSearch} />)));
    const label = screen.getByText("Pune,IN");
    await waitFor(() => expect(label).toBeInTheDocument());
  });
});

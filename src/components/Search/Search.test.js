import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import Search from "./Search";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { GET_CITIES_URL } from "../../constants/api/cities";


const testCities = {
  data: [
    {
      id: 55198,
      wikiDataId: "Q1538",
      type: "CITY",
      city: "Pune",
      name: "Pune",
      country: "India",
      countryCode: "IN",
      region: "Maharashtra",
      regionCode: "MH",
      latitude: 18.519574,
      longitude: 73.855287,
      population: 5945000,
    },
    {
      id: 3475824,
      wikiDataId: "Q1797336",
      type: "ADM2",
      city: "Pune district",
      name: "Pune district",
      country: "India",
      countryCode: "IN",
      region: "Maharashtra",
      regionCode: "MH",
      latitude: 18.53,
      longitude: 73.84,
      population: 9429408,
    },
    {
      id: 147864,
      wikiDataId: "Q1854679",
      type: "ADM2",
      city: "Pune division",
      name: "Pune division",
      country: "India",
      countryCode: "IN",
      region: "Maharashtra",
      regionCode: "MH",
      latitude: 18.53,
      longitude: 73.84,
      population: 9429408,
    },
  ],
};

describe("Search", () => {
  let mock;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });
  it("renders without crashing and shows the labels correctly", () => {
    render(<Search search={null} setSearch={jest.fn()} />);
    const label = screen.getByText("Search for City");
    expect(label).toBeInTheDocument();
  });
  it("search suggestions working as expected", async () => {
    mock.onGet(`${GET_CITIES_URL}pun`).reply(200, testCities);
    await act(async () =>
      render(<Search search={null} setSearch={jest.fn()} />)
    );
    const label = screen.getByText("Search for City");
    userEvent.type(label, "pun");
    await waitFor(() =>
      expect(screen.queryByText("Pune,IN")).not.toBeInTheDocument()
    );
  });
});

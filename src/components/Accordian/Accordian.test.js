import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordian from "./Accordian";
import { accordianTestData } from "../../constants/util/testdata";

describe("Accordian", () => {
  it("renders without crashing and shows the labels correctly", () => {
    render(<Accordian item={accordianTestData} />);
    const label = screen.getByText("scattered clouds");
    expect(label).toBeInTheDocument();
  });
  it("forecast details displayed on clicking of the top panel", () => {
    render(<Accordian item={accordianTestData} />);
    expect(screen.queryByText("Pressure:")).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId("head"));
    expect(screen.queryByText("Pressure:")).toBeInTheDocument();
  });
});

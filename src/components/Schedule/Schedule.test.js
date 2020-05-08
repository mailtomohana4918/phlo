import { render } from "@testing-library/react";
import React from "react";
import Schedule from "./Schedule";

describe("Schedule Component", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<Schedule />);
    expect(asFragment()).toMatchSnapshot();
  });
});

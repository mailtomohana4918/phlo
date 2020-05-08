import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header Component", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});

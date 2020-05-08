import { render } from "@testing-library/react";
import React from "react";
import Success from "./Success";

describe("Success Component", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<Success />);
    expect(asFragment()).toMatchSnapshot();
  });
});

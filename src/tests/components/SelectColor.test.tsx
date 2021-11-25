import React from "react";
import { render, screen } from "../test-utils";
import { SelectColor } from "../../components/SelectColor";
import { LabelText } from "../../resources/LabelText";
import { TestID } from "../../resources/TestID";
import { colorOptions } from "../../data/spaceShipComponents";
const numOptions = colorOptions.length;

describe("SelectColor", () => {
  it("should render correct title", () => {
    render(<SelectColor />);
    const text = screen.getByText(LabelText.SELECT_COLOR);
    expect(text).toBeTruthy();
  });

  it(`should render ${numOptions} options`, () => {
    render(<SelectColor />);
    const options = screen.getAllByTestId(TestID.COLOR_OPTION);
    expect(options.length).toBe(numOptions);
  });
});

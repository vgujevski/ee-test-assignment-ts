import React from "react";
import { render, screen } from "../test-utils";
import { SelectPower } from "../../components/SelectPower";
import { LabelText } from "../../resources/LabelText";
import { TestID } from "../../resources/TestID";
import { powerOptions } from "../../data/spaceShipComponents";
const numOptions = powerOptions.length;

describe("SelectPower", () => {
  it("should render correct title", () => {
    render(<SelectPower />);
    const text = screen.getByText(LabelText.SELECT_POWER);
    expect(text).toBeTruthy();
  });

  it(`should render ${numOptions} options`, () => {
    render(<SelectPower />);
    const options = screen.getAllByTestId(TestID.POWER_OPTION);
    expect(options.length).toBe(numOptions);
  });
});

import React from "react";
import { render, screen } from "../test-utils";
import { SelectPackage } from "../../components/SelectPackage";
import { LabelText } from "../../resources/LabelText";
import { TestID } from "../../resources/TestID";
import { packageOptions } from "../../data/spaceShipComponents";
const numOptions = packageOptions.length;

describe("SelectPackage", () => {
  it("should render correct title", () => {
    render(<SelectPackage />);
    const text = screen.getByText(LabelText.SELECT_OPTION_PACKAGE);
    expect(text).toBeTruthy();
  });

  it(`it should render ${numOptions} options`, () => {
    render(<SelectPackage />);
    const options = screen.getAllByTestId(TestID.PACKAGE_OPTION);
    expect(options.length).toBe(numOptions);
  });
});

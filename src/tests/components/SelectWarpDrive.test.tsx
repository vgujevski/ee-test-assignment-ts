import React from "react";
import { render, screen } from "../test-utils";
import { SelectWarpDrive } from "../../components/SelectWarpDrive";
import { LabelText } from "../../resources/LabelText";
import { TestID } from "../../resources/TestID";
import { warpDriveOptions } from "../../data/spaceShipComponents";
const numOptions = warpDriveOptions.length;

describe("SelectWarpDrive", () => {
  it("should render correct title", () => {
    render(<SelectWarpDrive />);
    const text = screen.getByText(LabelText.WARP_DRIVE);
    expect(text).toBeTruthy();
  });

  it(`should render ${numOptions} options`, () => {
    render(<SelectWarpDrive />);
    const options = screen.getAllByTestId(TestID.WARP_DRIVE_OPTION);
    expect(options.length).toBe(numOptions);
  });
});

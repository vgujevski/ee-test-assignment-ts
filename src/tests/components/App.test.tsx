import React from "react";
import { render, fireEvent, screen, within } from "../test-utils";
import { TestID } from "../../resources/TestID";
import { LabelText } from "../../resources/LabelText";

import App from "../../App";
import { getNumericValue } from "../helpers/test-helper";

describe("App", () => {
  it("should display correct title", () => {
    render(<App />);
    const text = screen.getByTestId(TestID.APP_TITLE);
    expect(text).toHaveTextContent(LabelText.SPACESHIP_CONFIGURATOR);
  });

  it("should render SelectColor component", () => {
    render(<App />);
    expect(screen.getByTestId(TestID.SELECT_COLOR)).toBeTruthy();
  });

  it("should render SelectPackage component", () => {
    render(<App />);
    expect(screen.getByTestId(TestID.SELECT_PACKAGE)).toBeTruthy();
  });

  it("should render PriceCalculator component", () => {
    render(<App />);
    expect(screen.getByTestId(TestID.SELECT_PACKAGE)).toBeTruthy();
  });

  it("should render SelectPower component", () => {
    render(<App />);
    expect(screen.getByTestId(TestID.SELECT_POWER)).toBeTruthy();
  });

  it("should render SelectWarpDrive component", () => {
    render(<App />);
    expect(screen.getByTestId(TestID.SELECT_WARP_DRIVE)).toBeTruthy();
  });

  it("should update Price calculator with correct value when COLOR option is selected", () => {
    render(<App />);
    const options = screen.getAllByTestId(TestID.COLOR_OPTION);
    fireEvent.click(options[1]);
    const optionValue = within(options[1]).getByTestId(
      TestID.COLOR_OPTION_PRICE
    );
    const totalValue = screen.getByTestId(TestID.TOTAL_COLOR).textContent;
    expect(optionValue).toHaveTextContent(totalValue);
  });

  it("should update Price calculator with correct value when PACKAGE option is selected", () => {
    render(<App />);
    const options = screen.getAllByTestId(TestID.PACKAGE_OPTION);
    fireEvent.click(options[1]);
    const optionValue = within(options[1]).getByTestId(
      TestID.PACKAGE_OPTION_PRICE
    );
    const totalValue = screen.getByTestId(
      TestID.TOTAL_OPTION_PACKAGE
    ).textContent;
    expect(optionValue).toHaveTextContent(totalValue);
  });

  it("should update Price calculator with correct value when POWER option is selected", () => {
    render(<App />);
    const options = screen.getAllByTestId(TestID.POWER_OPTION);
    fireEvent.click(options[1]);
    const optionValue = within(options[1]).getByTestId(
      TestID.POWER_OPTION_PRICE
    );
    const totalValue = screen.getByTestId(TestID.TOTAL_POWER).textContent;
    expect(optionValue).toHaveTextContent(totalValue);
  });

  it("should update Price calculator with correct value when WARP DRIVE option is selected", () => {
    render(<App />);
    const options = screen.getAllByTestId(TestID.WARP_DRIVE_OPTION);
    fireEvent.click(options[1]);
    const optionValue = within(options[1]).getByTestId(
      TestID.WARP_DRIVE_OPTION_PRICE
    );
    const totalValue = screen.getByTestId(TestID.TOTAL_WARP_DRIVE).textContent;
    expect(optionValue).toHaveTextContent(totalValue);
  });

  it("should correctly calculate total price", () => {
    render(<App />);
    const base = getNumericValue(
      screen.getByTestId(TestID.TOTAL_BASE).textContent
    );
    const colorPrice = getNumericValue(
      screen.getByTestId(TestID.TOTAL_COLOR).textContent
    );
    const optionPackagePrice = getNumericValue(
      screen.getByTestId(TestID.TOTAL_OPTION_PACKAGE).textContent
    );
    const powerPrice = getNumericValue(
      screen.getByTestId(TestID.TOTAL_POWER).textContent
    );
    const warpDrivePrice = getNumericValue(
      screen.getByTestId(TestID.TOTAL_WARP_DRIVE).textContent
    );
    const totalPrice = getNumericValue(
      screen.getByTestId(TestID.TOTAL_PRICE).textContent
    );
    expect(
      base + colorPrice + optionPackagePrice + powerPrice + warpDrivePrice
    ).toBe(totalPrice);
  });
});

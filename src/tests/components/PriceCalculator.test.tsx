import React from "react";
import { render, screen } from "../test-utils";
import { PriceCalculator } from "../../components/PriceCalculator";
import { LabelText } from "../../resources/LabelText";

describe("PriceCalculator", () => {
  it("should correctly render elements", () => {
    render(<PriceCalculator />);
    expect(screen.getByText(LabelText.BASE_PRICE)).toBeTruthy();
    expect(screen.getByText(LabelText.COLOR)).toBeTruthy();
    expect(screen.getByText(LabelText.POWER)).toBeTruthy();
    expect(screen.getByText(LabelText.WARP_DRIVE)).toBeTruthy();
    expect(screen.getByText(LabelText.OPTION_PACKAGE)).toBeTruthy();
    expect(screen.getByText(LabelText.TOTAL)).toBeTruthy();
  });
});

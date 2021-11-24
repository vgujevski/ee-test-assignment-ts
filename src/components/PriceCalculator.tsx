import React from "react";
import { useAppSelector } from "../app/hooks";

import {
  selectColorOption,
  selectPowerOption,
  selectWarpDriveOption,
  selectOptionPackage,
  selectTotalPrice,
} from "./componentsSlice";
import { BASE_PRICE } from "../data/spaceshipComponents";

export const PriceCalculator = () => {
  const color = useAppSelector(selectColorOption);
  const power = useAppSelector(selectPowerOption);
  const warpDrive = useAppSelector(selectWarpDriveOption);
  const optionPackage = useAppSelector(selectOptionPackage);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <div data-testid="total-calc" className="price-calc-container">
      <div className="details-container">
        <div className="item">
          <div className="label">Base price:</div>
          <div data-testid="total-base" className="amount">
            {BASE_PRICE}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">Color:</div>
          <div data-testid="total-color" className="amount">
            +{color.price}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">Power:</div>
          <div data-testid="total-power" className="amount">
            +{power.price}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">Warp Drive:</div>
          <div data-testid="total-warp-drive" className="amount">
            +{warpDrive.price}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">Option Package:</div>
          <div data-testid="total-option-package" className="amount">
            +{optionPackage.price}&euro;
          </div>
        </div>
      </div>
      <div className="total-container">
        <div className="total">
          <div className="label">Total:</div>
          <div data-testid="total-price" className="amount cost">
            {totalPrice}&euro;
          </div>
        </div>
      </div>
    </div>
  );
};

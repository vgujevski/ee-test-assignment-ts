import React from "react";
import { useAppSelector } from "../app/hooks";

import {
  selectColorOption,
  selectPowerOption,
  selectWarpDriveOption,
  selectOptionPackage,
  selectTotalPrice,
} from "./componentsSlice";
import { LabelText } from "../resources/LabelText";
import { TestID } from "../resources/TestID";
import { BASE_PRICE } from "../data/spaceshipComponents";

export const PriceCalculator = () => {
  const color = useAppSelector(selectColorOption);
  const power = useAppSelector(selectPowerOption);
  const warpDrive = useAppSelector(selectWarpDriveOption);
  const optionPackage = useAppSelector(selectOptionPackage);
  const totalPrice = useAppSelector(selectTotalPrice);

  return (
    <div data-testid={TestID.TOTAL_CALC} className="price-calc-container">
      <div className="details-container">
        <div className="item">
          <div className="label">{LabelText.BASE_PRICE}</div>
          <div data-testid={TestID.TOTAL_BASE} className="amount">
            {BASE_PRICE}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">{LabelText.COLOR}</div>
          <div data-testid={TestID.TOTAL_COLOR} className="amount">
            +{color.price}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">{LabelText.POWER}</div>
          <div data-testid={TestID.TOTAL_POWER} className="amount">
            +{power.price}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">{LabelText.WARP_DRIVE}</div>
          <div data-testid={TestID.TOTAL_WARP_DRIVE} className="amount">
            +{warpDrive.price}&euro;
          </div>
        </div>

        <div className="item">
          <div className="label">{LabelText.OPTION_PACKAGE}</div>
          <div data-testid={TestID.TOTAL_OPTION_PACKAGE} className="amount">
            +{optionPackage.price}&euro;
          </div>
        </div>
      </div>
      <div className="total-container">
        <div className="total">
          <div className="label">{LabelText.TOTAL}</div>
          <div data-testid={TestID.TOTAL_PRICE} className="amount cost">
            {totalPrice}&euro;
          </div>
        </div>
      </div>
    </div>
  );
};

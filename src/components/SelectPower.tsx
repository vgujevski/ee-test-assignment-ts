import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { powerOptions } from "../data/spaceshipComponents";
import { setPowerOption, selectPowerOption } from "./componentsSlice";
import { PowerOption } from "../types";
import { LabelText } from "../resources/LabelText";
import { TestID } from "../resources/TestID";

export const SelectPower = () => {
  const disptach = useAppDispatch();
  const { id } = useAppSelector(selectPowerOption);

  const onSelectPowerClicked = (selectedOption: PowerOption) => {
    disptach(setPowerOption(selectedOption));
  };

  return (
    <div
      data-testid="select-power"
      className="part-selector-container m-top-xl"
    >
      <h2>{LabelText.SELECT_POWER}</h2>
      <div className="part-list">
        {powerOptions.map((item) => (
          <div
            data-testid={TestID.POWER_OPTION}
            key={item.id}
            onClick={() => onSelectPowerClicked(item)}
            className={
              id === item.id ? "part-list-item selected" : "part-list-item"
            }
          >
            <div className="name m-top-m m-bottom-m">{item.name}</div>
            <div
              data-testid={TestID.POWER_OPTION_PRICE}
              className="price m-bottom-s"
            >
              +{item.price}&euro;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

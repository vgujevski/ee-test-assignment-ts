import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { powerOptions } from "../data/spaceshipComponents";
import { setPowerOption, selectPowerOption } from "./componentsSlice";
import { PowerOption } from "../types";

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
      <h2>Select Power:</h2>
      <div className="part-list">
        {powerOptions.map((item) => (
          <div
            data-testid="power-option"
            key={item.id}
            onClick={() => onSelectPowerClicked(item)}
            className={
              id === item.id ? "part-list-item selected" : "part-list-item"
            }
          >
            <div className="name m-top-m m-bottom-m">{item.name}</div>
            <div data-testid="power-option-price" className="price m-bottom-s">
              +{item.price}&euro;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

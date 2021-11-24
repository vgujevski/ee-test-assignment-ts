import React from "react";
import { colorOptions } from "../data/spaceshipComponents";
import { selectColorOption, setColorOption } from "./componentsSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { ColorOption } from "../types";

export const SelectColor = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectColorOption);

  const onSelectColorClicked = (selectedOption: ColorOption) => {
    dispatch(setColorOption(selectedOption));
  };

  return (
    <div data-testid="select-color" className="part-selector-container">
      <h2>Select Color:</h2>
      <div className="part-list">
        {colorOptions.map((item) => (
          <div
            data-testid="color-option"
            key={item.id}
            onClick={() => onSelectColorClicked(item)}
            className={
              id === item.id ? "part-list-item selected" : "part-list-item"
            }
          >
            <div
              className="color m-top-m"
              style={{ backgroundColor: item.color }}
            ></div>
            <div data-testid="color-option-price" className="price m-top-xs">
              +{item.price}&euro;
            </div>
            <div className="name m-top-m m-bottom-l">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { colorOptions } from "../data/spaceshipComponents";
import { selectColorOption, setColorOption } from "./componentsSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { LabelText } from "../resources/LabelText";
import { TestID } from "../resources/TestID";
import { ColorOption } from "../types";

export const SelectColor = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectColorOption);

  const onSelectColorClicked = (selectedOption: ColorOption) => {
    dispatch(setColorOption(selectedOption));
  };

  return (
    <div data-testid={TestID.SELECT_COLOR} className="part-selector-container">
      <h2>{LabelText.SELECT_COLOR}</h2>
      <div className="part-list">
        {colorOptions.map((item) => (
          <div
            data-testid={TestID.COLOR_OPTION}
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
            <div
              data-testid={TestID.COLOR_OPTION_PRICE}
              className="price m-top-xs"
            >
              +{item.price}&euro;
            </div>
            <div className="name m-top-m m-bottom-l">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

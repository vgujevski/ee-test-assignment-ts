import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { warpDriveOptions } from "../data/spaceshipComponents";
import { setWarpDriveOption, selectWarpDriveOption } from "./componentsSlice";
import { WarpDriveOption } from "../types";
import { LabelText } from "../resources/LabelText";
import { TestID } from "../resources/TestID";

export const SelectWarpDrive = () => {
  const dispatch = useAppDispatch();
  const { id } = useAppSelector(selectWarpDriveOption);

  const onSelectWarpDriveClicked = (selectedOption: WarpDriveOption) => {
    dispatch(setWarpDriveOption(selectedOption));
  };

  return (
    <div
      data-testid="select-warp-drive"
      className="part-selector-container m-top-xl"
    >
      <h2>{LabelText.WARP_DRIVE}</h2>
      <div className="part-list">
        {warpDriveOptions.map((item) => (
          <div
            data-testid={TestID.WARP_DRIVE_OPTION}
            key={item.id}
            onClick={() => onSelectWarpDriveClicked(item)}
            className={
              id === item.id ? "part-list-item selected" : "part-list-item"
            }
          >
            <div className="name m-top-m m-bottom-m">{item.name}</div>
            <div
              data-testid={TestID.WARP_DRIVE_OPTION_PRICE}
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

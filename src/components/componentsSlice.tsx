import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {
  ColorOption,
  PowerOption,
  WarpDriveOption,
  PackageOption,
  ComponentsState,
} from "../types";
import {
  colorOptions,
  warpDriveOptions,
  powerOptions,
  packageOptions,
  BASE_PRICE,
} from "../data/spaceshipComponents";

import type { RootState } from "../app/store";

const initialState: ComponentsState = {
  color: colorOptions[0],
  warpDrive: warpDriveOptions[0],
  power: powerOptions[0],
  optionPackage: packageOptions[0],
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    setColorOption(state, action: PayloadAction<ColorOption>) {
      state.color = action.payload;
    },
    setWarpDriveOption(state, action: PayloadAction<WarpDriveOption>) {
      state.warpDrive = action.payload;
    },
    setPowerOption(state, action: PayloadAction<PowerOption>) {
      state.power = action.payload;
    },
    setOptionPackage(state, action: PayloadAction<PackageOption>) {
      state.optionPackage = action.payload;
    },
  },
});
export const {
  setColorOption,
  setWarpDriveOption,
  setPowerOption,
  setOptionPackage,
} = componentsSlice.actions;
export default componentsSlice.reducer;

export const selectColorOption = (state: RootState) => state.components.color;
export const selectWarpDriveOption = (state: RootState) =>
  state.components.warpDrive;
export const selectPowerOption = (state: RootState) => state.components.power;
export const selectOptionPackage = (state: RootState) =>
  state.components.optionPackage;
export const selectTotalPrice = (state: RootState) => {
  return (
    BASE_PRICE +
    state.components.color.price +
    state.components.warpDrive.price +
    state.components.power.price +
    state.components.optionPackage.price
  );
};

/** Items */
export interface ColorOption {
  id: number;
  color: string;
  price: number;
  name: string;
}

export interface PowerOption {
  id: number;
  name: string;
  price: number;
}

export interface WarpDriveOption {
  id: number;
  name: string;
  price: number;
}

export interface PackageOption {
  id: number;
  name: string;
  price: number;
  features: Array<string>;
}

/** State */
export interface ComponentsState {
  color: ColorOption;
  warpDrive: WarpDriveOption;
  power: PowerOption;
  optionPackage: PackageOption;
}

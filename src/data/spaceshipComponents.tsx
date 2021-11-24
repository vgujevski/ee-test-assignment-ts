import type {
  ColorOption,
  PowerOption,
  WarpDriveOption,
  PackageOption,
} from "../types";
export const BASE_PRICE: number = 1000;

export const colorOptions: Array<ColorOption> = [
  {
    id: 1,
    color: "#FFFFFF",
    price: 0,
    name: "Snow",
  },
  {
    id: 2,
    color: "#FF7A00",
    price: 100,
    name: "Volcano",
  },
  {
    id: 3,
    color: "#6BE4FF",
    price: 100,
    name: "sky",
  },
];

export const powerOptions: Array<PowerOption> = [
  {
    id: 4,
    name: "100 MW",
    price: 0,
  },
  {
    id: 5,
    name: "150 MW",
    price: 200,
  },
  {
    id: 6,
    name: "200 MW",
    price: 500,
  },
];

export const warpDriveOptions: Array<WarpDriveOption> = [
  {
    id: 7,
    name: "NO",
    price: 0,
  },
  {
    id: 8,
    name: "YES",
    price: 1000,
  },
];

export const packageOptions: Array<PackageOption> = [
  {
    id: 9,
    name: "Basic",
    price: 0,
    features: ["Air conditioning", "Cloth seats", "Fm radio"],
  },
  {
    id: 10,
    name: "Sport",
    price: 100,
    features: [
      "Air conditioning",
      "Cloth seats",
      "Fm radio",
      "Personal tech support",
    ],
  },
  {
    id: 11,
    name: "Lux",
    price: 500,
    features: [
      "Air conditioning",
      "Luxury seats",
      "Fm radio",
      "Chrome wheels",
      "Windows tint",
      "Subwoofer",
    ],
  },
];

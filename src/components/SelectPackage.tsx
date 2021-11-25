import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { packageOptions } from "../data/spaceshipComponents";
import { setOptionPackage, selectOptionPackage } from "./componentsSlice";
import { PackageOption } from "../types";
import { LabelText } from "../resources/LabelText";
import { TestID } from "../resources/TestID";

export const SelectPackage = () => {
  const disptach = useAppDispatch();
  const { id } = useAppSelector(selectOptionPackage);

  const onSelectPackageClicked = (selectedOption: PackageOption) => {
    disptach(setOptionPackage(selectedOption));
  };
  return (
    <div
      data-testid="select-package"
      className="part-selector-container m-top-xl"
    >
      <h2>{LabelText.SELECT_OPTION_PACKAGE}</h2>
      <div className="part-list">
        {packageOptions.map((item) => (
          <div
            data-testid={TestID.PACKAGE_OPTION}
            key={item.id}
            onClick={() => onSelectPackageClicked(item)}
            className={
              id === item.id ? "part-list-item selected" : "part-list-item"
            }
          >
            <div className="name m-top-m">{item.name}</div>
            <div
              data-testid={TestID.PACKAGE_OPTION_PRICE}
              className="price m-bottom-s m-top-s"
            >
              +{item.price}&euro;
            </div>
            <div className="details-container">
              {item.features.map((feature) => (
                <div key={feature} className="feature-container">
                  <div className="arrow-up"></div>
                  <div className="feature m-bottom-xs">{feature}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

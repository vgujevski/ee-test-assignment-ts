import React, { FC, ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import componentsReducer from "../components/componentsSlice";

function render(
  ui: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { components: componentsReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import componentsReducer from "../components/componentsSlice";

export const store = configureStore({
  reducer: {
    components: componentsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

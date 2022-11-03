import { configureStore } from "@reduxjs/toolkit";
import tileReducer from "../features/tileSlice";
import { getLocalStorage } from "../helpers/localStorage/localStorage";

export const store = configureStore({
  reducer: tileReducer,
  preloadedState: getLocalStorage(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

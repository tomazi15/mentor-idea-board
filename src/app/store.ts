import { configureStore } from "@reduxjs/toolkit";
import tileReducer from "../features/tileSlice";

export const store = configureStore({
  reducer: {
    ideaBoard: tileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

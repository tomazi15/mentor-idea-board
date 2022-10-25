import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../helpers/state/stateSliceHelpers";

export const ideaTileSlice = createSlice({
  name: "ideaTile",
  initialState,
  reducers: {
    addNewIdea: (state, action) => {},
    updateIdea: (state, action) => {},
    deleteIdea: (state, action) => {},
    clearStore: (state, action) => {},
  },
});

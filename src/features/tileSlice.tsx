import { createSlice, current } from "@reduxjs/toolkit";
import { initialState } from "../helpers/state/initialSate";

export const tileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {
    addNewTile: (state, { payload }): any => {
      return {
        tiles: [...state.tiles, payload],
      };
    },

    deleteTile: (state, { payload }): any => {
      return {
        tiles: [...state.tiles.filter((tile) => tile["id"] !== payload)],
      };
    },
    updateTile: (state, { payload }): any => {
      return {
        tiles: [
          ...state.tiles.map((tile) =>
            tile["id"] === payload.id ? { ...payload } : tile
          ),
        ],
      };
    },
  },
});

export const { addNewTile, deleteTile, updateTile } = tileSlice.actions;
export default tileSlice.reducer;

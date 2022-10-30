import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../helpers/state/initialSate";
import { NewTile, DeleteTile } from "../types/types";

export const tileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {
    addNewTile: (state, { payload }: PayloadAction<NewTile>) => {
      return {
        tiles: [...state.tiles, payload],
      };
    },

    deleteTile: (state, { payload }: PayloadAction<DeleteTile>) => {
      return {
        tiles: [...state.tiles.filter((tile) => tile.id !== payload)],
      };
    },
    updateTile: (state, { payload }: PayloadAction<NewTile>) => {
      console.log("UPDATE", payload);
      return {
        tiles: [
          ...state.tiles.map((tile) =>
            tile.id === payload.id ? payload : tile
          ),
        ],
      };
    },
  },
});

export const { addNewTile, deleteTile, updateTile } = tileSlice.actions;
export default tileSlice.reducer;

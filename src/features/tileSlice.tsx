import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../helpers/state/initialSate";
import {
  AddNewTileAction,
  DeleteTileAction,
  SortTileAction,
  UpdateTileAction,
} from "../types/types";
import { setLocalStorage } from "../helpers/localStorage/localStorage";

export const tileSlice = createSlice({
  name: "tile",
  initialState,
  reducers: {
    addNewTile: (state, { payload }: PayloadAction<AddNewTileAction>) => {
      return {
        tiles: [...state.tiles, payload],
      };
    },

    deleteTile: (state, { payload }: PayloadAction<DeleteTileAction>) => {
      return {
        tiles: [...state.tiles.filter((tile) => tile.id !== payload)],
      };
    },
    updateTile: (state, { payload }: PayloadAction<UpdateTileAction>) => {
      return {
        tiles: [
          ...state.tiles.map((tile) =>
            tile.id === payload.id ? payload : tile
          ),
        ],
      };
    },
    sortTile: (state, { payload }: PayloadAction<SortTileAction>) => {
      payload
        ? state.tiles.sort((firstItem, secondItem) => {
            return firstItem.createdAt.localeCompare(secondItem.createdAt);
          })
        : state.tiles.sort((firstItem, secondItem) => {
            return firstItem.title.localeCompare(secondItem.title);
          });
    },
    rehydrateBoard: (state) => setLocalStorage(state),
  },
});

export const { addNewTile, deleteTile, updateTile, sortTile, rehydrateBoard } =
  tileSlice.actions;
export default tileSlice.reducer;

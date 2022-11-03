export type InitialState = {
  tiles: NewTile[];
};

export type NewTile = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
};

// action payload types
export type AddNewTileAction = NewTile;
export type DeleteTileAction = string;
export type UpdateTileAction = NewTile;
export type SortTileAction = boolean;

// use state types
export type UpdateTileState = Pick<NewTile, "title" | "description">;
export type ToggleUseState = {
  update: boolean;
  updateTileId: string;
};

// other types
export type FormValues = Pick<NewTile, "title" | "description">;

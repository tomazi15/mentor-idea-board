export type InitialState = {
  tiles: [];
};

export type DeleteTile = string;

export type FormValues = {
  title: string;
  description: string;
};

export type NewTile = {
  id?: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
};

export type ToggleUseState = {
  update: boolean;
  updateTileId: string;
};

export type UpdateTileUseState = {
  title: string;
  description: string;
};

export type ShowFormUseState = boolean;

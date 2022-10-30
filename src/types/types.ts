export type InitialState = {
  tiles: NewTile[];
};

export type DeleteTile = string;

export type FormValues = {
  title: string;
  description: string;
};

export type UpdateTileUseState = {
  title: string;
  description: string;
};

export type NewTile = FormValues & {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
};

// export type TitleDescription = Pick<NewTile, 'title' | 'description'>;
// export type TitleDescriptionTwo = Omit<NewTile, 'id' | 'createdAt'>;

export type ToggleUseState = {
  update: boolean;
  updateTileId: string;
};

export type ShowFormUseState = boolean;

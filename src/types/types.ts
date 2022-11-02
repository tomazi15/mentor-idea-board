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

export type DeleteTile = string;

export type FormValues = {
  title: string;
  description: string;
};

// export type TitleDescription = Pick<NewTile, 'title' | 'description'>;
// export type TitleDescriptionTwo = Omit<NewTile, 'id' | 'createdAt'>;

export type ToggleUseState = {
  update: boolean;
  updateTileId: string;
};

export type ShowFormUseState = boolean;

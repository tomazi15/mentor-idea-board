export type FormValues = {
  title: string;
  description: string;
};

export type State = {
  tiles: [];
};

export type NewTile = {
  id?: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
};

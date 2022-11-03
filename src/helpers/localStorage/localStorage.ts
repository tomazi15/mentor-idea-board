import { InitialState } from "../../types/types";

const KEY = "__BOARD__";

export const setLocalStorage = (state: InitialState) =>
  localStorage.setItem(KEY, JSON.stringify(state));

export const getLocalStorage = () => {
  const serializedState = localStorage.getItem(KEY);
  if (!serializedState) return undefined;
  return JSON.parse(serializedState);
};

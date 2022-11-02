import React, { FC, useEffect } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import { Tile } from "./components/Tile/Tile";
import { TileForm } from "./components/TileForm/TileForm";
import { TileSort } from "./components/TileSort/TileSort";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { InitialState } from "./types/types";
import { rehydrateBoard } from "./features/tileSlice";

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { tiles }: InitialState = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(rehydrateBoard());
  });

  return (
    <div className="App">
      <Container>
        <h1 className="App--heading">Ideas Board</h1>
        <TileForm />
        <TileSort tiles={tiles} />
        <Tile tiles={tiles} />
      </Container>
    </div>
  );
};

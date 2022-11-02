import React, { FC } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";
import { Tile } from "./components/Tile/Tile";
import { TileForm } from "./components/TileForm/TileForm";
import { TileSort } from "./components/TileSort/TileSort";
import { useAppSelector } from "./app/hooks";
import { InitialState } from "./types/types";

export const App: FC = (): JSX.Element => {
  const { tiles }: InitialState = useAppSelector((state) => state.ideaBoard);

  return (
    <div className="App">
      <Container>
        <h1 className="App--heading">Ideas Board</h1>
        <TileForm />
        <TileSort tiles={tiles} />
        <Tile />
      </Container>
    </div>
  );
};

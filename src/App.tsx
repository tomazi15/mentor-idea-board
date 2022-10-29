import React, { FC } from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";

import { Tile } from "./components/Tile/Tile";
import { TileForm } from "./components/TileForm/TileForm";

export const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Container>
        <TileForm />
        <Tile />
      </Container>
    </div>
  );
};

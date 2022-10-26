import React from "react";
import "./App.scss";
import Container from "react-bootstrap/Container";

import { Tile } from "./components/Tile/Tile";
import { TileForm } from "./components/TileForm/TileForm";

const App = () => {
  return (
    <div className="App">
      <Container>
        <TileForm />
        <Tile />
      </Container>
    </div>
  );
};

export default App;

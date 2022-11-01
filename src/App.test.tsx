import React from "react";
import { App } from "./App";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";

describe("App Component", () => {
  test("renders TileForm", () => {
    renderWithProviders(<App />);

    const tileFormComponent = screen.getByRole("button", {
      name: /add new idea/i,
    });

    expect(tileFormComponent).toBeInTheDocument();
  });
  test("renders Tile", () => {
    renderWithProviders(<App />);

    const tileComponent = screen.getByRole("alert");
    expect(tileComponent).toBeInTheDocument();
  });
});

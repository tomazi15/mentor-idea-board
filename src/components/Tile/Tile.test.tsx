import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { Tile } from "./Tile";

describe("Tile component", () => {
  test("", () => {
    // I need a predefined/mocked state before testing the tile
    renderWithProviders(<Tile />);
  });
});

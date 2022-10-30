import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import { Tile } from "./Tile";

// import { useAppSelector, useAppDispatch } from "../../app/hooks";

const mockDispatch = jest.fn();

jest.mock("../../app/hooks", () => ({
  useAppDispatch: () => mockDispatch(),
  useAppSelector: () => ({ tiles: [{ title: "hello world" }] }),
}));

describe("Tile component", () => {
  test("", () => {
    // I need a predefined/mocked state before testing the tile
    renderWithProviders(<Tile />);

    /// all clicking through

    // expect(mockDispatch).toHaveBeenCalledWith();
  });
});

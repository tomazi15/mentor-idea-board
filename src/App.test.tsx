import React from "react";
import { App } from "./App";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";

const mockDispatch = jest.fn();

jest.mock("./app/hooks", () => ({
  useAppDispatch: () => mockDispatch(),
  useAppSelector: () => ({
    tiles: [
      {
        title: "foo",
        description: "bar",
        id: "f50a28b4-bfbc-0e1c-54f6-633a8876b94a",
        createdAt: "02/11/2022, 12:20:02",
      },
      {
        title: "baz",
        description: "qux",
        id: "f50a28b4-bfbc-0e1c-54f6-633a8876b94a",
        createdAt: "02/11/2022, 12:20:02",
      },
    ],
  }),
}));

describe("App Component with tile", () => {
  test("renders title", () => {
    renderWithProviders(<App />);

    const boardTitle = screen.queryByRole("heading", {
      name: /ideas board/i,
    });

    expect(boardTitle).toBeInTheDocument();
  });
  test("renders TileForm", () => {
    renderWithProviders(<App />);

    const tileFormComponent = screen.getByRole("button", {
      name: /add new idea/i,
    });

    expect(tileFormComponent).toBeInTheDocument();
  });
  test("renders TileSort", () => {
    renderWithProviders(<App />);

    const tileSort = screen.getByText(/sorted by date/i);
    expect(tileSort).toBeInTheDocument();
  });
  xdescribe("App Component without tile", () => {
    beforeEach(() => jest.clearAllMocks());
    test("renders alert component when there is no tile", () => {
      renderWithProviders(<App />);
      const tileComponent = screen.getByRole("alert");
      expect(tileComponent).toBeInTheDocument();
    });
  });
});

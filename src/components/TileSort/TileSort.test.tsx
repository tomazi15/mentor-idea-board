import { TileSort } from "./TileSort";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";
import { twoTiles, oneTile } from "./TileSort.fixtures";

describe("TileSort", () => {
  test("renders tile sort if at least two tiles have been added", () => {
    renderWithProviders(<TileSort tiles={twoTiles} />);

    const sortSwitch = screen.queryByRole("checkbox");

    expect(sortSwitch).toBeInTheDocument();
  });

  test("tile sort is not rendered if less than two tiles have been added", () => {
    renderWithProviders(<TileSort tiles={oneTile} />);

    const sortSwitch = screen.queryByRole("checkbox");

    expect(sortSwitch).not.toBeInTheDocument();
  });

  test("when switch toggled label should change to Sorted Alphabetically", async () => {
    renderWithProviders(<TileSort tiles={twoTiles} />);

    const sortSwitch = screen.getByRole("checkbox");
    await userEvent.click(sortSwitch);
    const sortSwitchLabel = screen.queryByText(/sorted alphabetically/i);

    expect(sortSwitchLabel).toBeInTheDocument();
  });
});

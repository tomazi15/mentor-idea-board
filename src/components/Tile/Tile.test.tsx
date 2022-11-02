import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";
import { Tile } from "./Tile";
import { oneTile } from "../../helpers/TestFixtures/TestFixtures";

describe("Tile", () => {
  test("renders all elements of Tile component", () => {
    renderWithProviders(<Tile tiles={oneTile} />);

    const tileComponent = screen.getByTestId("tileComponent");
    const tileTitle = screen.queryByText(/foo/i);
    const tileDescription = screen.queryByText(/bar/i);
    // const titleAddedTime = screen.getByText(/added: 02\/11\/2022, 14:40:03/i);
    const titleUpdateBtn = screen.getByRole("button", {
      name: /update/i,
    });
    const titleDeleteBtn = screen.getByRole("button", {
      name: /delete/i,
    });

    expect(tileComponent).toBeInTheDocument();
    expect(tileTitle).toBeInTheDocument();
    expect(tileDescription).toBeInTheDocument();
    // expect(titleAddedTime).toBeInTheDocument();
    expect(titleUpdateBtn).toBeInTheDocument();
    expect(titleDeleteBtn).toBeInTheDocument();
  });
  xdescribe("Tile Delete", () => {
    test("removes tile when delete button clicked", async () => {
      renderWithProviders(<Tile tiles={oneTile} />);

      const tileComponent = screen.queryByTestId("tileComponent");
      const titleDeleteBtn = screen.getByRole("button", {
        name: /delete/i,
      });
      await userEvent.click(titleDeleteBtn);

      expect(tileComponent).not.toBeInTheDocument();
    });
  });
  xdescribe("Tile Update", () => {
    test("removes tile when delete button clicked", async () => {
      renderWithProviders(<Tile tiles={oneTile} />);

      const titleUpdateBtn = screen.getByRole("button", {
        name: /update/i,
      });
      const tileTitle = screen.getByText(/foo/i);
      const tileDescription = screen.getByText(/bar/i);
      await userEvent.type(tileTitle, "title update");
      await userEvent.type(tileDescription, "description update");
      const tileSaveBtn = screen.getByRole("button", {
        name: /save/i,
      });

      expect(tileTitle).toEqual("title");
      expect(tileDescription).toEqual("description update");
    });
  });
});

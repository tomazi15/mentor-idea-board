import { TileForm } from "./TileForm";
import { App } from "../../App";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";

describe("TileForm component", () => {
  test("When Add new idea button clicked input form opens", async () => {
    renderWithProviders(<TileForm />);

    const addNewIdeaButton = screen.getByText("Add New Idea");
    await userEvent.click(addNewIdeaButton);
    const titleInput = screen.getByPlaceholderText(/title\.\.\./i);
    const descriptionInput = screen.getByPlaceholderText(/description\.\.\./i);
    const addButton = screen.getByText("Add");

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("New tile should be added to the board after the user enters title, description and click Add button", async () => {
    renderWithProviders(<App />);

    const addNewIdeaButton = screen.getByText("Add New Idea");
    await userEvent.click(addNewIdeaButton);
    const titleInput = screen.getByPlaceholderText(/title\.\.\./i);
    await userEvent.type(titleInput, "foo");
    const descriptionInput = screen.getByPlaceholderText(/description\.\.\./i);
    await userEvent.type(descriptionInput, "bar");
    const addButton = screen.getByText("Add");
    await userEvent.click(addButton);
    const newTile = screen.getByTestId("tileComponent");

    expect(titleInput).toHaveValue("foo");
    expect(descriptionInput).toHaveValue("bar");
    expect(newTile).toBeInTheDocument();
  });

  describe("TileForm Validations", () => {
    test("throws title must be at least 1 characters", async () => {
      renderWithProviders(<TileForm />);

      const titleError = "title must be at least 1 characters";
      const addNewIdeaButton = screen.getByText("Add New Idea");
      await userEvent.click(addNewIdeaButton);
      const descriptionInput =
        screen.getByPlaceholderText(/description\.\.\./i);
      await userEvent.type(descriptionInput, "foo");
      const addButton = screen.getByText("Add");
      await userEvent.click(addButton);

      await waitFor(async () => {
        expect(await screen.findByText(titleError)).toHaveTextContent(
          titleError
        );
      });
    });
    test("throws description must be at least 1 characters", async () => {
      renderWithProviders(<TileForm />);

      const descriptionError = "description must be at least 1 characters";
      const addNewIdeaButton = screen.getByText("Add New Idea");
      await userEvent.click(addNewIdeaButton);
      const titleInput = screen.getByPlaceholderText(/title\.\.\./i);
      await userEvent.type(titleInput, "foo");
      const addButton = screen.getByText("Add");
      await userEvent.click(addButton);

      await waitFor(async () => {
        expect(await screen.findByText(descriptionError)).toHaveTextContent(
          descriptionError
        );
      });
    });
  });
});

import { TileForm } from "./TileForm";
import { App } from "../../App";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";

describe("TileForm component", () => {
  test("When Add new idea button clicked input form opens", async () => {
    renderWithProviders(<TileForm />);

    const addNewIdeaButton = screen.getByText("Add New Idea");
    await userEvent.click(addNewIdeaButton);
    const titleInput = screen.queryByPlaceholderText("Title...");
    const descriptionInput = screen.queryByPlaceholderText("Description...");
    const addButton = screen.getByText("Add");

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("New tile should be added to the board after the user enters title, description and click Add button", async () => {
    renderWithProviders(<App />);

    const addNewIdeaButton = screen.getByText("Add New Idea");
    await userEvent.click(addNewIdeaButton);
    const titleInput = screen.getByTestId("titleInput");
    await userEvent.type(titleInput, "foo");
    const descriptionInput = screen.getByTestId("descriptionInput");
    await userEvent.type(descriptionInput, "bar");
    const addButton = screen.getByText("Add");
    await userEvent.click(addButton);
    const newTile = screen.getByTestId("tileComponent");

    expect(titleInput).toHaveValue("foo");
    expect(descriptionInput).toHaveValue("bar");
    expect(newTile).toBeInTheDocument();
  });

  // describe("TileForm Validations", () => {
  //   test("throws title must be at least 1 characters", async () => {
  //     renderWithProviders(<TileForm />);

  //     const error = "title must be at least 1 characters";

  //     const addNewIdeaButton = screen.getByText("Add New Idea");
  //     await userEvent.click(addNewIdeaButton);
  //     const descriptionInput = screen.getByTestId("descriptionInput");
  //     await userEvent.type(descriptionInput, "foo");
  //     const addButton = screen.getByText("Add");
  //     await userEvent.click(addButton);
  //     const titleInputError = screen.getByTestId("titleError");

  //     expect(titleInputError).toHaveValue(error);
  //   });
  //   test("throws description must be at least 1 characters", async () => {
  //     renderWithProviders(<TileForm />);

  //     const error = "title must be at least 1 characters";

  //     const addNewIdeaButton = screen.getByText("Add New Idea");
  //     await userEvent.click(addNewIdeaButton);
  //     const titleInput = screen.getByTestId("titleInput");
  //     await userEvent.type(titleInput, "foo");
  //     const addButton = screen.getByText("Add");
  //     await userEvent.click(addButton);
  //     const descriptionInputError = screen.getByTestId("descriptionError");

  //     expect(descriptionInputError).toHaveValue(error);
  //   });
  // });
});

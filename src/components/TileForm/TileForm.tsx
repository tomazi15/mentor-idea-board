import React, { useState, FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../helpers/Validations/Validations";
import { FormValues, NewTile, ShowFormUseState } from "../../types/types";
import "./TileForm.scss";
import { addNewTile } from "../../features/tileSlice";
import { useAppDispatch } from "../../app/hooks";
import uuid from "react-uuid";

// DRY
// WET -> Write Everything Twice

export const TileForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => setShowForm(!showForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const newTile: NewTile = {
      ...data,
      id: uuid(),
      createdAt: new Date().toLocaleString(),
    };
    dispatch(addNewTile(newTile));
  });

  return (
    <div className="Form">
      <button className="Form__showButton" onClick={handleShowForm}>
        Add New Idea
      </button>
      {showForm ? (
        <form onSubmit={onSubmit}>
          <div className="Form__title">
            <label className="Form__title--label" htmlFor="title">
              Title
            </label>
            <input
              {...register("title")}
              type="text"
              placeholder="Title..."
              data-testid="titleInput"
            />
            {errors?.title && (
              <p data-testid="titleError">{errors.title.message}</p>
            )}
          </div>
          <div className="Form__description">
            <label className="Form__description--label" htmlFor="description">
              Description
            </label>
            <textarea
              {...register("description")}
              placeholder="Description..."
              data-testid="descriptionInput"
            />
            {errors?.description && (
              <p data-testid="descriptionError">{errors.description.message}</p>
            )}
          </div>
          <div>
            <button id="submit" className="Form__submitButton" type="submit">
              Add
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

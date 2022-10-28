import React, { useState, FC } from "react";
import "./Tile.scss";
import { Card, Alert } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { deleteTile, updateTile } from "../../features/tileSlice";

export const Tile: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { tiles } = useAppSelector((state) => state.ideaBoard);

  const [updateToggle, setUpdateToggle] = useState({
    update: false,
    updateTileId: "",
  });
  const [updatedTile, setUpdatedTile] = useState({
    title: "",
    description: "",
  });

  const handleDelete = (id: string) => {
    dispatch(deleteTile(id));
  };

  const handleUpdate = (id: string) => {
    setUpdateToggle({ update: !updateToggle.update, updateTileId: id });
  };

  const handleSave = (id: string, createdAt: string) => {
    dispatch(
      updateTile({
        ...updatedTile,
        id,
        createdAt,
        updatedAt: new Date().toLocaleString(),
      })
    );
    setUpdateToggle({ ...updateToggle, update: !updateToggle.update });
  };

  const handelTitleChange = (e: any) => {
    setUpdatedTile({ ...updatedTile, title: e.target.value });
  };

  const handelDescriptionChange = (e: any) => {
    setUpdatedTile({ ...updatedTile, description: e.target.value });
  };

  return (
    <div className="IdeaTile">
      {tiles.length > 0 ? (
        tiles.map((tile) => {
          const { id, title, description, createdAt, updatedAt } = tile;

          return (
            <Card
              bg="dark"
              style={{ width: "18rem" }}
              className="mb-2 IdeaTile--item"
              key={id}
            >
              <Card.Body>
                <div className="IdeaTile--update">
                  {updateToggle.update && updateToggle.updateTileId === id ? (
                    <>
                      <input
                        type="text"
                        defaultValue={title}
                        onChange={handelTitleChange}
                      />
                      <textarea
                        defaultValue={description}
                        onChange={handelDescriptionChange}
                      />
                    </>
                  ) : (
                    <>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{description}</Card.Text>
                    </>
                  )}
                </div>
              </Card.Body>
              <Card.Footer>
                {!updatedAt ? (
                  <p>Added: {createdAt}</p>
                ) : (
                  <p>Updated: {updatedAt}</p>
                )}

                {updateToggle.update ? (
                  <>
                    <button onClick={() => handleSave(id, createdAt)}>
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleUpdate(id)}>Update</button>
                  </>
                )}

                <button onClick={() => handleDelete(id)}>Delete</button>
              </Card.Footer>
            </Card>
          );
        })
      ) : (
        <Alert className="IdeaTile--alert">please add new idea</Alert>
      )}
    </div>
  );
};

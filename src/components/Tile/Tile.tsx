import React, { FC } from "react";
import "./Tile.scss";
import { Card } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { deleteTile } from "../../features/tileSlice";

export const Tile: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { tiles } = useAppSelector((state) => state.ideaBoard);

  const handleDelete = (id: string) => {
    dispatch(deleteTile(id));
  };

  return (
    <div className="IdeaTile">
      {tiles.length > 0 ? (
        tiles.map((tile) => {
          const { title, description, createdAt, id } = tile;

          return (
            <Card
              bg="primary"
              style={{ width: "18rem" }}
              className="mb-2 IdeaTile--item"
              key={id}
            >
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <p>Added: {createdAt}</p>
                <button>Update</button>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </Card.Footer>
            </Card>
          );
        })
      ) : (
        <p>please add new idea</p>
      )}
    </div>
  );
};

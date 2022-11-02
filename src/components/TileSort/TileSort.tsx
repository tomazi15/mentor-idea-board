import React, { FC, useState } from "react";
import "./TileSort.scss";
import Form from "react-bootstrap/Form";
import { useAppDispatch } from "../../app/hooks";
import { sortTile } from "../../features/tileSlice";
import { InitialState } from "../../types/types";

export const TileSort: FC<InitialState> = ({ tiles }) => {
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState<boolean>(false);

  const handleSwitch = () => {
    setChecked(!checked);
    dispatch(sortTile(checked));
  };

  return (
    <div className="TileSort">
      {tiles.length >= 2 ? (
        <Form className="TileSort--sliders">
          <Form.Check
            type="switch"
            id="disabled-custom-switch"
            label={checked ? "Sorted Alphabetically" : "Sorted By Date"}
            checked={checked}
            onChange={handleSwitch}
          />
        </Form>
      ) : null}
    </div>
  );
};

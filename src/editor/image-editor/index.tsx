import React from "react";
import { IconButton } from "@material-ui/core";
import { AddAPhoto } from "@material-ui/icons";

interface IProps {
  registerImage: (image: Blob) => void;
}

export const ImageEditor = (props: IProps) => {
  return (
    <div>
      <input id="image" type="file" hidden />
      <label htmlFor="image">
        <IconButton>
          <AddAPhoto />
        </IconButton>
      </label>
    </div>
  );
};

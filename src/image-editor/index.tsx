import React from "react";
import * as style from "./style.css";
import Dropzone from "react-dropzone";
import { IconButton } from "@material-ui/core";
import { AddAPhoto, Close } from "@material-ui/icons";

interface IProps {
  registerImage: (image: File) => void;
  stopEditing: () => void;
}

export const ImageEditor = ({ registerImage, stopEditing }: IProps) => {
  const onDrop = (acceptedFiles: File[]) => {
    registerImage(acceptedFiles[0]);
  };

  return (
    <div>
      <div>
        <IconButton onClick={stopEditing}>
          <Close />
        </IconButton>
      </div>
      <Dropzone onDrop={onDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: style.dropzone })}>
            <input {...getInputProps()} />
            <AddAPhoto />
            <p>画像をアップロードしてください</p>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

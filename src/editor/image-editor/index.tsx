import React, { ChangeEvent } from "react";
import * as style from "./style.css";
import { AddAPhoto } from "@material-ui/icons";

interface IProps {
  registerImage: (image: File) => void;
}

export const ImageEditor = (props: IProps) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files!.item(0)!;
    props.registerImage(file);
  };

  return (
    <div>
      <label>
        <AddAPhoto />
        <input onChange={onChange} type="file" className={style.input} />
      </label>
    </div>
  );
};

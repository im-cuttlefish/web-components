import React, { ChangeEvent } from "react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import * as style from "./style.css";

interface IProps {
  text: string;
  stopEditing: () => void;
  writeText: (text: string) => void;
}

export const MdEditor = ({ text, writeText, stopEditing }: IProps) => {
  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    writeText(event.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <IconButton onClick={stopEditing}>
          <Close />
        </IconButton>
      </div>
      <textarea
        onChange={onChange}
        value={text}
        placeholder="入力してください"
        className={style.editor}
      />
    </div>
  );
};

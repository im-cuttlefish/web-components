import React, { ChangeEvent } from "react";
import { IconButton } from "@material-ui/core";
import { ChromePicker, ColorResult } from "react-color";
import { Close } from "@material-ui/icons";
import { IStyle } from "../node";
import * as css from "./style.css";

interface IProps {
  style: Partial<IStyle>;
  updateStyle: (style: Partial<IStyle>) => void;
  stopEditing: () => void;
}

export const StyleEditor = ({ style, updateStyle, stopEditing }: IProps) => {
  const onChange = (type: keyof IStyle) => ({ hex }: ColorResult) => {
    updateStyle({ [type]: hex });
  };

  const { color, background } = style;

  return (
    <div className={css.container}>
      <div className={css.buttons}>
        <IconButton onClick={stopEditing}>
          <Close />
        </IconButton>
      </div>
      <div>
        <div>
          文字色
          <ChromePicker color={color} onChange={onChange("color")} />
        </div>
        <div>
          背景色
          <ChromePicker color={background} onChange={onChange("background")} />
        </div>
      </div>
    </div>
  );
};

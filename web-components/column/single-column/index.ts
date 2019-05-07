import { IComponent } from "../../component";
const template = require("./template.html") as string;
const style = require("./style.scss") as string;

export const singleColumn: Readonly<IComponent> = {
  tagName: "single-column",
  name: "シングルカラム",
  description: "中央にテキストを配したレイアウトです",
  html: template,
  css: style,
  slot: {
    content: {
      type: "markdown",
      role: "内容"
    }
  }
};

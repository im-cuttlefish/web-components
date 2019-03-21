import { IComponent } from "../../component";
const template = require("./template.html") as string;
const style = require("./style.scss") as string;

export const heroHeader: IComponent = {
  tagName: "hero-header",
  name: "ヒーローヘッダー",
  description: "写真を全面に打ち出したヘッダーです",
  html: template,
  css: style,
  slot: {
    cover: "image",
    title: "text"
  }
};
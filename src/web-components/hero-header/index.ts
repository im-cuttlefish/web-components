import { IComponent } from "../component";
const template = require("./template.html") as string;
const style = require("./style.scss") as string;

export const heroHeader: IComponent = {
  name: "hero-header",
  html: template,
  css: style,
  container: true,
  slot: {
    cover: "image",
    title: "text"
  }
};

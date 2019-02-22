import { Component } from "../../component";
const template = require("./template.html");
const style = require("./style.scss");

export const heroHeader: Component = {
  name: "hero-header",
  html: template,
  css: style,
  container: true,
  slot: {
    cover: "image",
    title: "text"
  }
};

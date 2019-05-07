import marked from "marked";
import { INode, IContents } from "../node";
import { applyTemplate } from "./applyTemplate";

type Content = IContents[string];

const createChildElement = ([name, { type, content }]: [string, Content]) => {
  switch (type) {
    case "markdown": {
      const div = document.createElement("div");
      const markdown = marked(content, { headerIds: false, breaks: true });
      div.innerHTML = markdown;
      div.slot = name;
      return div;
    }
    case "plaintext": {
      const div = document.createElement("div");
      div.innerHTML = content;
      div.slot = name;
      return div;
    }
    case "image": {
      const img = document.createElement("img");
      img.src = content;
      img.slot = name;
      return img;
    }
  }
};

const createElement = (node: INode) => {
  const { contents, style, component } = node;
  const { tagName } = component;
  const element = document.createElement(tagName);
  const children = Object.entries(contents).map(createChildElement);

  Object.assign(element.style, style);
  children.forEach(element.appendChild);
  return element;
};

export const buildHTML = (tree: INode[]) => {
  const div = document.createElement("div");
  const elements = tree.map(createElement);
  elements.forEach(div.appendChild);
  return applyTemplate(div.innerHTML);
};

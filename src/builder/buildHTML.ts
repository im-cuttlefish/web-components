import marked from "marked";
import { INode, IStyle, IContents } from "../node";
import { applyTemplate } from "./applyTemplate";

type Content = IContents[string];

const createChildElement = ([name, { type, content }]: [string, Content]) => {
  switch (type) {
    case "markdown": {
      const markdown = marked(content, { headerIds: false, breaks: true });
      return `<div slot="${name}">${markdown}</div>`;
    }
    case "plaintext": {
      return `<div slot="${name}">${content}</div>`;
    }
    case "image": {
      return `<img slot="${name}" src="${content}">`;
    }
  }
};

const styleToCSS = (target: Partial<IStyle>) => {
  const pascalToKebab = (pascal: string) =>
    pascal.replace(/([A-Z])/g, matched => `-${matched.toLowerCase()}`);

  return Object.entries(target)
    .map(([name, content]) => `${pascalToKebab(name)}:${content}`)
    .join(";");
};

const createElement = (node: INode) => {
  const { contents, style, component } = node;
  const { tagName } = component;
  const css = styleToCSS(style);
  const children = Object.entries(contents)
    .map(createChildElement)
    .join("");

  return `<${tagName} style="${css}">${children}</${tagName}>`;
};

export const buildHTML = (tree: INode[]) => {
  const children = tree.map(createElement).join("");
  console.log(children);
  return applyTemplate(children);
};

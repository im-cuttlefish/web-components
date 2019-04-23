import JSZip from "jszip";
import { INode } from "../node";

export const BuildZip = (tree: INode[]) => {
  const body = document.createElement("body");

  for (const node of tree) {
    const { contents, style, component } = node;
    const { tagName, html, css, slot } = component;

    const element = document.createElement(tagName);
    Object.assign(element.style, style);
  }
};

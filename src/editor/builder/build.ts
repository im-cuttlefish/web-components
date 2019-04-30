import JSZip from "jszip";
import { INode } from "../node";
import { buildHTML } from "./buildHTML";

export const BuildZip = (tree: INode[]) => {
  const zip = new JSZip();
  zip.file("index.html", buildHTML(tree));
};

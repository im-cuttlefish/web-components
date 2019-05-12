import JSZip from "jszip";
import { INode } from "../node";
import { buildHTML } from "./buildHTML";
import { buildJS } from "./buildJS";

export const BuildZip = async (tree: INode[]) => {
  const components = tree.map(({ component }) => component);
  const zip = new JSZip();
  zip.file("index.html", buildHTML(tree));
  zip.file("script.js", buildJS(components));
  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  return url;
};

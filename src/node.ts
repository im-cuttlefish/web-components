import { Slot, IComponent } from "./web-components";
import { generate as generateID } from "shortid";

export interface IStyle {
  color: string;
  background: string;
}

export interface IContents {
  [name: string]: {
    type: Slot;
    content: string;
  };
}

export interface INode {
  id: string;
  contents: IContents;
  style: Partial<IStyle>;
  component: IComponent;
}

const getDefaultContent = (type: Slot) => {
  switch (type) {
    case "markdown":
      return "## サブタイトル\n**Markdown**が利用可能です。";
    case "plaintext":
      return "プレーンテキスト";
    case "image":
      return "./assets/placeholder.png";
  }
};

export const createNode = (component: IComponent): INode => {
  const contents: IContents = {};
  const style: Partial<IStyle> = {};
  const id = generateID();

  for (const slot of Object.entries(component.slot)) {
    const [name, { type }] = slot;
    contents[name] = { type, content: getDefaultContent(type) };
  }

  return { id, contents, style, component };
};

import { Slot, IComponent } from "../web-components/component";

export interface IStyle {
  color: string;
  background: string;
}

interface IContents {
  [name: string]: {
    type: Slot;
    content: string;
    style: Partial<IStyle>;
  };
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

export class Node {
  public contents: IContents = {};

  constructor(public component: IComponent) {
    for (const slot of Object.entries(component.slot)) {
      const [name, [type]] = slot;
      this.contents[name] = {
        type,
        style: {},
        content: getDefaultContent(type)
      };
    }
  }
}

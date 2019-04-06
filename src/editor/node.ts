import { Slot, IComponent } from "../web-components/component";

interface IContents {
  [name: string]: {
    type: Slot;
    content: string;
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
      this.contents[name] = { type, content: getDefaultContent(type) };
    }
  }
}

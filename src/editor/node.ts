import { Slot, IComponent } from "../web-components/component";

interface IContents {
  [name: string]: {
    type: Slot;
    content: string;
  };
}

export class Node {
  public contents: IContents;

  constructor(public component: IComponent) {
    this.contents = {};
    for (const slot of Object.entries(component.slot)) {
      const [name, [, type]] = slot;
      this.contents[name] = { type, content: "" };
    }
  }
}

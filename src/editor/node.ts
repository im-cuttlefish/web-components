import { Slot, IComponent } from "../web-components/component";

export interface INode {
  component: IComponent;
  contents: {
    [name: string]: {
      type: Slot;
      content: string;
    };
  };
}

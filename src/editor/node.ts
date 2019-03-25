import { Slot } from "../web-components/component";

export interface INode {
  tagName: string;
  name: string;
  contents: {
    [name: string]: {
      type: Slot;
      content: string;
    };
  };
}

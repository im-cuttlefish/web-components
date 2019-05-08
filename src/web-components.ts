import ky from "ky";

export type Slot = "image" | "markdown" | "plaintext";

export interface IComponent {
  tagName: string;
  name: string;
  description: string;
  html: string;
  css?: string;
  slot: {
    [name: string]: {
      type: Slot;
      role: string;
    };
  };
}

export interface IDescriptions {
  [group: string]: Array<{
    tagName: string;
    name: string;
    description: string;
  }>;
}

export const getDescriptions = () =>
  ky.get("http://localhost:5000/descriptions").json<IDescriptions>();

export const getComponentByTagName = (name: string) =>
  ky.get(`http://localhost:5000/components/${name}`).json<IComponent>();

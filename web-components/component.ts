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

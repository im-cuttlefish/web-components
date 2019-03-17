export type Slot = "text" | "image" | "html";
export interface IComponent {
  tagName: string;
  name: string;
  description: string;
  html: string;
  css?: string;
  slot: { [name: string]: Slot };
}

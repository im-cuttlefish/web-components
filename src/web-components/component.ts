export type Slot = "image" | "html";
export interface IComponent {
  tagName: string;
  name: string;
  description: string;
  html: string;
  css?: string;
  slot: { [name: string]: [string, Slot] };
}

type Slot = "text" | "image" | "markdown" | "component";

export interface IComponent {
  name: string;
  html: string;
  css?: string;
  container?: boolean;
  slot: { [name: string]: Slot | Slot[] };
}

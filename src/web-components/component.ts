type Slot = "text" | "image" | "markdown" | "component";

export interface IComponent {
  name: string;
  html: string;
  css?: string;
  container?: boolean;
  slot: "default" | { [name: string]: Slot | Slot[] };
}

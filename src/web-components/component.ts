type Slot = "text" | "image" | "table" | "list" | "component";

export interface Component {
  name: string;
  html: string;
  css?: string;
  container?: boolean;
  slot: {
    [name: string]: Slot | Slot[];
  };
}

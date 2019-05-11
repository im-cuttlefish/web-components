import ky from "ky";
import Dexie from "dexie";

export type Slot = "image" | "markdown" | "plaintext";

export interface IComponent {
  id?: number;
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

export interface IDescription {
  id?: number;
  tagName: string;
  name: string;
  description: string;
}

class ComponentDatanase extends Dexie {
  public components: Dexie.Table<IComponent, number>;

  constructor() {
    super("ComponentDatabase");
    this.version(1).stores({
      components: "++id, tagName, name, description, html, css, slot"
    });
    this.components = this.table("components");
  }
}

export const getDescriptions = async () => {
  const text = sessionStorage.getItem("descriptions");
  if (text) {
    return JSON.parse(text) as { [key: string]: IDescription[] };
  }

  const json = await ky.get("http://localhost:5000/descriptions").text();
  sessionStorage.setItem("descriptions", json);
  return JSON.parse(json) as { [key: string]: IDescription[] };
};

export const getComponentByTagName = async (name: string) => {
  const db = new ComponentDatanase();
  const memorized = await db.components
    .where("tagName")
    .equals(name)
    .first();

  if (memorized) {
    return memorized;
  }

  const called = await ky
    .get(`http://localhost:5000/components/${name}`)
    .json<IComponent>();

  db.components.put(called);
  return called;
};

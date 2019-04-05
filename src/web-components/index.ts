import { IComponent } from "./component";
import { header } from "./header";
import { column } from "./column";

interface IComponents {
  [type: string]: IComponent[];
}

export const components: IComponents = { header, column };

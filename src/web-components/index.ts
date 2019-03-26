import { IComponent } from "./component";
import { header } from "./header";

interface IComponents {
  [type: string]: IComponent[];
}

export const components: IComponents = { header };

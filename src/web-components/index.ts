import { IComponent } from "./component";
import { header } from "./header";

interface IComponents {
  [type: string]: IComponent[];
}

const componentList: IComponent[] = [...header];
export const components: IComponents = { header };
export const getComponentMap = () => {
  return new Map(
    componentList.map((elm): [string, IComponent] => [elm.tagName, elm])
  );
};

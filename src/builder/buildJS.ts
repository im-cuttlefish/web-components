import { IComponent } from "../web-components";

export const buildJS = (components: IComponent[]) => `\
const components = ${JSON.stringify(components)};

const defineCustomElement = props => {
  const { tagName, html, css = false } = props;

  class Element extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = html;
      if (css) {
        const style = document.createElement("style");
        style.innerHTML = css;
        shadowRoot.appendChild(style);
      }
    }
  }

  customElements.define(tagName, Element);
};

for (const component of components) {
  defineCustomElement(component);
}
`;

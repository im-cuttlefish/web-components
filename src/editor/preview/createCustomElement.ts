export const createCustomElement = (html: string, css?: string) => {
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

  return Element;
};

export const defineComponent = (name: string, html: string, css?: string) => {
  class Element extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = html;
      if (css) {
        const style = document.createElement("style");
        style.textContent = css;
        shadow.appendChild(style);
      }
    }
  }

  customElements.define(name, Element);
};

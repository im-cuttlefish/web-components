export const defineComponent = (name: string, html: string, css?: string) => {
  customElements.define(
    name,
    class extends HTMLElement {
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
  );
};

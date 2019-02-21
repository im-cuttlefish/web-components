const html = require("./template.html");
const css = require("./style.scss");

customElements.define(
  "hero-header",
  class extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = html;
      const style = document.createElement("style");
      style.textContent = css;
      shadow.appendChild(style);
    }
  }
);

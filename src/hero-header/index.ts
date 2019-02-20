const html = require("./template.html");

customElements.define(
  "hero-header",
  class extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = html;
    }
  }
);

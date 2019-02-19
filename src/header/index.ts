const html = require("./template.html");

class Header extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    shadow.innerHTML = html;
    shadow.appendChild(style);

    const title = this.dataset.title;
  }
}

customElements.define("x-header", Header);

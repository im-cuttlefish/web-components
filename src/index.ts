class Header extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <header>
        <nav>
          <ul>
            <li><a href="">aaaa</a></li>
            <li><a href="">bbbb</a></li>
            <li><a href="">cccc</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define("x-header", Header);

interface IProps {
  target: any;
  tagName: string;
  html: string;
  css?: string;
}

export const defineCustomElement = (props: IProps) => {
  const { target, tagName, html } = props;

  class Element extends target.HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = html;
      if (props.css) {
        const style = document.createElement("style");
        style.innerHTML = props.css;
        shadowRoot.appendChild(style);
      }
    }
  }

  target.customElements.define(tagName, Element);
};

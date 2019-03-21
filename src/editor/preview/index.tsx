import React, { Component, createElement, ReactElement } from "react";
import { render } from "react-dom";
import { INode } from "../node";
import { componentList } from "../../web-components";
import * as style from "./style.css";
import { IComponent } from "../../web-components/component";
const template = require("./template.html");

interface IProps {
  tree: INode[];
}

interface IState {}

const components = new Map(
  componentList.map(
    (component): [string, IComponent] => [component.tagName, component]
  )
);

/*
const createCustomElement = (html: string, css?: string) => {
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
*/

export class Preview extends Component<IProps, IState> {
  private ref: React.RefObject<HTMLIFrameElement>;
  private registered: Set<string>;
  private root: HTMLDivElement;

  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef();
    this.registered = new Set();
    this.root = document.createElement("div");
  }

  public render() {
    return <iframe className={style.preview} ref={this.ref} />;
  }

  public componentDidMount() {
    const { contentDocument } = this.ref.current!;
    this.root = document.createElement("div");

    contentDocument!.head.innerHTML = template;
    contentDocument!.body.appendChild(this.root);
  }

  public componentDidUpdate() {
    const { contentWindow } = this.ref.current!;
    const tree: ReactElement[] = [];

    this.props.tree.forEach((node, key) => {
      const { tagName } = node;
      tree.push(createElement(tagName, { key }));

      if (!this.registered.has(tagName)) {
        const component = components.get(tagName);
        const { html, css } = component!;
        console.log(html, css);
        // tslint:disable-next-line: max-classes-per-file
        class Hoge extends HTMLElement {
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
        contentWindow!.customElements.define(tagName, Hoge);
        this.registered.add(tagName);
      }
    });

    render(createElement("div", {}, tree), this.root);
  }
}

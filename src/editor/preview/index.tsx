import React, { Component, createElement } from "react";
import { render } from "react-dom";
import { INode } from "../node";
import { createCustomElement } from "./createCustomElement";
import { componentList } from "../../web-components";
import * as style from "./style.css";
const template = require("./template.html");

interface IProps {
  tree: INode[];
}

interface IState {
  registered: Set<string>;
}

export class Preview extends Component<IProps, IState> {
  private ref: React.RefObject<HTMLIFrameElement>;

  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef();
    this.state = { registered: new Set() };
  }

  public render() {
    return <iframe className={style.preview} ref={this.ref} />;
  }

  public componentDidMount() {
    const { contentDocument } = this.ref.current;
    const preview = document.createElement("div");

    contentDocument!.head.innerHTML = template;
    contentDocument!.body.appendChild(preview);

    render(createElement("p", null, "hello world"), preview);
  }

  public componentDidUpdate() {
    const { contentWindow, contentDocument } = this.ref.current;
    for (const node of this.props.tree) {
      const { tagName } = node;

      if (!this.state.registered.has(tagName)) {
        const component = componentList.find(elm => elm.tagName === tagName);
        const { html, css } = component;
        contentWindow.customElements.define(
          tagName,
          createCustomElement(html, css)
        );
        this.state.registered.add(tagName);
      }
    }
  }
}

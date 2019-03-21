import React, { Component, createElement, ReactElement } from "react";
import { render } from "react-dom";
import { INode } from "../node";
import { componentList } from "../../web-components";
import * as style from "./style.css";
import { defineCustomElement } from "./defineCustomElement";
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
        this.registered.add(tagName);

        defineCustomElement({
          tagName,
          html,
          css,
          target: contentWindow
        });
      }
    });

    render(createElement("div", {}, tree), this.root);
  }
}

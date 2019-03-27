import React, { Component, createElement, ReactElement } from "react";
import { render } from "react-dom";
import { INode } from "../node";
import * as style from "./style.css";
import { defineCustomElement } from "./defineCustomElement";
const template = require("./template.html");

interface IProps {
  tree: INode[];
}

interface IState {}

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

    const tree = this.props.tree.map((node, index) => {
      const { component } = node;
      const { tagName } = component;

      if (!this.registered.has(tagName)) {
        const { html, css } = component;
        defineCustomElement({ tagName, html, css, target: contentWindow });
        this.registered.add(tagName);
      }

      return createElement(tagName, { key: index });
    });

    render(createElement("div", {}, tree), this.root);
  }
}

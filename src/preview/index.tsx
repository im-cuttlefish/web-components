import React, { Component } from "react";
import { render } from "react-dom";
import { INode } from "../node";
import * as style from "./style.css";
import { defineCustomElement } from "./defineCustomElement";
import { buildPreviewCreater } from "./createPreview";
const template = require("./template.html");

interface IProps {
  target?: number;
  tree: INode[];
}

export class Preview extends Component<IProps> {
  private ref: React.RefObject<HTMLIFrameElement>;
  private registered: Set<string>;
  private root: HTMLDivElement;
  private createPreview: (tree: INode[]) => JSX.Element;

  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef();
    this.registered = new Set();
    this.root = document.createElement("div");
    this.createPreview = buildPreviewCreater(props.tree);
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
    const { tree } = this.props;

    for (const node of tree) {
      const { component } = node;
      const { tagName } = component;

      if (!this.registered.has(tagName)) {
        const { html, css } = component;
        defineCustomElement({ tagName, html, css, target: contentWindow });
        this.registered.add(tagName);
      }
    }

    render(this.createPreview(tree), this.root);
  }
}

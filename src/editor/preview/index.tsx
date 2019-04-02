import React, { Component, createElement, ReactElement } from "react";
import { render } from "react-dom";
import { Node } from "../node";
import * as style from "./style.css";
import { defineCustomElement } from "./defineCustomElement";
const template = require("./template.html");

interface IProps {
  tree: Node[];
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

    const elements = tree.map((node, index) => {
      const { component, contents } = node;
      const { tagName } = component;

      const children = Object.entries(contents).map((entry, key) => {
        const [name, slot] = entry;
        const { type, content } = slot;
        switch (type) {
          case "html":
            return (
              <div
                key={key}
                slot={name}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            );
          case "image":
            return <img key={key} slot={name} src={content} />;
        }
      });

      return createElement(tagName, { key: index }, children);
    });

    render(<div>{elements}</div>, this.root);
  }
}

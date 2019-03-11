import React, { Component, createElement } from "react";
import { render } from "react-dom";
const html = require("./template.html");

interface IState {
  defined: Set<string>;
}

export class Preview extends Component<{}, IState> {
  private ref: React.RefObject<HTMLIFrameElement>;

  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  public render() {
    return <iframe ref={this.ref} />;
  }

  public componentDidMount() {
    this.setState({ defined: new Set() });

    const content = this.ref.current!.contentDocument;
    const preview = document.createElement("div");

    content!.head.innerHTML = html;
    content!.body.appendChild(preview);

    render(createElement("p", null, "hello world"), preview);
  }
}

import React, { Component } from "react";
import { IComponent } from "../../web-components/component";
const srcdoc = require("./template.html");

interface IState {
  defined: Set<string>;
  cue: string[];
  isActive: boolean;
}

export class Preview extends Component<{}, IState> {
  private ref: React.RefObject<HTMLIFrameElement>;

  constructor(props) {
    super(props);
    this.ref = React.createRef();

    const executeCue = (event: MessageEvent) => {
      if (event.data === "preview iframe is activated") {
        this.setState({ isActive: true });
        window.removeEventListener("message", executeCue, false);
        for (const cue of this.state.cue) {
          this.ref.current.contentWindow!.postMessage(cue, "*");
        }
      }
    };

    window.addEventListener("message", executeCue, false);
  }

  public updateHTML(html: string) {
    const json = JSON.stringify({ html });

    if (this.state.isActive) {
      this.ref.current.contentWindow!.postMessage(json, "*");
    } else {
      this.setState({ cue: this.state.cue.concat(html) });
    }
  }

  public defineComponent(...components: IComponent[]) {
    const unregistered = components.filter(
      elm => !this.state.defined.has(elm.name)
    );
    if (!unregistered) return;

    const json = JSON.stringify({ components: unregistered });

    if (this.state.isActive) {
      this.ref.current.contentWindow!.postMessage(json, "*");
    } else {
      this.setState({ cue: this.state.cue.concat(json) });
    }

    for (const elm of unregistered) {
      this.state.defined.add(elm.name);
    }
  }

  public componentDidMount() {
    this.setState({
      defined: new Set(),
      cue: [],
      isActive: false
    });
  }

  public render() {
    return <iframe ref={this.ref} srcDoc={srcdoc} />;
  }
}

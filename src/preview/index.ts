import { Component } from "../web-components/component";
const html = require("./template.html");

interface Cue {
  type: "updateHTML" | "defineComponent";
  content: string;
}

export class Preview {
  view: HTMLIFrameElement;
  private defined: Set<string>;
  private cue: string[];
  private isActive: boolean;

  constructor() {
    this.view = document.createElement("iframe");
    this.view.srcdoc = html;
    this.defined = new Set();
    this.cue = [];
    this.isActive = false;

    const executeCue = (event: MessageEvent) => {
      this.isActive = true;
      if (event.data === "preview iframe is activated") {
        for (const cue of this.cue) {
          this.view.contentWindow!.postMessage(cue, "*");
        }
        window.removeEventListener("message", executeCue, false);
      }
    };

    window.addEventListener("message", executeCue, false);
  }

  updateHTML(html: string) {
    const json = JSON.stringify({ html });

    if (this.isActive) {
      this.view.contentWindow!.postMessage(json, "*");
    } else {
      this.cue.push(json);
    }
  }

  defineComponent(...components: Component[]) {
    const unregistered = components.filter(elm => !this.defined.has(elm.name));
    if (!unregistered) return;

    const json = JSON.stringify({ components: unregistered });

    if (this.isActive) {
      this.view.contentWindow!.postMessage(json, "*");
    } else {
      this.cue.push(json);
    }

    for (const elm of unregistered) {
      this.defined.add(elm.name);
    }
  }
}

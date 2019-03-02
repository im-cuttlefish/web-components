import { IComponent } from "../web-components/component";
const srcdoc = require("./template.html");

export class PreviewManager {
  public readonly view: HTMLIFrameElement;
  private defined: Set<string>;
  private cue: string[];
  private isActive: boolean;

  constructor() {
    this.view = document.createElement("iframe");
    this.view.srcdoc = srcdoc;
    this.defined = new Set();
    this.cue = [];
    this.isActive = false;

    const executeCue = (event: MessageEvent) => {
      if (event.data === "preview iframe is activated") {
        this.isActive = true;
        window.removeEventListener("message", executeCue, false);
        for (const cue of this.cue) {
          this.view.contentWindow!.postMessage(cue, "*");
        }
      }
    };

    window.addEventListener("message", executeCue, false);
  }

  public updateHTML(html: string) {
    const json = JSON.stringify({ html });

    if (this.isActive) {
      this.view.contentWindow!.postMessage(json, "*");
    } else {
      this.cue.push(json);
    }
  }

  public defineComponent(...components: IComponent[]) {
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

import React from "react";
import { render } from "react-dom";
import { App } from "./editor";

render(<App />, document.getElementById("container"));

/*
const html = `
<hero-header>
  <span slot="title">aaaa</span>
  <img slot="cover" src="./assets/cover.jpeg">
</hero-header>
`;

const preview = new Preview();

document.body.appendChild(preview.view);
preview.updateHTML(html);
preview.defineComponent(heroHeader);
*/

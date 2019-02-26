import { heroHeader } from "./web-components";
import { Preview } from "./preview";

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

import { preview } from "./preview";
import { heroHeader } from "./web-components";

const json = {
  html: `
    <hero-header>
      <span slot="title">aaaa</span>
      <img slot="cover" src="./assets/cover.jpeg">
    </hero-header>
  `,
  components: [heroHeader]
};

document.body.appendChild(preview);
setTimeout(() => {
  preview.contentWindow!.postMessage(JSON.stringify(json), "*");
}, 1000);

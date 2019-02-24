const html = require("./template.html");

const iframe = document.createElement("iframe");
iframe.srcdoc = html;

export const preview = iframe;

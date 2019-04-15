import React, { createElement } from "react";
import marked from "marked";
import { Node } from "../node";

const createDiv = (index: number, name: string, html: string) => (
  <div key={index} slot={name} dangerouslySetInnerHTML={{ __html: html }} />
);

export const createPreview = (tree: Node[]) => (
  <>
    {tree.map((node, key) => {
      const { component, contents, style } = node;
      const { tagName } = component;

      const children = Object.entries(contents).map((entry, index) => {
        const [name, slot] = entry;
        const { type, content } = slot;

        switch (type) {
          case "markdown":
            const markdown = marked(content, {
              headerIds: false,
              breaks: true
            });
            return createDiv(index, name, markdown);
          case "plaintext":
            return createDiv(index, name, content);
          case "image":
            return <img key={index} slot={name} src={content} />;
        }
      });

      return createElement(tagName, { key, style }, children);
    })}
  </>
);

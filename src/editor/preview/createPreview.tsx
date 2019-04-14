import React, { createElement } from "react";
import marked from "marked";
import { Node } from "../node";

export const createPreview = (tree: Node[]) => {
  const elements = tree.map((node, key) => {
    const { component, contents, style } = node;
    const { tagName } = component;

    const children = Object.entries(contents).map((entry, index) => {
      const [name, slot] = entry;
      const { type } = slot;
      let { content } = slot;

      switch (type) {
        case "markdown":
          content = marked(content, { headerIds: false, breaks: true });
        case "plaintext":
          return (
            <div
              key={index}
              slot={name}
              style={style}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          );
        case "image":
          return <img key={index} slot={name} src={content} />;
      }
    });

    return createElement(tagName, { key }, children);
  });

  return <>{elements}</>;
};

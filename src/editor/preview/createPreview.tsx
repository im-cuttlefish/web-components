import React, { createElement } from "react";
import { Node } from "../node";

export const createPreview = (tree: Node[]) => {
  const elements = tree.map((node, key) => {
    const { component, contents } = node;
    const { tagName } = component;

    const children = Object.entries(contents).map((entry, index) => {
      const [name, slot] = entry;
      const { type } = slot;
      let { content } = slot;

      if (!content) {
        switch (type) {
          case "html":
            content = "placeholder";
            break;
          case "image":
            content = "./assets/placeholder.png";
            break;
        }
      }

      switch (type) {
        case "html":
          return (
            <div
              key={index}
              slot={name}
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

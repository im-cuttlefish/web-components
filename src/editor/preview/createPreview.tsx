import React, { createElement } from "react";
import marked from "marked";
import { equals } from "ramda";
import { INode, IContents } from "../node";

const createDiv = (index: number, name: string, html: string) => (
  <div key={index} slot={name} dangerouslySetInnerHTML={{ __html: html }} />
);

const createContent = (entry: [string, IContents[string]], index: number) => {
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
};

export const buildPreviewCreater = (initialTree: INode[]) => {
  const prevNodes = new Map<string, INode>();
  const prevElements = new Map<string, JSX.Element>();

  return (tree: INode[]) => {
    const nextNodes: Array<[string, INodes]> = [];
    const nextElements: Array<[string, JSX.Element]> = [];

    const nodes = tree.map(node => {
      const { component, contents, style, id } = node;
      const { tagName } = component;
      nextNodes.push([id, node]);

      if (equals(node, prevNodes.get(id))) {
        const memoized = prevElements.get(id)!;
        nextElements.push([id, memoized]);
        return memoized;
      }

      const children = Object.entries(contents).map(createContent);
      const element = createElement(tagName, { style, key: id }, children);
      nextElements.push([id, element]);
      return element;
    });

    prevNodes.clear();
    prevElements.clear();

    for (const [id, node] of nextNodes) {
      prevNodes.set(id, node);
    }

    for (const [id, element] of nextElements) {
      prevElements.set(id, element);
    }

    return <>{nodes}</>;
  };
};

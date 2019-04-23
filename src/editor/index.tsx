import React, { Component } from "react";
import * as R from "ramda";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { TextEditor } from "./text-editor";
import { ImageEditor } from "./image-editor";
import { StyleEditor } from "./style-editor";
import { Picker } from "./picker";
import { IComponent, Slot } from "../web-components/component";
import { createNode, IStyle, INode } from "./node";
import * as css from "./style.css";

interface IState {
  tree: INode[];
  editing: boolean;
  type?: Slot | "style";
  target?: number;
  name?: string;
}

export class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { tree: [], editing: false };
  }

  public addNode = (component: IComponent) => {
    const { tree } = this.state;
    const node = createNode(component);
    this.setState({ tree: R.append(node, tree) });
  };

  public removeNode = (target: number) => {
    if (target === this.state.target) {
      this.stopEditing();
    }

    const tree = R.remove(target, 1, this.state.tree);
    this.setState({ tree });
  };

  public moveNode = (target: number, direction: "up" | "down") => {
    const { tree: oldtree } = this.state;
    const to = direction === "up" ? target - 1 : target + 1;
    const tree = R.move(target, to, oldtree);
    this.setState({ tree });
  };

  public editNode = (type: Slot | "style", target: number, name?: string) => {
    this.setState({ type, target, name, editing: true });
  };

  public stopEditing = () => {
    this.setState({ editing: false });
  };

  public writeText = (text: string) => {
    const { target, name, tree: oldtree } = this.state;
    const path = [target!, "contents", name!, "content"];
    const tree = R.assocPath(path, text, oldtree);
    this.setState({ tree });
  };

  public updateStyle = (style: Partial<IStyle>) => {
    const { target, tree: oldtree } = this.state;
    const path = [target!, "style"];
    const merged = R.mergeDeepRight(R.path(path, oldtree)!, style);
    const tree = R.assocPath(path, merged, oldtree);
    this.setState({ tree });
  };

  public registerImage = (image: File) => {
    const url = URL.createObjectURL(image);
    this.writeText(url);
  };

  public render() {
    const { tree, editing } = this.state;

    return (
      <div className={css.container}>
        <div className={css.header}>
          <Header />
        </div>
        <div className={css.left}>
          <Tree
            tree={tree}
            moveNode={this.moveNode}
            removeNode={this.removeNode}
            editNode={this.editNode}
          />
        </div>
        <div className={css.center}>
          {editing ? (
            this.renderEditor()
          ) : (
            <Picker tree={tree} addNode={this.addNode} />
          )}
        </div>
        <div className={css.right}>
          <Preview tree={tree} />
        </div>
      </div>
    );
  }

  public renderEditor() {
    const { tree, type, target, name } = this.state;
    const { style, contents } = tree[target!];

    switch (type) {
      case "markdown":
      case "plaintext":
        const { content } = contents[name!];
        return (
          <TextEditor
            text={content}
            stopEditing={this.stopEditing}
            writeText={this.writeText}
          />
        );
      case "image":
        return (
          <ImageEditor
            registerImage={this.registerImage}
            stopEditing={this.stopEditing}
          />
        );
      case "style":
        return (
          <StyleEditor
            style={style}
            updateStyle={this.updateStyle}
            stopEditing={this.stopEditing}
          />
        );
    }
  }
}

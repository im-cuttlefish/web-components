import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { TextEditor } from "./text-editor";
import { ImageEditor } from "./image-editor";
import { Picker } from "./picker";
import { IComponent } from "../web-components/component";
import { IStyle, Node } from "./node";
import * as css from "./style.css";

interface IState {
  tree: Node[];
  editing: boolean;
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
    const node = new Node(component);
    this.setState({ tree: tree.concat(node) });
  };

  public removeNode = (target: number) => {
    if (target === this.state.target) {
      this.stopEditing();
    }

    const tree = [...this.state.tree];
    const state = { tree };
    tree.splice(target, 1);
    this.setState(state);
  };

  public selectNode = (target: number, name: string) => {
    this.setState({ name, target, editing: true });
  };

  public stopEditing = () => {
    this.setState({ editing: false });
  };

  public writeText = (text: string) => {
    const tree = [...this.state.tree];
    const { target, name } = this.state;
    tree[target!].contents[name!].content = text;
    this.setState({ tree });
  };

  public updateStyle = (style: Partial<IStyle>) => {
    const tree = [...this.state.tree];
    const { target, name } = this.state;
    const next = Object.assign(tree[target!].contents[name!].style, style);
  };

  public registerImage = (image: File) => {
    const url = URL.createObjectURL(image);
    this.writeText(url);
  };

  public render() {
    const { tree, editing, target, name } = this.state;
    const editor = (() => {
      if (!editing) {
        return <Picker tree={tree} addNode={this.addNode} />;
      }

      const { type, content } = tree[target!].contents[name!];

      switch (type) {
        case "markdown":
        case "plaintext":
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
      }
    })();

    return (
      <div className={css.container}>
        <div className={css.header}>
          <Header />
        </div>
        <div className={css.left}>
          <Tree
            tree={tree}
            removeNode={this.removeNode}
            selectNode={this.selectNode}
          />
        </div>
        <div className={css.center}>{editor}</div>
        <div className={css.right}>
          <Preview tree={tree} />
        </div>
      </div>
    );
  }
}

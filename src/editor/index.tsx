import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { MdEditor } from "./md-editor";
import { ImageEditor } from "./image-editor";
import { Picker } from "./picker";
import { IComponent } from "../web-components/component";
import * as style from "./style.css";
import { Node } from "./node";

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
            <MdEditor
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
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.left}>
          <Tree
            tree={tree}
            removeNode={this.removeNode}
            selectNode={this.selectNode}
          />
        </div>
        <div className={style.center}>{editor}</div>
        <div className={style.right}>
          <Preview tree={tree} />
        </div>
      </div>
    );
  }
}

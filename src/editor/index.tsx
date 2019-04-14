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
import { IStyle, Node } from "./node";
import * as css from "./style.css";

interface IState {
  tree: Node[];
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
    const node = new Node(component);
    this.setState({ tree: R.append(node, tree) });
  };

  public removeNode = (target: number) => {
    if (target === this.state.target) {
      this.stopEditing();
    }

    const tree = R.remove(target, 1, this.state.tree);
    this.setState({ tree });
  };

  public editNode = (type: Slot | "style", target: number, name?: string) => {
    const state = R.mergeRight(this.state, {
      type,
      target,
      name,
      editing: true
    });
    this.setState(state);
  };

  public stopEditing = () => {
    this.setState({ editing: false });
  };

  public writeText = (text: string) => {
    const tree = R.clone(this.state.tree);
    const { target, name } = this.state;
    tree[target!].contents[name!].content = text;
    this.setState({ tree });
  };

  public updateStyle = (style: Partial<IStyle>) => {
    const tree = R.clone(this.state.tree);
    const { target } = this.state;
    Object.assign(tree[target!].style, style);
    this.setState({ tree });
  };

  public registerImage = (image: File) => {
    const url = URL.createObjectURL(image);
    this.writeText(url);
  };

  public render() {
    const { tree, editing, type, target, name } = this.state;
    const editor = (() => {
      if (!editing) {
        return <Picker tree={tree} addNode={this.addNode} />;
      }

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
            editNode={this.editNode}
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

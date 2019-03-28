import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { MdEditor } from "./md-editor";
import { Picker } from "./picker";
import { IComponent } from "../web-components/component";
import * as style from "./style.css";
import { INode } from "./node";

interface IState {
  tree: INode[];
  target: number | false;
}

export class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { tree: [], target: false };
  }

  public addNode = (component: IComponent) => {
    const { tree } = this.state;
    const contents: INode["contents"] = {};

    for (const slot of Object.entries(component.slot)) {
      const [name, [, type]] = slot;
      contents[name] = { type, content: "" };
    }

    const node = { component, contents };
    this.setState({ tree: tree.concat(node) });
  };

  public removeNode = (index: number) => {
    const tree = [...this.state.tree];
    tree.splice(index, 1);
    this.setState({ tree });
  };

  public editContent = (index: number, name: string) => {
    this.setState({ target: index });
  };

  public render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.left}>
          <Tree tree={this.state.tree} removeNode={this.removeNode} />
        </div>
        <div className={style.center}>
          {this.state.target === false ? (
            <Picker tree={this.state.tree} addNode={this.addNode} />
          ) : (
            <MdEditor />
          )}
        </div>
        <div className={style.right}>
          <Preview tree={this.state.tree} />
        </div>
      </div>
    );
  }
}

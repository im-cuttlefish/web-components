import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { MdEditor } from "./md-editor";
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
    const tree = [...this.state.tree];
    tree.splice(target, 1);
    this.setState({ tree });
  };

  public selectNode = (target: number, name: string) => {
    this.setState({ name, target, editing: true });
  };

  public writeText = (text: string) => {
    const tree = [...this.state.tree];
    const { target, name } = this.state;
    tree[target!].contents[name!].content = text;
    this.setState({ tree });
  };

  public render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.left}>
          <Tree
            tree={this.state.tree}
            removeNode={this.removeNode}
            selectNode={this.selectNode}
          />
        </div>
        <div className={style.center}>
          {this.state.editing ? (
            <MdEditor writeText={this.writeText} />
          ) : (
            <Picker tree={this.state.tree} addNode={this.addNode} />
          )}
        </div>
        <div className={style.right}>
          <Preview tree={this.state.tree} />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { MdEditor } from "./md-editor";
import { Picker } from "./picker";
import * as style from "./style.css";
import { INode } from "./node";

interface IState {
  tree: INode[];
}

export class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { tree: [] };
  }

  public addNode = (tagName: string) => {
    const { tree } = this.state;
    const node = { tagName, contents: {} };
    this.setState({ tree: tree.concat(node) });
  };

  public render() {
    return (
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.left}>
          <Tree tree={this.state.tree} />
        </div>
        <div className={style.center}>
          {/*<MdEditor />*/}
          <Picker tree={this.state.tree} addNode={this.addNode} />
        </div>
        <div className={style.right}>
          <Preview tree={this.state.tree} />
        </div>
      </div>
    );
  }
}

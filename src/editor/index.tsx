import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { MdEditor } from "./md-editor";
import * as style from "./style.css";
import { INode } from "./tree/node";

interface IState {
  tree: INode[];
}

export class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { tree: [] };
  }

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
          <MdEditor />
        </div>
        <div className={style.right}>
          <Preview />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { MdEditor } from "./md-editor";
import * as style from "./style.css";
import { Grid } from "@material-ui/core";
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
      <div className={style.root}>
        <Header />
        <Grid container spacing={16}>
          <Grid item xs={2}>
            <Tree tree={this.state.tree} />
          </Grid>
          <Grid item xs={5}>
            <MdEditor />
          </Grid>
          <Grid item xs={5}>
            {/*<Preview />*/}
          </Grid>
        </Grid>
      </div>
    );
  }
}

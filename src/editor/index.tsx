import React, { Component } from "react";
import { Header } from "./header";
import { Tree } from "./tree";
import { Preview } from "./preview";
import { Editor, EditorState } from "draft-js";
import { Grid } from "@material-ui/core";
import { INode } from "./tree/node";

interface IState {
  tree: INode[];
  editor: EditorState;
}

export class App extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = { tree: [], editor: EditorState.createEmpty() };
  }

  public render() {
    return (
      <div>
        <Header />
        <Grid container spacing={16}>
          <Grid item>
            <Tree tree={this.state.tree} />
          </Grid>
          <Grid item>
            <Editor
              editorState={this.state.editor}
              onChange={this.onEditorChange}
            />
          </Grid>
          <Grid item>
            <Preview />
          </Grid>
        </Grid>
      </div>
    );
  }

  public onEditorChange(editor: EditorState) {
    this.setState({ editor });
  }
}

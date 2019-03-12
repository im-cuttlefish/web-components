import React, { Component } from "react";
import { Editor, EditorState } from "draft-js";

interface IState {
  editorState: EditorState;
}

export class MdEditor extends Component<{}, IState> {
  public onChange: (x: EditorState) => void;

  constructor(props: {}) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState: EditorState) =>
      this.setState({ editorState });
  }

  public render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

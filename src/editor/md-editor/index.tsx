import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Editor, EditorState, ContentBlock } from "draft-js";
import * as style from "./style.css";

interface IState {
  editorState: EditorState;
}

const styleBlock = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType();
};

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
      <div className={style.container}>
        <div>
          <Button>タイトル</Button>
        </div>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

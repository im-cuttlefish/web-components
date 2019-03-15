import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Editor, EditorState, ContentBlock, RichUtils } from "draft-js";
import * as style from "./style.css";

interface IState {
  editorState: EditorState;
}

const styleBlock = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType();
};

export class MdEditor extends Component<{}, IState> {
  public onChange: (x: EditorState) => void;
  public toggleTitle: () => void;

  constructor(props: {}) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };

    this.onChange = (editorState: EditorState) => {
      this.setState({ editorState });
    };

    this.toggleTitle = () => {
      this.onChange(
        RichUtils.toggleInlineStyle(this.state.editorState, "BOLD")
      );
    };
  }

  public render() {
    return (
      <div className={style.container}>
        <div>
          <Button onClick={this.toggleTitle}>タイトル</Button>
        </div>
        <div className={style.editor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

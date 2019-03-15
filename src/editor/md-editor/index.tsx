import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { Editor, EditorState, ContentBlock, RichUtils } from "draft-js";
import * as style from "./style.css";

interface IState {
  editorState: EditorState;
}

export class MdEditor extends Component<{}, IState> {
  private domEditor?: Editor;

  constructor(props: {}) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
  }

  public setDOMEditorRef = (ref: Editor) => {
    this.domEditor = ref;
  };

  public onChange = (editorState: EditorState) => {
    this.setState(() => ({ editorState }));
  };

  public focusEditor = () => {
    this.domEditor!.focus();
  };

  public toTitle = () => {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "header-two")
    );
  };

  public styleBlock = (type: string) => {
    return () => {
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
    };
  };

  public render() {
    return (
      <div className={style.container}>
        <div className={style.buttons}>
          <Button onClick={this.styleBlock("header-two")} variant="outlined">
            タイトル
          </Button>
          <Button onClick={this.styleBlock("header-three")} variant="outlined">
            サブタイトル
          </Button>
        </div>
        <div onClick={this.focusEditor}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            ref={this.setDOMEditorRef}
          />
        </div>
      </div>
    );
  }
}

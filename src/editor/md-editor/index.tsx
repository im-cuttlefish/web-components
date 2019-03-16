import React, { Component, MouseEvent } from "react";
import { Button } from "@material-ui/core";
import * as style from "./style.css";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";

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

  public styleBlock = (type: string) => {
    return (event: MouseEvent) => {
      this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
      event.preventDefault();
    };
  };

  public render() {
    return (
      <div className={style.container}>
        <div className={style.buttons}>
          <Button
            onMouseDown={this.styleBlock("header-two")}
            variant="outlined"
          >
            タイトル
          </Button>
          <Button
            onMouseDown={this.styleBlock("header-three")}
            variant="outlined"
          >
            サブタイトル
          </Button>
          <FormatListNumbered
            onMouseDown={this.styleBlock("ordered-list-item")}
          />
        </div>
        <div className={style.editorWrapper} onClick={this.focusEditor}>
          <div className={style.editor}>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              keyBindingFn={getDefaultKeyBinding}
              ref={this.setDOMEditorRef}
            />
          </div>
        </div>
      </div>
    );
  }
}

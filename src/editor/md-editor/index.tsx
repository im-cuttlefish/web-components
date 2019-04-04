import React, { Component, MouseEvent } from "react";
import { Button, IconButton } from "@material-ui/core";
import * as style from "./style.css";
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from "draft-js";
import { stateFromHTML } from "draft-js-import-html";
import { stateToHTML } from "draft-js-export-html";
import {
  FormatListNumbered,
  FormatClear,
  FormatListBulleted,
  Close
} from "@material-ui/icons";

interface IProps {
  text: string;
  stopEditing: () => void;
  writeText: (text: string) => void;
}

interface IState {
  editorState: EditorState;
}

export class MdEditor extends Component<IProps, IState> {
  private domEditor?: Editor;

  constructor(props: IProps) {
    super(props);
    const content = stateFromHTML(props.text);
    this.state = { editorState: EditorState.createWithContent(content) };
  }

  public setDOMEditorRef = (ref: Editor) => {
    this.domEditor = ref;
  };

  public onChange = (editorState: EditorState) => {
    const state = editorState.getCurrentContent();
    this.props.writeText(stateToHTML(state));
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
        <div onClick={this.props.stopEditing} className={style.close}>
          <IconButton>
            <Close />
          </IconButton>
        </div>
        <div className={style.buttons}>
          <Button onMouseDown={this.styleBlock("header-two")}>タイトル</Button>
          <Button onMouseDown={this.styleBlock("header-three")}>
            サブタイトル
          </Button>
          <IconButton>
            <FormatListNumbered
              onMouseDown={this.styleBlock("ordered-list-item")}
            />
          </IconButton>
          <IconButton>
            <FormatListBulleted
              onMouseDown={this.styleBlock("unordered-list-item")}
            />
          </IconButton>
          <IconButton>
            <FormatClear onMouseDown={this.styleBlock("unstyled")} />
          </IconButton>
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

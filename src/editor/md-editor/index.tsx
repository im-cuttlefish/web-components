import React, { Component, ChangeEvent } from "react";
import * as style from "./style.css";

interface IProps {
  text: string;
  stopEditing: () => void;
  writeText: (text: string) => void;
}

interface IState {}

export class MdEditor extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  public writeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.props.writeText(event.target.value);
  };

  public render() {
    const { text } = this.props;

    return (
      <div className={style.container}>
        <textarea
          onChange={this.writeText}
          value={text}
          placeholder="Markdownを入力してください"
          className={style.editor}
        />
      </div>
    );
  }
}

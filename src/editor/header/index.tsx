import React, { Component } from "react";
import * as style from "./style.css";

export class Header extends Component {
  public render() {
    return (
      <header className={style.header}>
        <h1>Pera Designer (Beta)</h1>
      </header>
    );
  }
}

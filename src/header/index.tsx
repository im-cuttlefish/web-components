import React from "react";
import { Builder } from "../builder";
import * as style from "./style.css";
import { INode } from "../node";

interface IProps {
  tree: INode[];
}

export const Header = ({ tree }: IProps) => (
  <header className={style.header}>
    <h1>Pera Designer (Beta)</h1>
    <Builder tree={tree} />
  </header>
);

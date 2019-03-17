import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import { INode } from "../node";

interface IProps {
  tree: INode[];
}

export class Tree extends Component<IProps> {
  public render() {
    return (
      <Card>
        <CardContent>Wood</CardContent>
      </Card>
    );
  }
}

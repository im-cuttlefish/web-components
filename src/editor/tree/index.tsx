import React, { Component } from "react";
import { Card, CardContent } from "@material-ui/core";
import { INode } from "../node";

interface IProps {
  tree: INode[];
}

export class Tree extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { tree } = this.props;

    return (
      <>
        {tree.map(node => (
          <Card>
            <CardContent>{node.component.name}</CardContent>
          </Card>
        ))}
      </>
    );
  }
}

import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
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
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              {node.component.name}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>aaaaa</ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </>
    );
  }
}

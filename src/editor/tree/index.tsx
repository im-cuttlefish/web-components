import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  IconButton
} from "@material-ui/core";
import { ExpandMore, Delete } from "@material-ui/icons";
import { INode } from "../node";

interface IProps {
  tree: INode[];
  removeNode: (index: number) => void;
}

export class Tree extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { tree } = this.props;

    return (
      <>
        {tree.map((node, index) => {
          const { component } = node;
          const { name, slot } = component;
          return (
            <ExpansionPanel key={index}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                {name}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>aaaaaa</ExpansionPanelDetails>
              <ExpansionPanelActions>
                {/* tslint:disable-next-line: jsx-no-lambda */}
                <IconButton onClick={() => this.props.removeNode(index)}>
                  <Delete />
                </IconButton>
              </ExpansionPanelActions>
            </ExpansionPanel>
          );
        })}
      </>
    );
  }
}

import React, { Component } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { ExpandMore, Delete, Edit } from "@material-ui/icons";
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
          const slots = Object.entries(slot);

          return (
            <ExpansionPanel key={index}>
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                {name}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List>
                  {slots.map((value, _index) => {
                    const [attribute, [description, type]] = value;
                    return (
                      <ListItem button key={_index}>
                        <ListItemIcon>
                          <Edit />
                        </ListItemIcon>
                        <ListItemText inset primary={description} />
                      </ListItem>
                    );
                  })}
                </List>
              </ExpansionPanelDetails>
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

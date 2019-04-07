import React from "react";
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
import { Node } from "../node";

interface IProps {
  tree: Node[];
  removeNode: (index: number) => void;
  selectNode: (index: number, name: string) => void;
}

export const Tree = ({ tree, removeNode, selectNode }: IProps) => {
  return (
    <>
      {tree.map((node, target) => {
        const { component } = node;
        const { name, slot } = component;
        const slots = Object.entries(slot);

        return (
          <ExpansionPanel key={target}>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              {name}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List>
                {slots.map((value, index) => {
                  const [attribute, [, description]] = value;
                  return (
                    <ListItem
                      onClick={() => selectNode(target, attribute)}
                      button
                      key={index}
                    >
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
              <IconButton onClick={() => removeNode(target)}>
                <Delete />
              </IconButton>
            </ExpansionPanelActions>
          </ExpansionPanel>
        );
      })}
    </>
  );
};

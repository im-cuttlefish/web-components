import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  IconButton
} from "@material-ui/core";
import { ExpandMore, Delete } from "@material-ui/icons";
import { Node } from "../node";
import { TargetList } from "./target-list";
import { Slot } from "../../web-components/component";

interface IProps {
  tree: Node[];
  removeNode: (index: number) => void;
  editNode: (type: Slot | "style", index: number, name?: string) => void;
}

export const Tree = ({ tree, removeNode, editNode }: IProps) => {
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
              <TargetList editNode={editNode} slots={slots} target={target} />
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

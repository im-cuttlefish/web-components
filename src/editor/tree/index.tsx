import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  IconButton
} from "@material-ui/core";
import {
  ExpandMore,
  Delete,
  ArrowUpward,
  ArrowDownward
} from "@material-ui/icons";
import { INode } from "../node";
import { TargetList } from "./target-list";
import { Slot } from "../../web-components/component";

interface IProps {
  tree: INode[];
  moveNode: (index: number, direction: "up" | "down") => void;
  removeNode: (index: number) => void;
  editNode: (type: Slot | "style", index: number, name?: string) => void;
}

export const Tree = ({ tree, moveNode, removeNode, editNode }: IProps) => {
  return (
    <>
      {tree.map((node, target) => {
        const { id, component } = node;
        const { name, slot } = component;
        const slots = Object.entries(slot);

        return (
          <ExpansionPanel key={id}>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              {name}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TargetList editNode={editNode} slots={slots} target={target} />
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
              <IconButton onClick={() => moveNode(target, "up")}>
                <ArrowUpward />
              </IconButton>
              <IconButton onClick={() => moveNode(target, "down")}>
                <ArrowDownward />
              </IconButton>
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

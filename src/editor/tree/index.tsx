import React, { useState } from "react";
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
import * as style from "./style.css";

interface IProps {
  tree: INode[];
  moveNode: (index: number, direction: "up" | "down") => void;
  removeNode: (index: number) => void;
  editNode: (type: Slot | "style", index: number, name?: string) => void;
}

export const Tree = ({ tree, moveNode, removeNode, editNode }: IProps) => {
  const [selected, select] = useState("");
  const onClick = (id: string) => () => select(id);

  return (
    <div className={style.container}>
      <div className={style.scroll}>
        {tree.map((node, index) => {
          const { id, component } = node;
          const { name, slot } = component;
          const slots = Object.entries(slot);

          return (
            <ExpansionPanel
              expanded={selected === id}
              onClick={onClick(id)}
              key={id}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                {name}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <TargetList editNode={editNode} slots={slots} target={index} />
              </ExpansionPanelDetails>
              <ExpansionPanelActions>
                <IconButton onClick={() => moveNode(index, "up")}>
                  <ArrowUpward />
                </IconButton>
                <IconButton onClick={() => moveNode(index, "down")}>
                  <ArrowDownward />
                </IconButton>
                <IconButton onClick={() => removeNode(index)}>
                  <Delete />
                </IconButton>
              </ExpansionPanelActions>
            </ExpansionPanel>
          );
        })}
      </div>
    </div>
  );
};

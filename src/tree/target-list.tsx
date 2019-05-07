import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Edit, FormatPaint } from "@material-ui/icons";
import { Slot } from "../../../web-components/component";

interface IProps {
  editNode: (type: Slot | "style", index: number, name?: string) => void;
  slots: Array<[string, { type: Slot; role: string }]>;
  target: number;
}

export const TargetList = ({ editNode, slots, target }: IProps) => (
  <List>
    {slots.map((slot, key) => {
      const [attribute, { type, role }] = slot;
      return (
        <ListItem
          onClick={() => editNode(type, target, attribute)}
          button
          key={key}
        >
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          <ListItemText inset primary={role} />
        </ListItem>
      );
    })}
    <ListItem onClick={() => editNode("style", target)} button>
      <ListItemIcon>
        <FormatPaint />
      </ListItemIcon>
      <ListItemText inset primary="スタイル編集" />
    </ListItem>
  </List>
);

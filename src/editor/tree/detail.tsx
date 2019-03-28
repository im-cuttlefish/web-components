import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import { IComponent } from "../../web-components/component";

interface IProps {
  slot: IComponent["slot"];
}

export const Detail: React.FC<IProps> = props => {
  const slots = Object.entries(props.slot);
  return (
    <List>
      {slots.map((value, index) => {
        const [attribute, slot] = value;
        const [description, type] = slot;
        return (
          <ListItem button key={index}>
            <ListItemIcon>
              <Edit />
            </ListItemIcon>
            <ListItemText inset primary={description} />
          </ListItem>
        );
      })}
    </List>
  );
};

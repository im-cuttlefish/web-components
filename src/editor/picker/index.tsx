import React, { Component } from "react";
import { components } from "../../web-components";
import {
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { INode } from "../node";

interface IProps {
  tree: INode[];
  addNode: (name: string) => void;
}

interface IState {
  value: string;
  types: string[];
}

export class Picker extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const types = Object.keys(components);
    this.state = { types, value: types[0] };
  }

  public render() {
    const { addNode } = this.props;
    const { types, value } = this.state;
    return (
      <div>
        <Paper square>
          <Tabs value={value} indicatorColor="primary" textColor="primary">
            {types.map((type, key) => (
              <Tab key={key} label={type} value={type} />
            ))}
          </Tabs>
        </Paper>
        <List>
          {components[value].map((component, key) => {
            const { tagName, name, description } = component;
            return (
              <ListItem key={key}>
                <ListItemText primary={name} secondary={description} />
                <ListItemSecondaryAction>
                  {/* tslint:disable-next-line: jsx-no-lambda */}
                  <IconButton onClick={() => addNode(tagName)}>
                    <Add />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

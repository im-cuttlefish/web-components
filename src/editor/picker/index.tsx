import React, { Component, useCallback, useState } from "react";
import { components } from "../../web-components";
import { IComponent } from "../../web-components/component";
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
  addNode: (component: IComponent) => void;
}

interface IState {
  target: string;
  types: string[];
}

export class Picker extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const types = Object.keys(components);
    this.state = { types, target: types[0] };
  }

  public setTarget = (index: number) => {
    this.setState({ target: this.state.types[index] });
  };

  public render() {
    const { addNode } = this.props;
    const { types, target } = this.state;
    return (
      <div>
        <Paper square>
          <Tabs value={target} indicatorColor="primary" textColor="primary">
            {types.map((type, key) => (
              <Tab
                onClick={() => this.setTarget(key)}
                value={type}
                key={key}
                label={type}
              />
            ))}
          </Tabs>
        </Paper>
        <List>
          {components[target].map((component, key) => {
            const { name, description } = component;
            return (
              <ListItem key={key}>
                <ListItemText primary={name} secondary={description} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => addNode(component)}>
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

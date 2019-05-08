import React, { Component } from "react";
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
import { getDescriptions, IDescriptions } from "../web-components";

interface IProps {
  tree: INode[];
  addNode: (tagName: string) => void;
}

interface IState {
  loaded: boolean;
  descriptions?: IDescriptions;
  target?: string;
  types?: string[];
}

export class Picker extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { loaded: false };
    getDescriptions().then(descriptions => {
      const types = Object.keys(descriptions);
      this.setState({
        types,
        descriptions,
        loaded: true,
        target: types[0]
      });
    });
  }

  public setTarget = (index: number) => () => {
    this.setState({ target: this.state.types![index] });
  };

  public render() {
    const { addNode } = this.props;
    const { types, target, loaded, descriptions } = this.state;
    return (
      loaded && (
        <div>
          <Paper square>
            <Tabs value={target} indicatorColor="primary" textColor="primary">
              {types!.map((type, key) => (
                <Tab
                  onClick={this.setTarget(key)}
                  value={type}
                  key={key}
                  label={type}
                />
              ))}
            </Tabs>
          </Paper>
          <List>
            {descriptions![target!].map((component, key) => {
              const { name, description, tagName } = component;
              return (
                <ListItem key={key}>
                  <ListItemText primary={name} secondary={description} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => addNode(tagName)}>
                      <Add />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        </div>
      )
    );
  }
}

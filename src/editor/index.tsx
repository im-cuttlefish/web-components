import React, { Component } from "react";
import { Header } from "./header";
import { Preview } from "./preview";
import { Grid } from "@material-ui/core";
import SimpleMDE from "react-simplemde-editor";

export class App extends Component {
  public render() {
    return (
      <div>
        <Header />
        <Grid container>
          <Grid item>
            <SimpleMDE options={{ spellChecker: false }} />
          </Grid>
          <Grid item>
            <Preview />
          </Grid>
        </Grid>
      </div>
    );
  }
}

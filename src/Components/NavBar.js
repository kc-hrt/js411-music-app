import React from "react";
import "../App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class NavBar extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Music App for JS411</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

export default class Login extends Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={this.props.handleLogin}>
          <TextField
            id="standard-basic"
            label="Username*"
            style={{ width: "250px" }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Password*"
            style={{ width: "250px" }}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: "30px", width: "250px" }}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

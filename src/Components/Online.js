import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Switch,
} from "@material-ui/core";

export default class Article extends React.Component {
  render() {
    return (
      <Card
        style={{
          padding: "20px",
          height: "200px",
          width: "200px",
          boxShadow: "5px 5px 15px #c0c0c0",
          margin: "0px 15px 0px 15px",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Online Mode
          </Typography>
          <Typography color="textSecondary" style={{ fontSize: "14px" }}>
            Is this application connected to the internet?
          </Typography>
        </CardContent>

        <CardActions>
          <Switch
            checked={this.props.isOnline}
            onChange={this.props.handleSwitch}
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </CardActions>
      </Card>
    );
  }
}

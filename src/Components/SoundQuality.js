import React from 'react';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { FormControl, Select, MenuItem } from '@material-ui/core';

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
        }}>

        <CardContent>
          <Typography variant="h5" component="h2">
            Sound Quality
          </Typography>
          <Typography color="textSecondary" style={{fontSize: "14px"}}>
            Manually control the music quality in event of poor connection
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl style={{ width: "180px" }}>
            <Select
              defaultValue={2}
              onChange={this.props.handleSelect}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </CardActions>
      </Card>
  )}
}
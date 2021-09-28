import React from 'react';
import { Card, CardActions, CardContent, Typography, Slider } from '@material-ui/core';

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
            Master Volume
          </Typography>
          <Typography color="textSecondary" style={{fontSize: "14px"}}>
            Overrides all other sound settings in this application
          </Typography>
        </CardContent>
        <CardActions>
          <Slider
          defaultValue={20}
          onChange={this.props.handleSlider}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
          />
        </CardActions>
      </Card>
  )}
}


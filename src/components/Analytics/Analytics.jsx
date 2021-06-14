import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import { Devices, Visits } from "./components";

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={4}>
        <Devices />
        <Visits />
      </Grid>
    );
  }
}

export default Analytics;

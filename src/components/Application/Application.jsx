import React, { Component } from "react";
// Local Component
import { Totals, ChartRow, Table, Conversions } from "./components";
// Material-UI Core Component
import { Grid } from "@material-ui/core";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { classes } = this.props;
    return (
      <div className="Application">
        <Grid container spacing={4}>
          <Totals />
          <ChartRow />
          <Table />
          <Conversions />
        </Grid>
      </div>
    );
  }
}

export default Application;

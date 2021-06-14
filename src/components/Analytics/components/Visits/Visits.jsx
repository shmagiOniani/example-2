import React, { Component } from "react";
// Material-ui Components
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
// harts
import MixedChart from "../../../charts/MixedChart";
// styles
import { styles } from "./VisitsStyles";

class Visits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid item xs={12} md={8}>
          <Paper className={classes.paper} elevation={4}>
            <MixedChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper} elevation={4}></Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Visits);

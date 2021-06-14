import React, { Component } from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

class PermissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };
  render() {
    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Active" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </Paper>
    );
  }
}

export default PermissionForm;

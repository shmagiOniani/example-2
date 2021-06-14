import React, { Component } from "react";

const Device = React.createContext();
export const DeviceConsumer = Device.Consumer;

export class DeviceProvider extends Component {
  state = {
    errors: [
      {
        id: 1,
        name: "error name",
        content: "some text about an error",
      },
    ],
    checkList: [
      {
        id: 1,
        name: "list name",
        content: "some text about  list",
      },
    ],
    reports: [
      {
        id: 1,
        name: "report name",
        content: "some text about  report",
      },
    ],
  };

  setError = () => {
    console.log("error");
  };

  render() {
    const { errors, checkList, reports } = this.state;
    const { setError } = this;
    return (
      <Device.Provider value={{ errors, checkList, reports, setError }}>
        {this.props.children}
      </Device.Provider>
    );
  }
}

export default Device;

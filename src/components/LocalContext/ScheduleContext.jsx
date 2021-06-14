import React, { Component } from "react";
import { deviceTypes } from "../../assets/dataImitators/deviceTypes";

const ScheduleContext = React.createContext();
export const ScheduleConsumer = ScheduleContext.Consumer;

export class ScheduleProvider extends Component {
  state = {
    time: "",
    days: [],
    selectedDeviceType: "",
    filteredType: [],
    gateway: "",
    devices: [],
    parameters: [],
    submit: false,
  };

  setTime = (newVar) => {
    this.setState({
      time: { newVar },
    });
  };

  setDay = (item) => {
    this.setState({ days: item });
  };

  setSelectedDeviceType = (item) => {
    const data = deviceTypes.find((value) => value.name === item);
    this.setState({ selectedDeviceType: data });
  };

  updateSelectedDeviceType = (data) => {
    this.setState({ selectedDeviceType: data });
  };

  setGateway = (item) => {
    this.setState({ gateway: item });
  };

  setDevice = (item) => {
    this.setState({ devices: item });
  };

  setParameters = (data) => {
    this.setState({ parameters: data });
    this.setState({ submit: false });
  };

  setSubmit = () => {
    this.setState({ submit: !this.state.submit });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gateway !== this.state.gateway) {
      const type = this.state.selectedDeviceType;
      const gateway = this.state.gateway;
      const deviceArr = [];
      gateway.device.map((item) => deviceArr.push(item));
      const filteredDevices = deviceArr.filter(
        (item) => item.type === type.name
      );
      // console.log(type, gateway, deviceArr, "deviceArr", filteredDevices);
      this.setState({ filteredType: filteredDevices });
      console.log(filteredDevices);
    }
  }

  render() {
    const {
      time,
      days,
      selectedDeviceType,
      devices,
      gateway,
      filteredType,
      parameters,
      submit,
    } = this.state;
    const {
      setTime,
      setDay,
      setSelectedDeviceType,
      updateSelectedDeviceType,
      setDevice,
      setGateway,
      setParameters,
      setSubmit,
    } = this;
    return (
      <ScheduleContext.Provider
        value={{
          time,
          days,
          selectedDeviceType,
          devices,
          gateway,
          filteredType,
          parameters,
          submit,
          setTime,
          setDay,
          setSelectedDeviceType,
          updateSelectedDeviceType,
          setDevice,
          setGateway,
          setParameters,
          setSubmit,
        }}
      >
        {this.props.children}
      </ScheduleContext.Provider>
    );
  }
}

export default ScheduleContext;

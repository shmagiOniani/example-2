import React, { Component } from "react";
import { gatewayData } from "../../assets/dataImitators/gatewayData";

const DeviceGroup = React.createContext();
export const DeviceGroupConsumer = DeviceGroup.Consumer;

export class DeviceGroupProvider extends Component {
  state = {
    groups: [],
    groupsContent: [],
  };

  setGroups = (item) => {
    this.setState({ groups: item });
  };

  setGroupsContent = (item) => {
    const selectedDevice = this.state.groups.find((x) => x.name === item);
    const deviceData = [];
    gatewayData.map((item) => deviceData.push(...item.device));
    const newData = selectedDevice.model.map((item) =>
      deviceData.find((x) => x.id === item)
    );
    // const newData = gatewayData.filter((x) => x.model === "d-34845");
    this.setState({ groupsContent: newData });
    // models.forEach((element) => x.model === element)
    // this.setState({});
    console.log(selectedDevice, this.state.groups, newData);
  };

  deleteGroup = (name) => {
    const newData = this.state.groups.filter((item) => item.name !== name);
    this.setState({ groups: newData });
    console.log(this.state.groups, this.state.groupsContent, name);
  };

  render() {
    const { groups, groupsContent } = this.state;
    const { setGroups, setGroupsContent, deleteGroup } = this;
    return (
      <DeviceGroup.Provider
        value={{
          groups,
          groupsContent,
          setGroups,
          setGroupsContent,
          deleteGroup,
        }}
      >
        {this.props.children}
      </DeviceGroup.Provider>
    );
  }
}

export default DeviceGroup;

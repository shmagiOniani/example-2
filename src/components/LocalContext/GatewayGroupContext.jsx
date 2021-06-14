import React, { Component } from "react";
import { gatewayData } from "../../assets/dataImitators/gatewayData";

const GatewayGroup = React.createContext();
export const GatewayGroupConsumer = GatewayGroup.Consumer;

export class GatewayGroupProvider extends Component {
  state = {
    groups: [],
    groupsContent: [],
  };

  setGroups = (item) => {
    this.setState({ groups: item });
  };

  setGroupsContent = (item) => {
    const selectedGroup = this.state.groups.find((x) => x.name === item);
    const newData = selectedGroup.model.map((item) => {
      return gatewayData.find((x) => item === x.model);
    });
    this.setState({ groupsContent: newData });
    console.log(newData);
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
      <GatewayGroup.Provider
        value={{
          groups,
          groupsContent,
          setGroups,
          setGroupsContent,
          deleteGroup,
        }}
      >
        {this.props.children}
      </GatewayGroup.Provider>
    );
  }
}

export default GatewayGroup;

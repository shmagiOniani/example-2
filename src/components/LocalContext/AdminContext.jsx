import React, { Component } from "react";
import {
  usersData,
  usersFullData,
} from "../../assets/dataImitators/adminPanelData/usersData";
import { userAddInputTypes } from "../../assets/dataImitators/adminPanelData/userAddInputTypes";
import { userEditInputTypes } from "../../assets/dataImitators/adminPanelData/userEditInputTypes";
import {
  permissionData,
  permissionList,
} from "../../assets/dataImitators/adminPanelData/userPermissions";
import { deviceTypesData } from "../../assets/dataImitators/adminPanelData/userDeviceTypesData";

const Admin = React.createContext();
export const AdminConsumer = Admin.Consumer;

export class AdminProvider extends Component {
  state = {
    // user Table and addForm
    usersData: usersData,
    userId: "Asdasd",
    usersFullData: usersFullData,
    userAddInputTypes: userAddInputTypes,
    userEditInputTypes: userEditInputTypes,
    // permission Table
    permissionData: permissionData,
    permissionList: permissionList,
    // device Table
    deviceTypesData: deviceTypesData,
  };
  // User Table Methods
  setData = (data) => {
    const newData = [
      data.firstname,
      data.lastname,
      data.personalId,
      data.email,
      data.mobile,
      "",
      false,
    ];
    this.setState({ usersData: [...this.state.usersData, newData] });
    console.log("setData");
  };
  updateData = () => {
    console.log("updateData");
  };
  deleteData = () => {
    console.log("deleteData");
  };
  // Permissions Table methods
  addPermission = (newData) => {
    this.setState({ permissionData: [...this.state.permissionData, newData] });
    console.log(newData);
  };
  updatePermission = (newData, oldData) => {
    const dataUpdate = [...this.state.permissionData];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    this.setState({ permissionData: [...dataUpdate] });
    console.log(newData, oldData);
  };
  deletePermission = (oldData) => {
    console.log(oldData);
    const dataDelete = [...this.state.permissionData];
    const index = oldData.tableData.id;
    dataDelete.splice(index, 1);
    this.setState({ permissionData: [...dataDelete] });
  };
  // DeviceTypes Table methods
  addDeviceType = (newData) => {
    console.log(newData);
    this.setState({
      deviceTypesData: [...this.state.deviceTypesData, newData],
    });
  };
  updateDeviceType = (newData, oldData) => {
    console.log(newData, oldData);
    const dataUpdate = [...this.state.deviceTypesData];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    this.setState({ deviceTypesData: [...dataUpdate] });
  };
  deleteDeviceType = (oldData) => {
    console.log(oldData);
    const dataDelete = [...this.state.deviceTypesData];
    const index = oldData.tableData.id;
    dataDelete.splice(index, 1);
    this.setState({ deviceTypesData: [...dataDelete] });
  };
  // Render Method
  render() {
    const {
      usersData,
      userId,
      usersFullData,
      userAddInputTypes,
      userEditInputTypes,
      permissionData,
      permissionList,
      deviceTypesData,
    } = this.state;
    const {
      setData,
      updateData,
      deleteData,
      updatePermission,
      deletePermission,
      addPermission,
      addDeviceType,
      updateDeviceType,
      deleteDeviceType,
    } = this;
    return (
      <Admin.Provider
        value={{
          usersData,
          userId,
          usersFullData,
          userAddInputTypes,
          userEditInputTypes,
          permissionData,
          permissionList,
          deviceTypesData,
          setData,
          updateData,
          deleteData,
          addPermission,
          updatePermission,
          deletePermission,
          addDeviceType,
          updateDeviceType,
          deleteDeviceType,
        }}
      >
        {this.props.children}
      </Admin.Provider>
    );
  }
}

export default Admin;

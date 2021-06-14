import React, { Component } from "react";
import MaterialTable from "material-table";

// Select Components
// Context
import { AdminConsumer } from "../../../LocalContext/AdminContext";

//

class DeviceTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      columns: [
        {
          title: "ტიპი",
          field: "type",
        },
        {
          title: "დასახელება",
          field: "name",
        },
      ],
    };
  }

  render() {
    return (
      <AdminConsumer>
        {(props) => {
          const {
            deviceTypesData,
            addDeviceType,
            updateDeviceType,
            deleteDeviceType,
          } = props;
          return (
            <div style={{ maxWidth: "100%" }}>
              <MaterialTable
                title="მოწყობილობის ტიპები"
                columns={this.state.columns}
                data={deviceTypesData}
                options={{
                  actionsColumnIndex: -1,
                }}
                editable={{
                  isEditable: (rowData) => rowData.name,
                  onRowAdd: (newData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        addDeviceType(newData);
                        resolve();
                      }, 1000);
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        updateDeviceType(newData, oldData);
                        resolve();
                      }, 1000);
                    }),
                  onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        deleteDeviceType(oldData);

                        resolve();
                      }, 1000);
                    }),
                }}
              />
            </div>
          );
        }}
      </AdminConsumer>
    );
  }
}

export default DeviceTypes;

import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
// Material-Ui Components
import {
  withStyles,
  Tooltip,
  IconButton,
  Fab,
  Collapse,
} from "@material-ui/core";
// Material-Ui Icons
import { PersonAdd } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
// Context
import { AdminConsumer } from "../../../LocalContext/AdminContext";
// Local Components
import {
  CustomToolbarSelect,
  PermissionsData,
  AddForm,
  ShowForm,
  EditForm,
} from "./components";
// Styles
import { Styles } from "./Styles";
import { usersFullData } from "../../../../assets/dataImitators/adminPanelData/usersData";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableOpen: true,
      AddFormOpen: false,
      ShowFormOpen: false,
      EditFormOpen: false,
      ShowFormData: {},
    };
  }
  render() {
    const columns = [
      {
        name: "სახელი",
        options: {
          filter: true,
        },
      },
      {
        name: "გვარი",
        options: {
          filter: true,
        },
      },
      {
        name: "პირადი ნომერი",
        options: {
          filter: true,
        },
      },
      {
        name: "ელ.ფოსტა",
        options: {
          filter: true,
        },
      },
      {
        name: "ტელეფონი",
        options: {
          filter: true,
        },
      },

      {
        name: "როლები",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <React.Fragment>
                <PermissionsData
                  value={value}
                  index={tableMeta.columnIndex}
                  change={(event) => updateValue(event)}
                />
                {/* <button onClick={() => console.log(value)}>check</button> */}
              </React.Fragment>
            );
          },
        },
      },
      {
        name: "დეტალები",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div className={this.props.classes.tableActionSection}>
                <Tooltip
                  title="see-details"
                  onClick={() => {
                    const data = usersFullData.find(
                      (item) => item.personalId === tableMeta.rowData[2]
                    );
                    this.setState({
                      ShowFormData: data,
                      tableOpen: false,
                      ShowFormOpen: true,
                    });
                  }}
                >
                  <IconButton aria-label="ნახვა">
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="edit-details"
                  onClick={() => {
                    const data = usersFullData.find(
                      (item) => item.personalId === tableMeta.rowData[2]
                    );
                    this.setState({
                      ShowFormData: data,
                      tableOpen: false,
                      EditFormOpen: true,
                    });
                  }}
                >
                  <IconButton aria-label="ჩასწორება">
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              </div>
            );
          },
        },
      },
    ];

    const AddButton = () => (
      <Tooltip disableFocusListener title="Add User">
        <IconButton
          onClick={() =>
            this.setState({
              tableOpen: false,
              AddFormOpen: true,
            })
          }
        >
          <PersonAdd />
        </IconButton>
      </Tooltip>
    );

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "vertical",
      customToolbar: AddButton,

      draggableColumns: {
        enabled: true,
      },
      customToolbarSelect: (selectedRows) => (
        <CustomToolbarSelect
          onClick={(e) => console.log("select", e.target.name)}
          selectedRows={selectedRows}
          onRowsDelete={console.log("delete")}
        />
      ),
    };

    return (
      <AdminConsumer>
        {(props) => {
          const { usersData } = props;
          return (
            <React.Fragment>
              <Collapse in={this.state.tableOpen}>
                <MUIDataTable
                  title={"პირადი მონაცემები"}
                  data={usersData}
                  columns={columns}
                  options={options}
                />
              </Collapse>
              {/* add form collapse */}
              <Collapse
                in={this.state.AddFormOpen}
                className={this.props.classes.closeIcon}
              >
                <Fab
                  size="medium"
                  onClick={() =>
                    this.setState({
                      tableOpen: true,
                      AddFormOpen: false,
                    })
                  }
                >
                  <ExpandMoreIcon />
                </Fab>
                <AddForm
                  status={(form, table) =>
                    this.setState({ AddFormOpen: form, tableOpen: table })
                  }
                />
              </Collapse>
              {/* show form collapse */}
              <Collapse
                in={this.state.ShowFormOpen}
                className={this.props.classes.closeIcon}
              >
                <Fab
                  size="medium"
                  onClick={() =>
                    this.setState({
                      tableOpen: true,
                      ShowFormOpen: false,
                    })
                  }
                >
                  <ExpandMoreIcon />
                </Fab>
                <ShowForm data={this.state.ShowFormData} />
              </Collapse>
              {/* edit form collapse */}
              <Collapse
                in={this.state.EditFormOpen}
                className={this.props.classes.closeIcon}
              >
                <Fab
                  size="medium"
                  onClick={() =>
                    this.setState({
                      tableOpen: true,
                      EditFormOpen: false,
                    })
                  }
                >
                  <ExpandMoreIcon />
                </Fab>
                <EditForm data={this.state.ShowFormData} />
              </Collapse>
            </React.Fragment>
          );
        }}
      </AdminConsumer>
    );
  }
}

export default withStyles(Styles)(Users);

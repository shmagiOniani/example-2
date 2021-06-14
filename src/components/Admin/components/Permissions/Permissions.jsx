import React, { Component } from "react";
import MUIDataTable, { TableFilterList } from "mui-datatables";
import {
  Chip,
  withStyles,
  Tooltip,
  IconButton,
  Collapse,
  Fab,
} from "@material-ui/core";
// Material-UI Icons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
// Context
import { AdminConsumer } from "../../../LocalContext/AdminContext";
// Local Components
import { AddForm, PermissionForm } from "./components";
// Styles
import { Styles } from "./Styles";

class Permissions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      tableOpen: true,
      addFormOpen: false,
      // copy form
      copyFormOpen: false,
      copyPermission: "",
      // edit form
      editFormOpen: false,
      editDataArr: [],
      // permissions form
      permissionFormOpen: false,
    };
  }

  handleClick = (e) => {
    this.setState({ anchorEl: e.currentTarget });
  };

  handleClose = (event) => {
    this.setState({ anchorEl: null });
  };
  render() {
    const AddButton = () => (
      <Tooltip disableFocusListener title="უფლების დამატება">
        <IconButton
          onClick={() =>
            this.setState({
              tableOpen: false,
              addFormOpen: true,
            })
          }
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    );

    const notificationColumns = [
      {
        name: "სახელი",
        options: {
          filter: true,
        },
      },
      {
        name: "აღწერა",
        options: {
          filter: false,
        },
      },
      {
        name: "უფლებები",
        options: {
          filter: false,
        },
      },
      {
        name: "შექმნის დრო",
        options: {
          filter: false,
        },
      },
      {
        name: "",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>
                <Tooltip title="უფლებების კოპირება">
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => {
                      console.log(tableMeta.rowData[2]);

                      this.setState({
                        tableOpen: false,
                        copyFormOpen: true,
                        copyPermission: tableMeta.rowData[2],
                      });
                    }}
                  >
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="შესწორება">
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => {
                      console.log(tableMeta.rowData);

                      this.setState({
                        tableOpen: false,
                        editFormOpen: true,
                        editDataArr: tableMeta.rowData,
                      });
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="უფლებები">
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => {
                      console.log(tableMeta.rowData[2]);
                      this.setState({
                        tableOpen: false,
                        permissionFormOpen: true,
                        copyPermission: tableMeta.rowData[2],
                      });
                    }}
                  >
                    <StarOutlineIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="წაშლა">
                  <IconButton
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={(e) => {
                      console.log(tableMeta.rowIndex);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </div>
            );
          },
        },
      },
    ];
    const options = {
      filterType: "dropdown",
      responsive: "vertical",
      selectableRows: "none",
      customToolbar: AddButton,
    };
    const CustomChip = ({ label, onDelete }) => {
      return (
        <Chip
          variant="outlined"
          color="primary"
          label={label}
          onDelete={onDelete}
        />
      );
    };
    const CustomFilterList = (props) => {
      return <TableFilterList {...props} ItemComponent={CustomChip} />;
    };
    return (
      <AdminConsumer>
        {(props) => {
          const { permissionData } = props;
          return (
            <div className={this.props.classes.root}>
              <button onClick={() => console.log(this.state.copyPermission)}>
                check
              </button>
              {/* tablse collapse */}
              <Collapse in={this.state.tableOpen}>
                <MUIDataTable
                  title={"უფლებათა სია"}
                  data={permissionData}
                  columns={notificationColumns}
                  options={options}
                  components={{
                    TableFilterList: CustomFilterList,
                  }}
                />
              </Collapse>
              {/* add form collapse */}
              <Collapse
                in={this.state.addFormOpen}
                className={this.props.classes.closeIcon}
              >
                <Fab
                  size="medium"
                  onClick={() =>
                    this.setState({
                      tableOpen: true,
                      addFormOpen: false,
                    })
                  }
                >
                  <ExpandMoreIcon />
                </Fab>
                <AddForm
                  status={(form, table) =>
                    this.setState({ addFormOpen: form, tableOpen: table })
                  }
                />
              </Collapse>
              {/* copy form collapse */}
              <Collapse
                in={this.state.copyFormOpen}
                className={this.props.classes.closeIcon}
              >
                <Fab
                  size="medium"
                  onClick={() =>
                    this.setState({
                      tableOpen: true,
                      copyFormOpen: false,
                    })
                  }
                >
                  <ExpandMoreIcon />
                </Fab>
                <AddForm
                  copyPermission={this.state.copyPermission}
                  status={(form, table) =>
                    this.setState({ copyFormOpen: form, tableOpen: table })
                  }
                />
              </Collapse>
              {/* edit form collapse */}
              <Collapse
                in={this.state.editFormOpen}
                className={this.props.classes.closeIcon}
              >
                <Fab
                  size="medium"
                  onClick={() =>
                    this.setState({
                      tableOpen: true,
                      editFormOpen: false,
                    })
                  }
                >
                  <ExpandMoreIcon />
                </Fab>
                <AddForm
                  editDataArr={this.state.editDataArr}
                  status={(form, table) =>
                    this.setState({ editFormOpen: form, tableOpen: table })
                  }
                />
              </Collapse>
              {/* permissions form collapse */}
              <Collapse
                in={this.state.permissionFormOpen}
                className={this.props.classes.closeIcon}
              >
                <Fab
                  size="medium"
                  onClick={() =>
                    this.setState({
                      tableOpen: true,
                      permissionFormOpen: false,
                    })
                  }
                >
                  <ExpandMoreIcon />
                </Fab>
                <PermissionForm />
              </Collapse>
            </div>
          );
        }}
      </AdminConsumer>
    );
  }
}

export default withStyles(Styles)(Permissions);

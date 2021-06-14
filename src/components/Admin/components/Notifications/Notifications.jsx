import React, { Component } from "react";
import clsx from "clsx";

import MUIDataTable, { TableFilterList } from "mui-datatables";
import {
  Paper,
  Chip,
  withStyles,
  Tooltip,
  IconButton,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  MenuItem,
  Fab,
} from "@material-ui/core";
import { notificationData } from "../../../../assets/dataImitators/adminPanelData/notificationData.js";
// Material-UI Icons
import ListIcon from "@material-ui/icons/List";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CloseIcon from "@material-ui/icons/Close";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import NavigationIcon from "@material-ui/icons/Navigation";
import AddIcon from "@material-ui/icons/Add";
// Styles
import { Styles } from "./Styles";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      gateway: "",
      device: "",
      type: "binary",
    };
  }

  handleChangeType = (event) => {
    this.setState({ type: event.target.value });
  };
  render() {
    const notificationColumns = [
      {
        name: "ქმედებები",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div className={this.props.classes.tableActionSection}>
                <Tooltip
                  title="დეტალურად ნახვა"
                  onClick={() => {
                    console.log("დეტალურად");
                  }}
                >
                  <IconButton aria-label="ნახვა">
                    <ListIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title="შეტყობინების კოპირება"
                  onClick={() => {
                    navigator.clipboard.writeText(tableMeta.rowData[2]);
                  }}
                >
                  <IconButton aria-label="ჩასწორება">
                    <FileCopyIcon />
                  </IconButton>
                </Tooltip>
              </div>
            );
          },
        },
      },
      {
        name: "სახელი",
        options: {
          filter: true,
        },
      },
      {
        name: "შეტყობინება",
        options: {
          filter: false,
        },
      },
    ];
    const options = {
      filterType: "dropdown",
      responsive: "vertical",
      selectableRows: "none",
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
      <div className={this.props.classes.root}>
        <MUIDataTable
          title={"ცვლილება შეუძლებელია"}
          data={notificationData}
          columns={notificationColumns}
          options={options}
          components={{
            TableFilterList: CustomFilterList,
          }}
        />
        <Paper
          elevation={4}
          className={clsx(
            this.state.formOpen
              ? this.props.classes.formActive
              : this.props.classes.formContainer,
            this.state.type === "visual" ? this.props.classes.fullWidth : ""
          )}
        >
          <Fab color="primary" aria-label="add">
            <AddIcon
              className={this.props.classes.addIcon}
              onClick={() => {
                this.setState({ formOpen: true });
                console.log("turnt");
              }}
            />
          </Fab>
          <form className={this.props.classes.form}>
            <div>
              <div className={this.props.classes.radioForm}>
                <RadioGroup
                  name="type1"
                  value={this.state.type}
                  onChange={this.handleChangeType}
                >
                  <FormControlLabel
                    value="binary"
                    control={<Radio color="primary" />}
                    label="binary"
                  />
                  <FormControlLabel
                    value="visual"
                    control={<Radio color="primary" />}
                    label="visual"
                  />
                </RadioGroup>
              </div>
              <div className={this.props.classes.selectForms}>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  id="filled-select-currency"
                  select
                  label="გეითვეი"
                  value={this.state.gateway}
                  onChange={(e) => this.setState({ gateway: e.target.value })}
                >
                  <MenuItem value={"option.value"}>{"option.label"}</MenuItem>
                </TextField>
                <TextField
                  size="small"
                  fullWidth
                  variant="outlined"
                  id="filled-select-currency"
                  select
                  label="მოწყობილობა"
                  value={this.state.device}
                  onChange={(e) => this.setState({ device: e.target.value })}
                >
                  <MenuItem value={"option.value"}>{"option.label"}</MenuItem>
                </TextField>
              </div>
              {this.state.type === "binary" ? (
                <div className={this.props.classes.textfield}>
                  <TextField
                    id="outlined-multiline-static"
                    label="დაწერეთ ტექსტი"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </div>
              ) : (
                <div className={this.props.classes.textfield}>
                  <TextField
                    id="outlined-multiline-static"
                    label="დაწერეთ ტექსტი"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </div>
              )}

              <Fab variant="extended" color="primary" aria-label="add">
                <NavigationIcon />
                გაგზავნა
              </Fab>
              <Fab
                size="small"
                color="default"
                aria-label="add"
                className={this.props.classes.closeButton}
                onClick={() => {
                  this.setState({
                    formOpen: !this.state.formOpen,
                    type: "binary",
                  });
                  console.log("saddsdad", this.state.formOpen);
                }}
              >
                <CloseIcon />
              </Fab>
            </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(Styles)(Notifications);

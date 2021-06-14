import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarSelectStyles = {};

class CustomToolbarSelect extends React.Component {
  handleClick = () => {
    console.log("click! current selected rows", this.props.selectedRows);
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={"custom-toolbar-select container"}>
        <Tooltip title={"icon 2"}>
          <IconButton className={classes.filterIcon} onClick={this.handleClick}>
            <FilterIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={"icon 1"}>
          <IconButton className={classes.deleteIcon} onClick={this.handleClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, {
  name: "CustomToolbarSelect",
})(CustomToolbarSelect);

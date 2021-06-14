import React from "react";
// React Router
import { Link } from "react-router-dom";
// CLSX
import clsx from "clsx";
// Material-ui Core Components
import {
  Menu,
  MenuItem,
  Typography,
  Box,
  Paper,
  Button,
  IconButton,
} from "@material-ui/core";
// Material-UI Icons
import DnsIcon from "@material-ui/icons/Dns";
import EditIcon from "@material-ui/icons/Edit";
import LoopIcon from "@material-ui/icons/Loop";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AdbIcon from "@material-ui/icons/Adb";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import TuneIcon from "@material-ui/icons/Tune";
// Styles
import { Styles } from "./Styles";
// Local Chart
import InsideTextChart from "../../charts/InsideTextChart";

function Gateway(props) {
  const classes = Styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Paper className={classes.paper} elevation={3}>
      <FiberManualRecordIcon
        className={clsx({
          [classes.active]: props.status === 1,
          [classes.status]: true,
        })}
      />
      <Box
        className={clsx({
          [classes.hide]: props.setting === false,
        })}
      >
        <IconButton
          color="primary"
          component="span"
          className={classes.setting}
          onClick={handleClick}
        >
          <TuneIcon />
        </IconButton>
        <Menu
          id="gateway-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={classes.gatewayMenu}
        >
          <Link to={`/Device/Device/${props.model}`} className={classes.link}>
            <MenuItem
              // onClick={handleClose}
              className={classes.gatewayMenuList}
            >
              <DnsIcon />
              მოწყობილობები
            </MenuItem>
          </Link>
          <Link to={`/Device/Device/${props.model}`} className={classes.link}>
            <MenuItem onClick={handleClose} className={classes.gatewayMenuList}>
              <EditIcon />
              რედაქტირება
            </MenuItem>
          </Link>

          <Link to={`/Device/Device/${props.model}`} className={classes.link}>
            <MenuItem onClick={handleClose} className={classes.gatewayMenuList}>
              <LoopIcon />
              ჩანაცვლება
            </MenuItem>
          </Link>
          <Link to={`/Device/Device/${props.model}`} className={classes.link}>
            <MenuItem onClick={handleClose} className={classes.gatewayMenuList}>
              <LocationOnIcon />
              რუკაზე ნახვა
            </MenuItem>
          </Link>
          <MenuItem onClick={handleClose} className={classes.gatewayMenuList}>
            <DeleteOutlineIcon />
            წაშლა
          </MenuItem>

          <MenuItem onClick={handleClose} className={classes.gatewayMenuList}>
            <HighlightOffIcon />
            ფორს.წაშლა
          </MenuItem>
        </Menu>
      </Box>
      <div>
        <Typography variant="h6">{props.label}</Typography>
        <Typography variant="body2">მოდელი: {props.model}</Typography>
        <div className={classes.chartDiv}>
          <InsideTextChart className={classes.chart} />
        </div>
        <Link to={"/Device/Gateway"} className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AdbIcon />}
            fullWidth
          >
            სიმულატორი
          </Button>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ErrorOutlineIcon />}
          fullWidth
          className={classes.button}
        >
          ხარვეზები
        </Button>
      </div>
    </Paper>
  );
}

export default Gateway;

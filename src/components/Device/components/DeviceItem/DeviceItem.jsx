import React, { useState } from "react";
import { Styles } from "./Styles";
// Material-UI Core Components
import {
  Grid,
  Paper,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Fab,
  Tooltip,
} from "@material-ui/core";
// Material-UI Icons
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import RoomIcon from "@material-ui/icons/Room";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ToysIcon from "@material-ui/icons/Toys";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import TuneIcon from "@material-ui/icons/Tune";

function DeviceItem(props) {
  const classes = Styles();

  const [deviceAnchorEl, setDeviceAnchorEl] = useState(null);

  const handleSettingClick = (event) => {
    setDeviceAnchorEl(event.currentTarget);
  };
  const handleSettingClose = () => {
    setDeviceAnchorEl(null);
  };
  return (
    <Paper elevation={4} className={classes.cardPaper}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.deviceContainer}
      >
        <Grid item xs={8}></Grid>
        <Grid item xs={4} className={classes.sectionGrid}>
          {/* header setting start */}
          <Box>
            <IconButton
              color="primary"
              component="span"
              className={classes.setting}
              onClick={handleSettingClick}
            >
              <TuneIcon />
            </IconButton>
            <Menu
              id="gateway-menu"
              anchorEl={deviceAnchorEl}
              keepMounted
              open={Boolean(deviceAnchorEl)}
              onClose={handleSettingClose}
              className={classes.gatewayMenu}
            >
              <MenuItem
                onClick={handleSettingClose}
                className={classes.gatewayMenuList}
              >
                <EditIcon />
                რედაქტირება
              </MenuItem>

              <MenuItem
                onClick={handleSettingClose}
                className={classes.gatewayMenuList}
              >
                <DeleteOutlineIcon />
                წაშლა
              </MenuItem>

              <MenuItem
                onClick={handleSettingClose}
                className={classes.gatewayMenuList}
              >
                <HighlightOffIcon />
                დეატივაცია
              </MenuItem>
            </Menu>
          </Box>
          {/* header setting end */}
        </Grid>
        <Grid item xs={12} className={classes.deviceHeader}>
          {/* variable name and type */}
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="body2">{props.type}</Typography>
        </Grid>
        <Grid item xs={12}>
          {/* variable value */}
          <Typography variant="body2" className={classes.temperature}>
            {props.value}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {/* modes start */}
          <AcUnitIcon />
          <WbSunnyIcon />
          <ToysIcon />
          <PowerSettingsNewIcon />
        </Grid>
        <Grid item xs={12}>
          {/* info / location / errors */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={4}>
              <Tooltip title="info" arrow>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  className={classes.infoIcon}
                >
                  <ContactSupportIcon />
                </Fab>
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="location" arrow>
                <Fab size="small" color="primary" aria-label="add">
                  <RoomIcon />
                </Fab>
              </Tooltip>
            </Grid>
            <Grid item xs={4}>
              <Tooltip title="errors" arrow>
                <Fab size="small" color="secondary" aria-label="add">
                  <ErrorOutlineIcon />
                </Fab>
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DeviceItem;

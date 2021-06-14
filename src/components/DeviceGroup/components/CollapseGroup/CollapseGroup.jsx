import React from "react";
// Maetrial-Ui core View
import {
  Fab,
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
} from "@material-ui/core";
// Material-Ui icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import TuneIcon from "@material-ui/icons/Tune";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DeleteIcon from "@material-ui/icons/Delete";
// Context Component
import { DeviceGroupConsumer } from "../../../LocalContext/DeviceGroupContext";
// Local Componnet
import { DeviceItem } from "../../../Device/components";
// Styles
import { Styles } from "./Styles";

function CollapseGroup(prop) {
  const classes = Styles();

  const [deviceAnchorEl, setDeviceAnchorEl] = React.useState(null);

  const handleSettingClose = () => {
    setDeviceAnchorEl(null);
  };

  const handleSettingClick = (event) => {
    setDeviceAnchorEl(event.currentTarget);
  };

  return (
    <DeviceGroupConsumer>
      {(props) => {
        const { groupsContent, deleteGroup } = props;
        return (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.fadeGrid}
          >
            <Tooltip title="უკან დაბრუნება" arrow>
              <Fab
                size="medium"
                color="primary"
                aria-label="add"
                className={classes.backIcon}
                onClick={() => {
                  prop.close(false);
                }}
              >
                <ArrowBackIosIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="ჯგუფის წაშლა" arrow>
              <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.deleteButton}
                onClick={() => {
                  deleteGroup(prop.name);
                  prop.deleteGroup(prop.name);
                  prop.close(false);
                }}
              >
                <DeleteIcon />
              </Fab>
            </Tooltip>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.header}>
                {prop.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                {groupsContent.map((item, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      key={index}
                      className={classes.checklistItem}
                    >
                      <Paper elevation={4} className={classes.cardPaper}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                        >
                          <Grid item xs={8}></Grid>
                          <Grid item xs={4}>
                            {/* header setting start */}
                            <Box className={classes.setting}>
                              <IconButton
                                color="primary"
                                component="span"
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
                                className={classes.deviceMenu}
                              >
                                <MenuItem
                                  onClick={handleSettingClose}
                                  className={classes.deviceMenuList}
                                >
                                  <EditIcon />
                                  რედაქტირება
                                </MenuItem>

                                <MenuItem
                                  onClick={handleSettingClose}
                                  className={classes.deviceMenuList}
                                >
                                  <DeleteOutlineIcon />
                                  წაშლა
                                </MenuItem>

                                <MenuItem
                                  onClick={handleSettingClose}
                                  className={classes.deviceMenuList}
                                >
                                  <HighlightOffIcon />
                                  ფორს.წაშლა
                                </MenuItem>
                              </Menu>
                            </Box>
                            {/* header setting end */}
                          </Grid>
                          {/*  */}
                          <DeviceItem
                            name={item.name}
                            type={item.type}
                            value={item.value}
                          />
                        </Grid>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </DeviceGroupConsumer>
  );
}

export default CollapseGroup;

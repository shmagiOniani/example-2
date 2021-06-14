import React, { useState } from "react";
// Maetrial-Ui Core Componnet
import {
  CssBaseline,
  Paper,
  Grid,
  Typography,
  TextField,
  Checkbox,
  Button,
  Box,
  Fab,
  Container,
  Collapse,
} from "@material-ui/core";
// Material-UI Color
import { green } from "@material-ui/core/colors";
// Material-Ui Icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import QueueIcon from "@material-ui/icons/Queue";
// Context Component
import {
  DeviceGroupProvider,
  DeviceGroupConsumer,
} from "../LocalContext/DeviceGroupContext";
// Local Data
import { gatewayData } from "../../assets/dataImitators/gatewayData";
import { users } from "../../assets/dataImitators/users";

// Local Components
import CollapseGroup from "./components/CollapseGroup/CollapseGroup";
import { DeviceItem } from "../Device/components";

// Styles
import { Styles } from "./Styles";

export default function DeviceGroup() {
  const classes = Styles();

  // User Perrmissions
  const permissionType = (status) => {
    const user = users.find((item) => item.id === 1);
    const userPermissions = user.permission.find(
      (item) => item.componnet === "deviceGroup"
    );
    const type = userPermissions.type;
    if (type.includes(status)) {
      console.log(true);
      return true;
    }
    console.log(type.includes[status]);
  };

  //
  const deviceData = [];
  gatewayData.map((item) => deviceData.push(...item.device));

  const [count, setCount] = useState(1);
  const [formOpen, setFormOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]);
  const [checkboxArr, setCheckboxArr] = useState(
    Array.from({ length: deviceData.length }, (_, i) => false)
  );
  const [name, setName] = useState("ჯგუფი");
  const [group, setGroup] = useState([]);

  const [activeGroupName, setActiveGroupName] = useState("");

  const handleAdd = (e, model, index) => {
    checkboxArr[index] = e.target.checked;
    const newCheckboxArr = checkboxArr.splice(0);
    // console.log(newCheckboxArr);
    setCheckboxArr(newCheckboxArr);
    if (e.target.checked) {
      setCheckedArr([...checkedArr, model]);
      // console.log("checked");
    } else if (!e.target.checked) {
      const index = checkedArr.findIndex((val) => val === model);
      checkedArr.splice(index, 1);
      setCheckedArr(checkedArr);
      // console.log(" not checked");
      // e.target.checked = false;
    }
  };

  const handleFormSidebar = () => {
    setFormOpen((prev) => !prev);
  };

  const handleGroupSidebar = () => {
    setGroupOpen((prev) => !prev);
  };

  const handleSubmit = () => {
    const newName = name === "ჯგუფი" ? name + " " + count : name;
    const data = [
      ...group,
      {
        name: newName,
        model: checkedArr,
      },
    ];
    setGroup(data);
    handleFormSidebar();
    setCheckedArr([]);
    setCheckboxArr(Array.from({ length: deviceData.length }, (_, i) => false));
    setCount(count + 1);
    return data;
  };

  const deleteGroup = (data) => {
    const newData = group.filter((item) => item.name !== data);
    setGroup(newData);
    console.log("delete data", data, group);
  };

  return (
    <DeviceGroupProvider>
      <div className={classes.root}>
        <CssBaseline />
        <Container>
          <Typography variant="h5" className={classes.header}>
            მოწყობილობის ჯგუფები
          </Typography>
          <DeviceGroupConsumer>
            {(props) => {
              const { groups, setGroups, setGroupsContent } = props;
              return (
                <Paper className={classes.main} elevation={3}>
                  <div className={classes.fade}>
                    <Collapse in={formOpen}>
                      <Paper elevation={5} className={classes.fadePaper}>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          className={classes.fadeGrid}
                        >
                          <Fab
                            size="medium"
                            color="primary"
                            aria-label="add"
                            className={classes.backIcon}
                            onClick={handleFormSidebar}
                          >
                            <ArrowBackIosIcon />
                          </Fab>
                          <Grid item xs={12}>
                            <Box pb={5}>
                              <Typography variant="h6">
                                ახალი ჯგუფის შექმნა
                              </Typography>
                            </Box>
                          </Grid>

                          <Grid item xs={12}>
                            <TextField
                              id="outlined-basic"
                              label="ჯგუფის დასახელება"
                              variant="outlined"
                              fullWidth
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Grid
                              container
                              direction="row"
                              justify="center"
                              alignItems="center"
                              spacing={4}
                              className={classes.deviceContainer}
                            >
                              {/* {console.log(deviceData)} */}
                              {deviceData.map((key, value) => {
                                return (
                                  <Grid
                                    xs={12}
                                    sm={4}
                                    md={3}
                                    item
                                    key={value}
                                    className={classes.checklistItem}
                                  >
                                    <Paper
                                      elevation={4}
                                      className={classes.cardPaper}
                                    >
                                      <Grid
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                      >
                                        <Grid item xs={9}></Grid>
                                        <Grid
                                          item
                                          xs={3}
                                          className={classes.checkbox}
                                        >
                                          <Checkbox
                                            name={key.id}
                                            color="primary"
                                            onChange={(e) =>
                                              handleAdd(e, key.id, value)
                                            }
                                            // checked={checkboxArr[value]}
                                            checked={checkboxArr[value]}
                                          />
                                        </Grid>
                                        <Grid item xs={12}>
                                          <DeviceItem
                                            name={key.name}
                                            type={key.type}
                                            value={key.value}
                                          />
                                        </Grid>
                                      </Grid>
                                    </Paper>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </Grid>
                          <Grid item xs={12} className={classes.saveButton}>
                            <Button
                              onClick={() => {
                                setGroups(handleSubmit());
                              }}
                            >
                              შენახვა
                            </Button>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Collapse>
                  </div>
                  <div className={classes.fade}>
                    <Paper>
                      <Collapse in={groupOpen}>
                        <CollapseGroup
                          close={() => setGroupOpen(false)}
                          name={activeGroupName}
                          deleteGroup={(data) => deleteGroup(data)}
                        />
                      </Collapse>
                    </Paper>
                  </div>

                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={3}
                    className={classes.folderContainer}
                  >
                    {permissionType("read")
                      ? groups.map((index) => {
                          return (
                            <Grid
                              xs={6}
                              sm={4}
                              md={2}
                              lg={2}
                              item
                              className={classes.folder}
                              key={index.name}
                            >
                              <FolderOpenIcon
                                color="primary"
                                onClick={() => {
                                  handleGroupSidebar();
                                  setGroupsContent(index.name);
                                  setActiveGroupName(index.name);
                                }}
                              />
                              <Typography variant="body2">
                                {index.name}
                              </Typography>
                            </Grid>
                          );
                        })
                      : ""}
                    {permissionType("write") ? (
                      <Grid
                        xs={6}
                        sm={4}
                        md={2}
                        lg={2}
                        item
                        className={classes.folder}
                      >
                        <QueueIcon
                          style={{ color: green[500] }}
                          onClick={handleFormSidebar}
                        />
                        <Typography variant="body2">ჯგუფის შექმნა</Typography>
                      </Grid>
                    ) : (
                      ""
                    )}
                  </Grid>
                </Paper>
              );
            }}
          </DeviceGroupConsumer>
        </Container>
      </div>
    </DeviceGroupProvider>
  );
}

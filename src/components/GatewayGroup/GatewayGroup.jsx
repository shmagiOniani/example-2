import React, { useState } from "react";
// Maetrial-Ui Core Components
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
// Material-Ui icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import QueueIcon from "@material-ui/icons/Queue";
// Local Components
import { gatewayData } from "../../assets/dataImitators/gatewayData";
import CollapseGroup from "./components/CollapseGroup/CollapseGroup";
import GatewayComponent from "../Gateway/components/GatewayComponent";
// Context Components
import {
  GatewayGroupProvider,
  GatewayGroupConsumer,
} from "../LocalContext/GatewayGroupContext";
// Styles
import { Styles } from "./Styles";

export default function GatewayGroup() {
  const classes = Styles();

  const [count, setCount] = useState(1);
  const [formOpen, setFormOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
  const [checkedArr, setCheckedArr] = useState([]);
  const [checkboxArr, setCheckboxArr] = useState(
    Array.from({ length: gatewayData.length }, (_, i) => false)
  );
  const [name, setName] = useState("ჯგუფი");
  const [group, setGroup] = useState([]);

  const [activeGroupName, setActiveGroupName] = useState("");

  const handleAdd = (e, model, index) => {
    checkboxArr[index] = e.target.checked;
    const newCheckboxArr = checkboxArr.splice(0);
    setCheckboxArr(newCheckboxArr);
    if (e.target.checked) {
      setCheckedArr([...checkedArr, model]);
      console.log("checked", checkedArr);
    } else if (!e.target.checked) {
      const index = checkedArr.findIndex((val) => val === model);
      checkedArr.splice(index, 1);
      setCheckedArr(checkedArr);
      console.log(" not checked", checkedArr);
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
    console.log(formOpen, "oepn");
    setCheckedArr([]);
    setCheckboxArr(Array.from({ length: gatewayData.length }, (_, i) => false));
    setCount(count + 1);
    return data;
  };

  const deleteGroup = (data) => {
    const newData = group.filter((item) => item.name !== data);
    setGroup(newData);
    console.log("delete data", data, group);
  };

  return (
    <GatewayGroupProvider>
      <div>
        <CssBaseline />
        <Container>
          <Typography variant="h5" className={classes.header}>
            გეითვეის ჯგუფები
          </Typography>
          <GatewayGroupConsumer>
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
                          <Grid item xs={12} className={classes.input}>
                            <TextField
                              id="outlined-basic"
                              label="ჯგუფის დასახელება"
                              variant="outlined"
                              fullWidth
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </Grid>
                          {gatewayData.map((item, index) => {
                            return (
                              <Grid
                                xs={12}
                                sm={6}
                                md={4}
                                item
                                className={classes.checklistItem}
                                key={item.model}
                              >
                                <Checkbox
                                  name={item.model}
                                  color="primary"
                                  checked={checkboxArr[index]}
                                  onChange={(e) =>
                                    handleAdd(e, item.model, index)
                                  }
                                  // checked={checkboxArr[index]}
                                  className={classes.checkbox}
                                />
                                <GatewayComponent
                                  model={item.model}
                                  status={item.status}
                                  label={item.label}
                                  setting={false}
                                />
                              </Grid>
                            );
                          })}

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
                    <Collapse in={groupOpen}>
                      <CollapseGroup
                        close={() => setGroupOpen(false)}
                        name={activeGroupName}
                        deleteGroup={(data) => deleteGroup(data)}
                      />
                    </Collapse>
                  </div>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={3}
                    className={classes.folderContainer}
                  >
                    {groups.map((index) => {
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
                          <Typography variant="body2">{index.name}</Typography>
                        </Grid>
                      );
                    })}

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
                    {/* <Button onClick={() => console.log(group, groups)}>
                      check
                    </Button> */}
                  </Grid>
                </Paper>
              );
            }}
          </GatewayGroupConsumer>
        </Container>
      </div>
    </GatewayGroupProvider>
  );
}

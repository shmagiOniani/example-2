import React, { useState } from "react";
// Material-Ui Core Components
import {
  TextField,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Fab,
  Button,
} from "@material-ui/core";
// Material-UI Icons
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
//  Context Components
import { ScheduleConsumer } from "../../../../../LocalContext/ScheduleContext";
// Styles
import { Styles } from "./Styles";

function DeviceSetting() {
  const classes = Styles();

  const [modeArr, setModeArr] = useState([]);

  const [editableValue, setEditableValue] = useState([]);

  // const increaseOperand = () => {
  //   setOperandValue(operandValue + 1);
  // };

  // const decreaseOperand = () => {
  //   setOperandValue(operandValue - 1);
  // };

  const handleSetEditableValue = (name, action) => {
    console.log("editableValue", editableValue);
  };

  // const handleSetModeValue = (id, data) => {
  //   const filterOldData = modeArr.filter((item) => item.id !== id);
  //   filterOldData.push(data);
  //   setModeArr(filterOldData);
  // };

  // const setSelectedDeviceType = (data) => {
  //   console.log(data, "data");
  //   setEditableValue(data);
  // };

  return (
    <ScheduleConsumer>
      {(props) => {
        const { selectedDeviceType, submit, updateSelectedDeviceType } = props;
        // setSelectedDeviceType(selectedDeviceType);
        return (
          <Grid item xs={12} md={6}>
            <Paper elevation={2} className={classes.paper}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
              >
                <Grid item xs={12}>
                  <Typography variant="h6">მოწყობილობის მართვა</Typography>
                </Grid>
                {/* from here */}
                {selectedDeviceType !== ""
                  ? selectedDeviceType.modes.map((value, index, array) => {
                      return (
                        <Grid item xs={12} key={index}>
                          {value.type === "select" ? (
                            <TextField
                              select
                              label={value.name}
                              fullWidth
                              size="small"
                              variant="outlined"
                              value={value.value || ""}
                              onChange={(e) => {
                                selectedDeviceType.modes.foreach((item) => {
                                  if (item.name === value.name) {
                                    return (item.value = e.target.value);
                                  }
                                });
                                console.log(selectedDeviceType);
                                updateSelectedDeviceType(selectedDeviceType);
                              }}
                            >
                              {value.mode.map((item) => {
                                return (
                                  <MenuItem key={item} value={item}>
                                    {item}
                                  </MenuItem>
                                );
                              })}
                              {/* {console.log(array)} */}
                            </TextField>
                          ) : (
                            <Grid item xs={12}>
                              <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                              >
                                <Grid item xs={8}>
                                  <Typography variant="body1">
                                    {value.name}:
                                  </Typography>
                                </Grid>
                                <Grid item xs={4} className={classes.operand}>
                                  <Fab
                                    size="small"
                                    color="secondary"
                                    aria-label="add"
                                    onClick={() => {
                                      handleSetEditableValue(
                                        value.name,
                                        "dencrement"
                                      );
                                      selectedDeviceType.modes.foreach(
                                        (item) => {
                                          if (item.name === value.name) {
                                            item.value = item.value
                                              ? item.value - 1
                                              : item.defaultValue - 1;
                                          }
                                        }
                                      );
                                      updateSelectedDeviceType(
                                        selectedDeviceType
                                      );
                                      console.log(selectedDeviceType);
                                    }}
                                  >
                                    <RemoveIcon />
                                  </Fab>
                                  <TextField
                                    variant="outlined"
                                    id="demo-controlled-open-select"
                                    value={value.value || value.defaultValue}
                                    onChange={(e) => {
                                      selectedDeviceType.modes.foreach(
                                        (item) => {
                                          if (item.name === value.name) {
                                            item.value = e.target.value;
                                          }
                                        }
                                      );
                                      console.log(selectedDeviceType);
                                      updateSelectedDeviceType(
                                        selectedDeviceType
                                      );
                                    }}
                                    className={classes.input}
                                  />
                                  <Fab
                                    size="small"
                                    color="primary"
                                    aria-label="edit"
                                    onClick={() => {
                                      handleSetEditableValue(
                                        value.name,
                                        "increment"
                                      );
                                      selectedDeviceType.modes.foreach(
                                        (item) => {
                                          if (item.name === value.name) {
                                            item.value = item.value
                                              ? item.value + 1
                                              : item.defaultValue + 1;
                                          }
                                        }
                                      );
                                      console.log(selectedDeviceType);
                                      updateSelectedDeviceType(
                                        selectedDeviceType
                                      );
                                    }}
                                  >
                                    <AddIcon />
                                  </Fab>
                                </Grid>
                              </Grid>
                            </Grid>
                          )}
                        </Grid>
                      );
                    })
                  : ""}

                {/* still here */}
              </Grid>
              <Button onClick={() => console.log(modeArr)}>
                check actions
              </Button>
              {submit ? setModeArr({ modeArr }) : ""}
            </Paper>
          </Grid>
        );
      }}
    </ScheduleConsumer>
  );
}

export default DeviceSetting;

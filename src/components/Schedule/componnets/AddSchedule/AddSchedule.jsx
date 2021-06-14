import React, { useState } from "react";
// Material-Ui Core Components
import {
  TextField,
  Grid,
  Box,
  Paper,
  Button,
  Typography,
  MenuItem,
} from "@material-ui/core";
// React Select Components
import Select from "react-select";
import makeAnimated from "react-select/animated";
//  Context Components
import { ScheduleConsumer } from "../../../LocalContext/ScheduleContext";
//  Local Data
import { gatewayData } from "../../../../assets/dataImitators/gatewayData";
import { deviceTypes } from "../../../../assets/dataImitators/deviceTypes";
// Styles
import { Styles } from "./Styles";
import DeviceSetting from "./components/DeviceSetting/DeviceSetting";

const animatedComponents = makeAnimated();

const days = [
  {
    value: "ორშაბათი",
    label: "ორშაბათი",
  },
  {
    value: "სამშაბათი",
    label: "სამშაბათი",
  },
  {
    value: "ოთხშაბათი",
    label: "ოთხშაბათი",
  },
  {
    value: "ხუთშაბათი",
    label: "ხუთშაბათი",
  },
  {
    value: "პარასკევი",
    label: "პარასკევი",
  },
  {
    value: "შაბათი",
    label: "შაბათი",
  },
  {
    value: "კვირა",
    label: "კვირა",
  },
];

function AddSchedule() {
  const classes = Styles();

  const [scheduleName, setScheduleName] = useState("");

  const handleScheduleName = (e) => {
    setScheduleName(e.target.value);
  };

  return (
    <ScheduleConsumer>
      {(props) => {
        const {
          deviceType,
          // devices,
          gateway,
          filteredType,
          setTime,
          setDay,
          setSelectedDeviceType,
          setDevice,
          setGateway,
          setSubmit,
        } = props;
        return (
          <Paper elevation={4}>
            <Grid
              container
              // direction="row"
              // justify="center"
              // alignItems="center"
              spacing={2}
              className={classes.root}
            >
              <Grid item xs={12}>
                <Box>
                  <Typography variant="h5">განრიგის შექმნა</Typography>
                </Box>
                <Box pt={3}>
                  <TextField
                    label="განრიგის დასახელება"
                    fullWidth
                    variant="outlined"
                    onChange={handleScheduleName}
                    value={scheduleName}
                  />
                </Box>
              </Grid>
              {/* დროის და დასახელების არჩევა */}
              <Grid item xs={12}>
                <Typography variant="body1">დროები და დღეები</Typography>
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={3} className={classes.paper}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item xs={12} md={3} className={classes.dataContainer}>
                      <Typography variant="body2">დრო:</Typography>
                      <Box>
                        <TextField
                          id="time"
                          label="სთ/წთ"
                          type="time"
                          variant="outlined"
                          size="small"
                          defaultValue="07:30"
                          onChange={(e) => {
                            setTime(e.target.value);
                          }}
                          className={classes.dataTextField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          inputProps={{
                            step: 300, // 5 min
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={9}>
                      {/* transfer place */}
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={days}
                        onChange={(e) => {
                          let instance = [];
                          e.map((item) => instance.push(item));
                          setDay(instance);
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              {/* მოწყობილობის არჩევა */}
              <Grid item xs={12} md={6}>
                <Paper elevation={3} className={classes.paper}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        size="small"
                        select
                        variant="outlined"
                        label="მოწყობილობის ტიპები"
                        defaultValue=""
                        value={deviceType}
                        onChange={(e) => setSelectedDeviceType(e.target.value)}
                      >
                        {deviceTypes.map((item) => {
                          return (
                            <MenuItem key={item.name} value={item.name}>
                              {item.name}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6"></Typography>
                      <TextField
                        fullWidth
                        size="small"
                        select
                        variant="outlined"
                        label="გეითვეი"
                        defaultValue=""
                        value={gateway}
                        onChange={(e) => setGateway(e.target.value)}
                      >
                        {gatewayData.map((key) => {
                          return (
                            <MenuItem key={key.model} value={key}>
                              {key.label}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6"></Typography>
                      {/* transfer */}

                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={filteredType}
                        onChange={(e) => {
                          let instance = [];
                          e.map((item) => instance.push(item));
                          setDevice(instance);
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              {/* მოწყობილობის მართვა */}
              <DeviceSetting />
              <Button onClick={() => console.log(filteredType)}>check</Button>
              <Grid item xs={12}>
                <Box>
                  <Button
                    variant="contained"
                    className={classes.saveButton}
                    onClick={() => setSubmit()}
                  >
                    <Typography variant="body1">შენახვა</Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        );
      }}
    </ScheduleConsumer>
  );
}

export default AddSchedule;

import React, { useState } from "react";
// Material-Ui Core Components
import {
  Collapse,
  CssBaseline,
  Container,
  Typography,
  Fab,
} from "@material-ui/core";
// Material-UI Table
import MUIDataTable from "mui-datatables";
// Material-Ui icons
import AddIcon from "@material-ui/icons/Add";

// Context Components
import { ScheduleProvider } from "../LocalContext/ScheduleContext";
// Local Components
import AddSchedule from "./componnets/AddSchedule/AddSchedule";
// Styles
import { Styles } from "./Styles";

export default function Schedule() {
  const classes = Styles();

  const [collapseChecked, setCollapseChecked] = useState(false);

  const handleChange = () => {
    setCollapseChecked((prev) => !prev);
  };

  const scheduleColumns = [
    "სტატუსი",
    "შექმნის დრო",
    "განრიგის დასახელება",
    "მოწყობილოის ტიპი",
    "დღეები",
    "დო",
    "გეითვეი",
    "მოწყობილობები",
    "პარამეტრები",
  ];

  const options = {
    filterType: "dropdown",
    responsive: "standard",
  };

  const scheduleData = [
    [
      "აქტიური",
      "2021/04/02 19:55:14",
      "განრიგი 1",
      "fan coil",
      "ოთხშაბათი",
      "03:02",
      "გეითვეი 2",
      "მოწყოპბილობა 4",
      "        model: winter        thermostate: 21        fan_speed: low        co_sensor_trigger_value: 3",
    ],
  ];

  return (
    <ScheduleProvider>
      <div className={classes.root}>
        <CssBaseline />
        <Container className={classes.container}>
          <Typography variant="h5" className={classes.header}>
            განრიგები
          </Typography>
          <Fab
            aria-label="add"
            className={classes.addSign}
            onClick={handleChange}
          >
            <AddIcon />
          </Fab>

          <div className={classes.fade}>
            <Collapse in={collapseChecked}>
              {/* stepper start */}
              <AddSchedule />
              {/* stepper end */}
            </Collapse>
          </div>
          <MUIDataTable
            title={"განრიგები"}
            data={scheduleData}
            columns={scheduleColumns}
            options={options}
          />
        </Container>
      </div>
    </ScheduleProvider>
  );
}

import React, { useState } from "react";
import { useParams } from "react-router-dom";
// Material-UI Core Components
import {
  CssBaseline,
  Typography,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab,
  AppBar,
  Box,
} from "@material-ui/core";

// Material-UI Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MapIcon from "@material-ui/icons/Map";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import ListAltIcon from "@material-ui/icons/ListAlt";
// select resource
import Select from "react-select";
import PropTypes from "prop-types";
// Context Componnets
import { DeviceProvider } from "../LocalContext/DeviceContext";
// Local Components
import { gatewayData } from "../../assets/dataImitators/gatewayData";
import GatewayComponent from "../Gateway/components/GatewayComponent";
import { Styles } from "./Styles";

import {
  BuildingPlan,
  CheckList,
  Error,
  DeviceMap,
  Warning,
  DeviceItem,
} from "./components";

// select input source
const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  border: "none!important",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

// tabs source
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

//

function Device() {
  const classes = Styles();

  const { model } = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [selectVal, setSelectVal] = useState(model);
  const [sensorsStatus, setSensorsStatus] = useState(0);

  const status =
    sensorsStatus === 0
      ? "active"
      : sensorsStatus === 1
      ? "notActive"
      : sensorsStatus === 2
      ? "removed"
      : "";

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSelect = (e) => {
    setSelectVal(e.value);
    console.log(e.value);
    console.log(selectVal);
    console.log(model);
  };

  const handleSensorTab = (event, newValue) => {
    setSensorsStatus(newValue);
  };
  console.log(gatewayData);
  console.log(selectVal);

  return (
    <DeviceProvider>
      <div className={classes.root}>
        <CssBaseline />
        <Container>
          <Typography variant="h5">მექანიზმები</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} className={classes.selectInput}>
              <Select
                options={gatewayData}
                formatGroupLabel={formatGroupLabel}
                onChange={handleSelect}
              />
            </Grid>

            <Grid item xs={12}>
              {gatewayData
                .filter((x) => x.value === selectVal)
                .map((index) => {
                  return (
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      key={index.model}
                      // className={classes.gatewayDetails}
                    >
                      <Grid item xs={12} sm={6} md={4}>
                        <GatewayComponent
                          model={index.model}
                          status={index.status}
                          label={index.label}
                          setting={false}
                        />
                      </Grid>
                    </Grid>
                  );
                })}
            </Grid>
            {selectVal === undefined ? (
              ""
            ) : (
              <Grid
                item
                xs={12}
                className={!selectVal === "" ? classes.hide : ""}
              >
                <AppBar position="static" color="default">
                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                    className={classes.mainTab}
                  >
                    <Tab
                      label="შეცდომები"
                      icon={<SmsFailedIcon />}
                      {...a11yProps(0)}
                    />
                    <Tab
                      label="რუკა"
                      icon={<LocationOnIcon />}
                      {...a11yProps(1)}
                    />
                    <Tab
                      label="შენობის გეგმა"
                      icon={<MapIcon />}
                      {...a11yProps(2)}
                    />
                    <Tab
                      label="შესამოწმებელი სია"
                      icon={<ListAltIcon />}
                      {...a11yProps(3)}
                    />
                    <Tab
                      label="რეპორტი"
                      icon={<ReportProblemIcon />}
                      {...a11yProps(4)}
                    />
                  </Tabs>
                </AppBar>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              md={4}
              className={!selectVal ? classes.hide : ""}
            >
              <Paper className={classes.paper}>
                <div className={classes.tab}>
                  <TabPanel value={tabValue} index={0}>
                    შეცდომები
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    რუკა
                  </TabPanel>
                  <TabPanel value={tabValue} index={2}>
                    შენობის გეგმა
                  </TabPanel>
                  <TabPanel value={tabValue} index={3}>
                    შესამოწმებელი სია
                  </TabPanel>
                  <TabPanel value={tabValue} index={4}>
                    რეპორტი
                  </TabPanel>
                </div>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className={classes.deviceInfo}
                >
                  {tabValue === 0 ? (
                    <Grid item>
                      <Error />
                    </Grid>
                  ) : tabValue === 1 ? (
                    <Grid item>
                      <DeviceMap />
                    </Grid>
                  ) : tabValue === 2 ? (
                    <Grid item>
                      <BuildingPlan />
                    </Grid>
                  ) : tabValue === 3 ? (
                    <Grid item>
                      <CheckList />
                    </Grid>
                  ) : tabValue === 4 ? (
                    <Grid item>
                      <Warning />
                    </Grid>
                  ) : (
                    ""
                  )}
                </Grid>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              className={!selectVal ? classes.hide : ""}
            >
              <Paper className={classes.paper}>
                {gatewayData
                  .filter((x) => x.value === selectVal)
                  .map((value) => {
                    return (
                      <div key={value.model} className={classes.root}>
                        <AppBar position="static" color="default">
                          <Tabs
                            value={sensorsStatus}
                            onChange={handleSensorTab}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            className={classes.tabNav}
                          >
                            <Tab label="აქტიური" {...a11yProps(0)} />
                            <Tab label="გათიშული" {...a11yProps(1)} />
                            <Tab label="წაშლილი" {...a11yProps(2)} />
                          </Tabs>
                        </AppBar>
                        <Grid
                          container
                          direction="row"
                          justify="center"
                          alignItems="center"
                          // spacing={1}
                        >
                          {value.device
                            .filter((x) => x.status === status)
                            .map((item) => {
                              return (
                                <Grid
                                  item
                                  xs={12}
                                  sm={6}
                                  md={4}
                                  lg={4}
                                  key={item.id}
                                  className={classes.device}
                                >
                                  {/* from here */}

                                  <DeviceItem
                                    name={item.name}
                                    type={item.type}
                                    value={item.value}
                                  />
                                  {/* end */}
                                </Grid>
                              );
                            })}
                        </Grid>
                      </div>
                    );
                  })}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </DeviceProvider>
  );
}

export default Device;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// Local Components
import { General, Notifications, Links, ChangePassword } from "./components";
// Material-UI Core Components
import { AppBar, Tabs, Tab, Box } from "@material-ui/core";
// Material-UI Icons
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ShareIcon from "@material-ui/icons/Share";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.childBox} p={3}>
          {children}
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    "& > header": {
      boxShadow: "none",
      backgroundColor: "#0000",
    },
  },
  main: {
    // backgroundColor: "#00AB55",

    "& > span": {
      backgroundColor: "#00AB55",
    },
  },
  activeTab: {
    minHeight: "50px",
    minWidth: "100px",
    padding: "0 20px",
    color: "#000!important",
    "& > span": {
      // color: "green",
      fontSize: "15px",
      textTransform: "capitalize",
      flexDirection: "row",
    },
    "& > span > svg": {
      paddingRight: theme.spacing(0.8),
    },
  },
  tab: {
    minHeight: "50px",
    minWidth: "100px",
    padding: "0 20px",
    "& > span": {
      fontSize: "15px",
      textTransform: "capitalize",
      flexDirection: "row",
    },
    "& > span > svg": {
      paddingRight: theme.spacing(0.8),
    },
  },
  childBox: {
    // padding: theme.spacing(4, 0),
    // backgroundColor: "red",
  },
}));

export default function Account() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState("general");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          className={classes.main}
        >
          <Tab
            label="??????????????????"
            icon={<AccountBoxIcon />}
            {...a11yProps(0)}
            selected={selectedIndex === "general"}
            className={clsx(
              selectedIndex === "general" ? classes.activeTab : classes.tab
            )}
            onClick={(event) => handleListItemClick(event, "general")}
          />

          <Tab
            label="???????????????????????????????????????"
            icon={<NotificationsActiveIcon />}
            {...a11yProps(1)}
            selected={selectedIndex === "notification"}
            className={clsx(
              selectedIndex === "notification" ? classes.activeTab : classes.tab
            )}
            onClick={(event) => handleListItemClick(event, "notification")}
          />
          <Tab
            label="??????????????????????????? ???????????????????????????"
            icon={<ShareIcon />}
            {...a11yProps(2)}
            selected={selectedIndex === "social"}
            className={clsx(
              selectedIndex === "social" ? classes.activeTab : classes.tab
            )}
            onClick={(event) => handleListItemClick(event, "social")}
          />
          <Tab
            label="????????????????????? ??????????????????"
            icon={<VpnKeyIcon />}
            {...a11yProps(3)}
            selected={selectedIndex === "password"}
            className={clsx(
              selectedIndex === "password" ? classes.activeTab : classes.tab
            )}
            onClick={(event) => handleListItemClick(event, "password")}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <General />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Notifications />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Links />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ChangePassword />
      </TabPanel>
    </div>
  );
}

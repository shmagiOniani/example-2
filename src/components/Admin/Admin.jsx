import React from "react";
import clsx from "clsx";
// Material-UI core components
// import { TableFilterList } from "mui-datatables";
import {
  makeStyles,
  Typography,
  Container,
  Paper,
  AppBar,
  Tabs,
  Tab,
  // Chip,
} from "@material-ui/core";

// Material-UI icons
import PeopleIcon from "@material-ui/icons/People";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AdbIcon from "@material-ui/icons/Adb";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
// Local Components
import { Users, Permissions, DeviceTypes, Notifications } from "./components";

// Context
import { AdminProvider } from "../LocalContext/AdminContext";

const styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  hide: {
    display: "none",
  },
  tab: {
    "& > div": {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  tabPanel: {
    padding: "20px 20px ",
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export default function Admin() {
  const classes = styles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const options = {
  //   filterType: "dropdown",
  //   responsive: "vertical",
  // };

  // const CustomChip = ({ label, onDelete }) => {
  //   return (
  //     <Chip
  //       variant="outlined"
  //       color="primary"
  //       label={label}
  //       onDelete={onDelete}
  //     />
  //   );
  // };

  // const CustomFilterList = (props) => {
  //   return <TableFilterList {...props} ItemComponent={CustomChip} />;
  // };

  return (
    <AdminProvider>
      <Container>
        <Paper>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
              className={classes.tab}
            >
              <Tab
                label="მომხმარებლები"
                icon={<PeopleIcon />}
                {...a11yProps(0)}
              />
              <Tab label="როლები" icon={<StarBorderIcon />} {...a11yProps(1)} />
              <Tab
                label="მოწყობილობის ტიპები"
                icon={<AdbIcon />}
                {...a11yProps(2)}
              />
              <Tab
                label="შეტყობინებები"
                icon={<LibraryBooksIcon />}
                {...a11yProps(3)}
              />
            </Tabs>
          </AppBar>
          <div className={clsx(value === 0 ? classes.tabPanel : classes.hide)}>
            <Typography variant="h5" className={classes.header}>
              თანამშრომელთა სია
            </Typography>
            <Users />
            {/* <UsersTable /> */}
          </div>
          <div className={clsx(value === 1 ? classes.tabPanel : classes.hide)}>
            <Typography variant="h5" className={classes.header}>
              როლები
            </Typography>
            <Permissions />
          </div>
          <div className={clsx(value === 2 ? classes.tabPanel : classes.hide)}>
            <Typography variant="h5" className={classes.header}>
              მოწყობილების ტიპები
            </Typography>
            <DeviceTypes />
          </div>
          <div className={clsx(value === 3 ? classes.tabPanel : classes.hide)}>
            <Typography variant="h5" className={classes.header}>
              შეტყობინებები
            </Typography>
            <Notifications />
          </div>
        </Paper>
      </Container>
    </AdminProvider>
  );
}

import React from "react";
// React-Router Components
import { useHistory } from "react-router-dom";
// Material-UI Core Components
import {
  InputBase,
  IconButton,
  Toolbar,
  AppBar,
  Badge,
  MenuItem,
  Menu,
  CssBaseline,
  Avatar,
  Box,
  Collapse,
  Paper,
  Button,
} from "@material-ui/core";
// Material-UI Icons
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
// Local Components
import Sidebar from "./components/Sidebar/Sidebar";
// Styles
import { styles } from "./styles";
// Local Data
import { notification } from "./notification";
// Images
import person from "../../assets/img/1.jpg";

function Nav() {
  const classes = styles();

  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  // notification pop-up handler
  const [notificationAnchorEl, setNotificationAnchorEl] = React.useState(null);
  const isNotificationOpen = Boolean(notificationAnchorEl);

  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleSearchOpen = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleSearchClose = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleNotificationOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const logButton = () => {
    localStorage.removeItem("userKey");
    history.push("Login");
  };

  // notification pop-up
  const notificationId = "primary-notification-pop-up";
  const renderNotification = (
    <Menu
      anchorEl={notificationAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={notificationId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isNotificationOpen}
      onClose={handleNotificationClose}
      className={classes.popUp}
    >
      {notification.map((index) => (
        <MenuItem onClick={handleNotificationClose} key={index.id}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Avatar alt="Remy Sharp" src={person} />
            </Badge>
          </IconButton>
          <div>
            {index.name}
            {index.content}
          </div>
        </MenuItem>
      ))}
    </Menu>
  );

  // avatar pop-up for desktop
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.popUp}
    >
      <MenuItem onClick={handleMenuClose}>
        <Box mr={2}>
          <AccountCircleIcon />
        </Box>
        პროფილი
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Box mr={2}>
          <SettingsIcon />
        </Box>
        პარამეტრები
      </MenuItem>

      <MenuItem onClick={logButton}>
        <Box mr={2}>
          <MeetingRoomIcon />
        </Box>
        გამოსვლა
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <div className={classes.blur}></div>

        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleSidebarToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <SearchIcon
            onClick={handleSearchOpen}
            className={classes.searchIcon}
          />

          <div className={classes.searchContainer}>
            <div className={classes.searchBlur} />

            <Collapse in={searchOpen} className={classes.collapseBg}>
              <Paper elevation={3} className={classes.searchPaper}>
                <form className={classes.searchForm}>
                  <IconButton
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={handleSearchClose}
                  >
                    <SearchIcon />
                  </IconButton>
                  <InputBase
                    className={classes.input}
                    placeholder="Search..."
                  />
                  <Button
                    variant="contained"
                    className={classes.searchButton}
                    onClick={handleSearchOpen}
                  >
                    Search
                  </Button>
                </form>
              </Paper>
            </Collapse>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show new notifications"
              color="inherit"
              aria-controls={notificationId}
              aria-haspopup="true"
              onClick={handleNotificationOpen}
            >
              <Badge
                badgeContent={notification.length}
                color="secondary"
                // badgeContent={notification.length}
                className={classes.badge}
              >
                <NotificationsIcon className={classes.barIcon} />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="account of current user"
              edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Avatar alt="Remy Sharp" src={person} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* sidebar */}
      {/* <div className={classes.sidebar} onClick={() => handleSidebarToggle}> */}
      <Sidebar
        mobileOpen={sidebarOpen}
        handleDrawerToggle={handleSidebarToggle}
      />
      {/* <div className={classes.sidebarButton}> */}
      {/* <ArrowBackIosIcon /> */}
      {/* </div> */}
      {/* </div> */}

      {/* {renderMobileMenu} */}
      {renderMenu}
      {renderNotification}
      {/* {renderLanguage} */}
    </div>
  );
}

export default Nav;

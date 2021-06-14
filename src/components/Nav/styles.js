import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 260;

export const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: "#fff0",
    // comment this
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: {
    backgroundColor: "#fff0",
    backdropFilter: "blur(10px)",
  },
  blur: {
    height: "70px",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "white",
    width: "100%",
    filter: "blur(100px)",
  },
  menuButton: {
    color: "gray",
    marginRight: theme.spacing(2),
    // comment this
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchBlur: {
    backgroundColor: "white",
    width: "100%",
    filter: "blur(100px)",
  },
  collapseBg: {
    backgroundColor: "#ffffffd1!important",
    backdropFilter: "blur(2px)",
  },
  searchIcon: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
    cursor: "pointer",
  },
  searchPaper: {
    backgroundColor: "#fff0",
  },
  searchContainer: {
    position: "absolute",
    zIndex: "10",
    top: 0,
    left: 0,
    width: "100vw",
    [theme.breakpoints.up("lg")]: {
      width: "81vw",
    },
  },
  input: {
    [theme.breakpoints.up("sm")]: {
      width: "67vw",
    },
  },
  searchButton: {
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  searchForm: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 25px",
    [theme.breakpoints.up("lg")]: {
      padding: "16px 13px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "16px 63px",
    },
  },

  barIcon: {
    color: "rgb(99, 115, 129)",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  popUp: {
    top: "40px!important",
  },
  sectionDesktop: {
    // display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > button": {
        height: "fit-content",
        padding: "20px 20px",
      },
    },
  },
  badge: {
    "& > span": {
      fontWeight: "600",
      right: "5px",
    },
  },

  grow: {
    flexGrow: 1,
    display: "flex",
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebar: {},
  sidebarButton: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    zIndex: "200",
    top: "80px",
    left: "260px",
    // background: "#ececec",
    background:
      "linear-gradient(90deg, rgba(218,218,218,1) 0%, rgba(0,0,0,0) 100%)",
    width: "20px",
    height: "89vh",
    transition: "all .2s ease-in",
    "&>svg": {
      fill: "#cecece!important",
    },
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#ececec",
      "&>svg": {
        fill: "gray!important",
      },
    },
  },
}));

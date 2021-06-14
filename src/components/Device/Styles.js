import { makeStyles } from "@material-ui/core";

export const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: "80vh",
  },
  hide: {
    display: "none",
  },
  tab: {
    flexGrow: 1,
    width: "100%",
    // backgroundColor: theme.palette.background.paper,
  },
  mainTab: {
    justifyContent: "center!important",
  },
  deviceInfo: {
    overflow: "hidden",
  },
  active: {
    color: "green",
  },

  tabNav: {
    "& > * > *": {
      justifyContent: "space-around",
    },
  },
  sectionGrid: {
    padding: "0!important",
  },
  device: {
    padding: "40px 20px 30px!important",
  },
  cardPaper: {
    borderRadius: "30px",
  },
  deviceContainer: {
    padding: "10px",
  },
  temperature: {
    fontSize: "55px",
    fontWeight: "600",
    color: "hsl(0deg 0% 20%)",
  },
  infoIcon: {
    backgroundColor: "#f6a821",
    "&:hover": {
      backgroundColor: "#d7921c",
    },
  },
  status: {
    height: "20px",
    width: "20px",
  },
  gatewayMenu: {
    "& > *": {
      // boxShadow: "none",
      boxShadow: "0px 0px 3px 0px rgb(0 0 0 / 3%);",
    },
    "& > div > ul": {},
  },
  gatewayMenuList: {
    fontWeight: "600!important",
    fontSize: "15px",
    "& > *": {
      marginRight: "10px",
    },
  },
  selectInput: {
    padding: "50px 10px 15px!important",
  },
}));

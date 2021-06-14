import { makeStyles } from "@material-ui/core/styles";
export const Styles = makeStyles((theme) => ({
  root: {
    paddingBottom: "30px",
  },
  header: {
    paddingBottom: "40px",
  },
  fade: {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    backgroundColor: "white",
  },

  container: {
    display: "flex",
    justifyContent: "center",
  },

  fadePaper: {
    display: "flex",
    padding: theme.spacing(5),
    "& > svg": {
      cursor: "pointer",
    },
    "& > div": {
      paddingTop: "20px",
    },
  },
  main: {
    minHeight: "73vh",
    position: "relative",
  },
  checklistItem: {
    padding: "10px ",
  },

  // card styles
  cardPaper: {
    borderRadius: "30px",
    padding: theme.spacing(4),
  },
  checkbox: {
    display: "flex",
    justifyContent: "flex-end",
    "& > *": {
      padding: "0!important",
    },
  },
  sectionGrid: {
    padding: "0!important",
  },
  device: {
    padding: "40px 20px 30px!important",
  },
  deviceContainer: {
    padding: "10px",
    paddingTop: "20px",
  },

  status: {
    height: "20px",
    width: "20px",
  },
  gatewayMenu: {
    "& > *": {
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
  folderContainer: {
    paddingTop: "20px",
  },
  folder: {
    cursor: "pointer",
    "& > svg": {
      width: "3em",
      height: "3em",
    },
  },
  saveButton: {
    paddingTop: "30px ",
    "& > *": {
      padding: "5px 20px",
      fontSize: "15px",
      letterSpacing: "2px",
      textTransform: "none",
      backgroundColor: "rgb(0, 171, 85)",
      color: "white",
      fontWeight: "600",
      "&:hover": {
        backgroundColor: "rgb(0, 123, 85)",
        boxShadow: "none",
      },
    },
  },
  fadeGrid: {
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    top: "0",
    left: "-20px",
    paddingLeft: "6px",
    zIndex: "200",
  },
}));

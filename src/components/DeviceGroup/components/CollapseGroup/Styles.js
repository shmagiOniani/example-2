import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  fadeGrid: {
    position: "relative",
    minHeight: "73vh",
    padding: "20px",
  },
  deleteButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: "200",
  },

  backIcon: {
    position: "absolute",
    top: "20px",
    left: "20px",
    paddingLeft: "6px",
    zIndex: "200",
  },
  checklistItem: {
    padding: "10px ",
  },
  cardPaper: {
    borderRadius: "30px",
    padding: theme.spacing(4),
  },
  //
  setting: {
    display: "flex",
    justifyContent: "flex-end",
    "& > *": {
      padding: "0!important",
    },
  },

  deviceMenu: {
    "& > *": {
      // boxShadow: "none",
      boxShadow: "0px 0px 3px 0px rgb(0 0 0 / 3%);",
    },
    "& > div > ul": {},
  },
  deviceMenuList: {
    fontWeight: "600!important",
    fontSize: "15px",
    "& > *": {
      marginRight: "10px",
    },
  },
}));

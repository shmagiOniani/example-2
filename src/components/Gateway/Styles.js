import { makeStyles } from "@material-ui/core/styles";
export const Styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    paddingBottom: "40px",
  },
  item: { position: "relative" },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  chartDiv: {
    height: "220px",
    "& > *": {
      cursor: "default",
      width: "100%!important",
      height: "100%!important",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute!important",
      top: "-5%",
      left: "0",
    },
  },
  active: {
    color: "green",
  },
  status: {
    position: "absolute",
    top: "7%",
    left: "8%",
    height: "20px",
    width: "20px",
  },
  setting: {
    position: "absolute",
    zIndex: "10",
    top: "5%",
    right: "5%",
    height: "30px",
    width: "30px",
    padding: "20px",
    "& > * ": {
      height: "100%",
      width: "100%",
    },
  },
  button: {
    margin: "5px 0",
    textDecoration: "none",
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
    "& > *": {
      marginRight: "10px",
    },
  },
}));

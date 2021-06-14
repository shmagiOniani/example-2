// Material-Color
import green from "@material-ui/core/colors/green";
// Material-UI Core Component
import { makeStyles } from "@material-ui/core/styles";
export const Styles = makeStyles((theme) => ({
  root: {
    paddingBottom: "50px",
  },
  container: {
    position: "relative",
  },

  fade: {
    position: "absolute",
    zIndex: "1000",
    top: "70px",
    width: "100%",
    left: "0",
    padding: "0 15px 50px",
    [theme.breakpoints.up("lg")]: {
      left: "0",
      padding: "0 21px 50px",
    },
    [theme.breakpoints.up("sm")]: {
      left: "0",
      padding: "0 23px 50px",
    },
  },
  header: { paddingBottom: "40px" },

  addSign: {
    position: "absolute",
    zIndex: "1001",
    backgroundColor: green[500],
    color: "white",
    margin: "-25px",
    "&:hover": {
      backgroundColor: "#61cf65",
    },
  },
}));

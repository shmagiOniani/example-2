import { makeStyles } from "@material-ui/core";
//Material-UI Color
import green from "@material-ui/core/colors/green";

export const Styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  container: {
    position: "relative",
  },
  gridContainer: {
    padding: "60px",
  },
  fade: {
    position: "absolute",
    zIndex: "1000",
    top: "70px",
    width: "100%",
    left: "0",
    padding: "0 15px",
    [theme.breakpoints.up("lg")]: {
      left: "0",
      padding: "0 21px",
    },
    [theme.breakpoints.up("sm")]: {
      left: "0",
      padding: "15px 23px",
    },
  },
  fadePaper: {
    padding: "50px 0",
    border: "1px solid gray",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
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
  button: {
    marginBottom: "30px",
    marginRight: theme.spacing(1),
  },

  textarea: {
    padding: "20px 0",
  },
  saveButton: {
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  paper: {
    padding: "20px",
  },
}));

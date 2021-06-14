import { makeStyles } from "@material-ui/core";
export const Styles = makeStyles((theme) => ({
  root: {
    padding: "80px 30px 30px",
  },
  dataTextField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dataContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  saveButton: {
    // textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  deviceFormControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  paper: {
    padding: "20px",
  },
  operand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "50px",
    margin: "0 10px",
    "& > div > input": {
      padding: "10px 0px",
      textAlign: "center",
    },
  },
}));

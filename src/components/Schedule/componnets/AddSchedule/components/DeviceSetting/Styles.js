import { makeStyles } from "@material-ui/core";
export const Styles = makeStyles((theme) => ({
  paper: {
    padding: "20px",
  },
  operand: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > button ": {
      width: "25px!important",
      height: "25px!important",
      minHeight: "unset!important",
      "& > span > svg": {
        width: "17px!important",
        heigt: "17px!important",
      },
    },
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

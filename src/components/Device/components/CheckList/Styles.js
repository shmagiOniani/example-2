import { makeStyles } from "@material-ui/core";

export const Styles = makeStyles((theme) => ({
  root: {
    paddingBottom: "20px",
  },
  errorHeader: {
    "& >*": {
      position: "relative",
    },
  },
  closeButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
}));

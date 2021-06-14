import { makeStyles } from "@material-ui/core/styles";
export const Styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  fade: {
    // height: "10px",
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
    paddingTop: theme.spacing(3),
    "& > svg": {
      cursor: "pointer",
    },
    "& > div": {
      paddingTop: "20px",
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
  input: {
    paddingBottom: "20px",
  },
  checklistItem: {
    padding: "10px",
    position: "relative",
  },
  checkbox: {
    position: "absolute",
    zIndex: "20",
    top: "20px",
    right: "20px",
  },
  main: {
    minHeight: "73vh",
    position: "relative",
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
}));

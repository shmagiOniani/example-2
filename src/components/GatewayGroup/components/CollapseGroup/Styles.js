import { makeStyles } from "@material-ui/core/styles";
export const Styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
  fadeGrid: {
    position: "relative",
  },
  backIcon: {
    position: "absolute",
    top: "20px",
    left: "20px",
    paddingLeft: "6px",
    zIndex: "200",
  },
  deleteButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: "200",
  },
}));

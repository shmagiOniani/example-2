import { makeStyles } from "@material-ui/core/styles";
export const Styles = makeStyles((theme) => ({
  // transfer list
  transferRoot: {
    padding: "10px",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 130,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  transferButton: {
    margin: theme.spacing(0.5, 0),
  },
  //
}));

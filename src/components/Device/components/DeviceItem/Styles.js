import { makeStyles } from "@material-ui/core/styles";
export const Styles = makeStyles((theme) => ({
  cardPaper: {
    borderRadius: "30px",
  },
  deviceContainer: {
    padding: "10px",
  },
  temperature: {
    fontSize: "55px",
    fontWeight: "600",
    color: "hsl(0deg 0% 20%)",
  },
  infoIcon: {
    backgroundColor: "#f6a821",
    "&:hover": {
      backgroundColor: "#d7921c",
    },
  },
  status: {
    height: "20px",
    width: "20px",
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
    fontSize: "15px",
    "& > *": {
      marginRight: "10px",
    },
  },
  selectInput: {
    padding: "50px 10px 15px!important",
  },
}));

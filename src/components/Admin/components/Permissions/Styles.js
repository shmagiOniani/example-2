export const Styles = (theme) => ({
  root: {},
  tableActionSection: {
    display: "flex",
  },
  closeIcon: {
    "& > div > div": {
      position: "relative",
      "& > button": {
        position: "absolute",
        top: "20px",
        right: "calc(50% - 24px)",
        [theme.breakpoints.down("sm")]: {
          top: "0",
        },
      },
    },
  },
});

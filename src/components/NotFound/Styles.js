export const Styles = (theme) => ({
  content: {
    maxWidth: "480px",
    margin: "auto",
    textAlign: "center",
    "& > a": {
      textDecoration: "none",
    },
  },
  header: {
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.625rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.875rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
  },
  illustration: {
    marginTop: theme.spacing(3) * 3,
    marginBottom: theme.spacing(3) * 3,
    width: "100%",
    maxHeight: "240px",
  },
  button: {
    padding: "8px 24px",
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",

    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
});

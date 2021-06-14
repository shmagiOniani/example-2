export const Styles = (theme) => ({
  root: {},
  tableActionSection: {
    display: "flex",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    position: "fixed",
    bottom: "15px",
    right: "13px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    transition: "all 0.2s ease",

    "&:hover": {
      transform: "scale(1.1)",
      cursor: "pointer",
    },
  },
  formActive: {
    position: "fixed",
    zIndex: "101",
    right: "0px",
    bottom: "0px",
    width: "350px",
    height: "365px",
    transition: "all 0.2s ease",
    borderRadius: "10px",
    backgroundColor: " white",
    "&>button": {
      display: "none!important",
    },
    "&:hover": {
      transform: "scale(1)!important",
      cursor: "pointer",
    },
    "& > form": {
      display: "block",
      opacity: "1",
    },
  },
  fullWidth: {
    width: "100vw",
  },
  form: {
    borderTopLeftRadius: "10px",
    padding: "15px 15px 20px 15px",
    display: "none",
    opacity: "0",
    position: "relative",
    height: "100%",
  },
  radioForm: {
    "&>div": {
      display: "flex",
      flexDirection: "initial",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "15px",
    },
  },
  selectForms: {
    "&>div": {
      marginBottom: "15px",
    },
  },
  textfield: {
    display: "inline-grid",
    width: " 100%",
    "&>*": {
      marginBottom: "15px",
    },
  },
  closeButton: {
    boxShadow: "none",
    backgroundColor: "transparent",
    position: "absolute",
    top: "8px",
    right: "8px",
    padding: "0 5px!important",
    "&:hover": {
      backgroundColor: "#d5d5d585!important",
    },
  },
});

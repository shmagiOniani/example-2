import React, { Component } from "react";
// clsx class vidget
import clsx from "clsx";
// Material-ui core components
import {
  Box,
  MenuItem,
  TextField,
  Grid,
  FormLabel,
  withStyles,
  Button,
  Paper,
  IconButton,
  Typography,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
// Material-ui icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// Local Data
import { gatewayData } from "../../../assets/dataImitators/gatewayData";
// Context Component
import { AlertConsumer } from "../../LocalContext/AlertContext";

const styles = (theme) => ({
  hide: {
    display: "none",
  },
  saveButton: {
    textTransform: "none",
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    marginBottom: "20px",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
  varGrid: {
    display: "flex",
    justifyContent: "center",
    "& > p": {
      padding: "8px",
    },
  },
  closeButton: {
    "& > *": {
      padding: "0",
      color: "#f50057",
    },
  },
  alert: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class CreateOperand extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState(1, []);
  }

  handleFirstOperand = (event) => {
    this.setState({
      operand: { ...this.state.operand, firstOperand: event.target.value },
    });
  };

  handleSecondOperand = (event) => {
    this.setState({
      operand: { ...this.state.operand, secondOperand: event.target.value },
    });
  };

  handleOperator = (event) => {
    this.setState({
      operand: { ...this.state.operand, operator: event.target.value },
    });
  };
  // handle gateway arr
  handleFirstGateway = (event) => {
    this.setState({
      operand: { ...this.state.operand, firstGateway: event.target.value },
    });
    const data = gatewayData.find((item) => item.value === event.target.value);
    this.setState({
      firstDevices: data.device,
    });
  };

  handleSecondGateway = (event) => {
    this.setState({
      operand: { ...this.state.operand, secondGateway: event.target.value },
    });
    const data = gatewayData.find((item) => item.value === event.target.value);
    this.setState({
      secondDevices: data.device,
    });
  };
  //
  // handle device arr
  handleFirstDevice = (event) => {
    this.setState({
      operand: { ...this.state.operand, firstDevice: event.target.value },
    });
    const data = this.state.firstDevices.find(
      (item) => item.value === event.target.value
    );
    this.setState({
      firstVariables: data.variables,
    });
  };

  handleSecondDevice = (event) => {
    this.setState({
      operand: { ...this.state.operand, secondDevice: event.target.value },
    });
    const data = this.state.secondDevices.find(
      (item) => item.value === event.target.value
    );
    this.setState({
      secondVariables: data.variables,
    });
  };
  //
  // handle variable arr

  handleFirstVariables = (event) => {
    this.setState({
      operand: { ...this.state.operand, firstVariable: event.target.value },
    });
  };

  handleSecondVariables = (event) => {
    this.setState({
      operand: { ...this.state.operand, secondVariable: event.target.value },
    });
  };

  handleFirstNumber = (event) => {
    this.setState({
      operand: { ...this.state.operand, firstNumber: event.target.value },
    });
  };

  handleSecondNumber = (event) => {
    this.setState({
      operand: { ...this.state.operand, secondNumber: event.target.value },
    });
  };

  handleSuccessAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ openSuccessAlert: false });
  };
  handleWarningAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ openWarningAlert: false });
  };

  handleSubmit = () => {
    if (this.validation()) {
      const result = {
        name: `ცვლადი ${this.state.counter}`,
        id: this.state.counter,
        operand: this.state.operand,
      };
      var newData = this.state.tableData;
      newData.push(result);

      this.setState(this.getDefaultState(++this.state.counter, newData));
      this.setState({ openSuccessAlert: true });
    } else {
      this.setState({ openWarningAlert: true });
    }
    console.log(newData);
  };

  handleVarDelete = (itemId) => {
    const newData = this.state.tableData.filter((item) => item.id !== itemId);
    this.setState({ tableData: [...newData] });
  };

  getDefaultState = (counter, tableData) => {
    return {
      counter,
      operand: {
        firstOperand: "",
        firstGateway: "",
        firstDevice: "",
        firstVariable: "",
        firstNumber: "",
        secondOperand: "",
        secondGateway: "",
        secondDevice: "",
        secondVariable: "",
        secondNumber: "",
        operator: "",
      },
      firstDevices: [],
      secondDevices: [],
      firstVariables: [],
      secondVariables: [],
      tableData,
      openSuccessAlert: false,
      openWarningAlert: false,
      valid: false,
    };
  };

  validation = () => {
    if (
      (this.state.operand.firstVariable ||
        this.state.operand.firstNumber !== "") &&
      (this.state.operand.secondVariable ||
        this.state.operand.secondNumber !== "")
    ) {
      // this.setState({ valid: true });
      console.log("valid");
      return true;
    } else {
      // this.setState({ valid: false });
      console.log("not valid");
      return false;
    }
  };

  render() {
    return (
      <AlertConsumer>
        {(props) => {
          const { variables, setVariable, deleteVariable } = props;
          return (
            <React.Fragment>
              <Paper elevation={3}>
                <Box mt={2} p={3}>
                  <Grid container spacing={2}>
                    {/* first column */}
                    <Grid item xs={12} sm={5}>
                      <Box pb={4}>
                        <TextField
                          label="პირველი ოპერანდი"
                          fullWidth
                          select
                          variant="outlined"
                          id="demo-controlled-open-select"
                          value={this.state.operand.firstOperand}
                          onChange={this.handleFirstOperand}
                        >
                          <MenuItem value={"number"}>რიცხვი</MenuItem>
                          <MenuItem value={"variable"}>
                            არსებული ხელსაწყო
                          </MenuItem>
                        </TextField>
                      </Box>

                      {this.state.operand.firstOperand === "number" ? (
                        <React.Fragment>
                          <Box pb={4}>
                            <TextField
                              label="მიუთითეთ რიცხვის მნიშვნელობა"
                              fullWidth
                              variant="outlined"
                              onChange={this.handleFirstNumber}
                              value={this.state.operand.firstNumber}
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.firstOperand ===
                                  "variable",
                              })}
                            />
                          </Box>
                        </React.Fragment>
                      ) : this.state.operand.firstOperand === "variable" ? (
                        <React.Fragment>
                          <Box pb={4}>
                            <TextField
                              label="აირჩიეთ გეითვეი"
                              select
                              fullWidth
                              variant="outlined"
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.firstOperand === "number",
                              })}
                              onChange={this.handleFirstGateway}
                              value={this.state.operand.firstGateway}
                            >
                              {gatewayData.map((index) => {
                                return (
                                  <MenuItem
                                    value={index.value}
                                    key={index.value}
                                  >
                                    {index.label}
                                  </MenuItem>
                                );
                              })}
                            </TextField>
                          </Box>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                      {this.state.operand.firstGateway !== "" ? (
                        <React.Fragment>
                          <Box pb={4}>
                            <TextField
                              label="აირჩიეთ მოწყობილობა"
                              select
                              fullWidth
                              variant="outlined"
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.firstOperand === "number",
                              })}
                              onChange={this.handleFirstDevice}
                              value={this.state.operand.firstDevice}
                            >
                              {this.state.firstDevices.map((item) => {
                                return (
                                  <MenuItem value={item.value} key={item.id}>
                                    {item.name}
                                    {console.log(item)}
                                  </MenuItem>
                                );
                              })}
                            </TextField>
                          </Box>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                      {this.state.operand.firstDevice !== "" ? (
                        <React.Fragment>
                          <Box pb={4}>
                            <TextField
                              label="აირჩიეთ ცვლადი"
                              select
                              fullWidth
                              variant="outlined"
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.firstOperand === "number",
                              })}
                              onChange={this.handleFirstVariables}
                              value={this.state.operand.firstVariable}
                            >
                              {this.state.firstVariables.map((item) => {
                                return (
                                  <MenuItem value={item.value} key={item.id}>
                                    {item.name}
                                    {console.log(item)}
                                  </MenuItem>
                                );
                              })}
                            </TextField>
                          </Box>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                    </Grid>
                    {/* second column */}
                    <Grid item xs={12} sm={2}>
                      <Box pb={4}>
                        <TextField
                          label="ოპერატორი"
                          select
                          fullWidth
                          variant="outlined"
                          onChange={this.handleOperator}
                          value={this.state.operand.operator}
                        >
                          <MenuItem value={"+"}>+ </MenuItem>
                          <MenuItem value={"-"}>-</MenuItem>
                          <MenuItem value={"*"}>*</MenuItem>
                          <MenuItem value={"/"}>/</MenuItem>
                        </TextField>
                      </Box>
                    </Grid>
                    {/* third column */}
                    <Grid item xs={12} sm={5}>
                      <Box pb={4}>
                        <TextField
                          label="მეორე ოპერანდი"
                          fullWidth
                          select
                          variant="outlined"
                          id="demo-controlled-open-select"
                          value={this.state.operand.secondOperand}
                          onChange={this.handleSecondOperand}
                        >
                          <MenuItem value={"number"}>რიცხვი</MenuItem>
                          <MenuItem value={"variable"}>
                            არსებული ხელსაწყო
                          </MenuItem>
                        </TextField>
                      </Box>
                      {this.state.operand.secondOperand === "number" ? (
                        <React.Fragment>
                          <FormLabel></FormLabel>
                          <Box pb={4}>
                            <TextField
                              label="მიუთითეთ რიცხვის მნიშვნელობა"
                              fullWidth
                              variant="outlined"
                              onChange={this.handleSecondNumber}
                              value={this.state.operand.secondNumber}
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.secondOperand ===
                                  "variable",
                              })}
                            />
                          </Box>
                        </React.Fragment>
                      ) : this.state.operand.secondOperand === "variable" ? (
                        <React.Fragment>
                          <Box pb={4}>
                            <TextField
                              label="აირჩიეთ გეითვეი"
                              select
                              fullWidth
                              variant="outlined"
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.secondOperand === "number",
                              })}
                              onChange={this.handleSecondGateway}
                              value={this.state.operand.secondGateway}
                            >
                              {gatewayData.map((index) => {
                                return (
                                  <MenuItem
                                    value={index.value}
                                    key={index.value}
                                  >
                                    {index.label}
                                  </MenuItem>
                                );
                              })}
                            </TextField>
                          </Box>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                      {this.state.operand.secondGateway !== "" ? (
                        <React.Fragment>
                          <Box pb={4}>
                            <TextField
                              label="აირჩიეთ მოწყობილობა"
                              select
                              fullWidth
                              variant="outlined"
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.secondOperand === "number",
                              })}
                              onChange={this.handleSecondDevice}
                              value={this.state.operand.secondDevice}
                            >
                              {this.state.secondDevices.map((item) => {
                                return (
                                  <MenuItem value={item.value} key={item.id}>
                                    {item.name}
                                    {console.log(item)}
                                  </MenuItem>
                                );
                              })}
                            </TextField>
                          </Box>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                      {this.state.operand.secondDevice !== "" ? (
                        <React.Fragment>
                          <Box pb={4}>
                            <TextField
                              label="აირჩიეთ ცვლადი"
                              select
                              fullWidth
                              variant="outlined"
                              className={clsx({
                                [this.props.classes.hide]:
                                  this.state.operand.secondOperand === "number",
                              })}
                              onChange={this.handleSecondVariables}
                              value={this.state.operand.secondVariable}
                            >
                              {this.state.secondVariables.map((item) => {
                                return (
                                  <MenuItem value={item.value} key={item.id}>
                                    {item.name}
                                    {console.log(item)}
                                  </MenuItem>
                                );
                              })}
                            </TextField>
                          </Box>
                        </React.Fragment>
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        onClick={() => {
                          this.handleSubmit();
                          if (this.validation()) {
                            setVariable(this.state.tableData);
                            console.log(this.state.tableData);
                          }
                        }}
                        className={this.props.classes.saveButton}
                      >
                        შენახვა
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={3}
                      >
                        {/* variables */}
                        {variables.map((item) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              key={item.id}
                              style={{ paddingBottom: "30px" }}
                            >
                              <Paper elevation={3}>
                                <Grid
                                  container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                  spacing={3}
                                >
                                  <Grid item xs={3}>
                                    <Typography variant="body1">
                                      {item.name}
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={6}
                                    md={6}
                                    className={this.props.classes.varGrid}
                                  >
                                    <Typography variant="body2">
                                      {item.operand.firstOperand === "number"
                                        ? item.operand.firstNumber
                                        : item.operand.firstOperand ===
                                          "variable"
                                        ? item.operand.firstVariable
                                        : ""}
                                    </Typography>
                                    <Typography variant="body2">
                                      {item.operand.operator}
                                    </Typography>
                                    <Typography variant="body2">
                                      {item.operand.secondOperand === "number"
                                        ? item.operand.secondNumber
                                        : item.operand.secondOperand ===
                                          "variable"
                                        ? item.operand.secondVariable
                                        : ""}
                                    </Typography>
                                  </Grid>
                                  <Grid
                                    item
                                    xs={3}
                                    md={3}
                                    className={this.props.classes.closeButton}
                                  >
                                    <IconButton
                                      component="span"
                                      onClick={() => {
                                        deleteVariable(item.id);
                                        // setVariable(this.state.tableData);
                                        this.handleVarDelete(item.id);
                                      }}
                                    >
                                      <HighlightOffIcon />
                                    </IconButton>
                                  </Grid>
                                </Grid>
                              </Paper>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
              <div className={this.props.classes.alert}>
                <Snackbar
                  open={this.state.openSuccessAlert}
                  autoHideDuration={6000}
                  onClose={this.handleSuccessAlertClose}
                >
                  <Alert
                    onClose={this.handleSuccessAlertClose}
                    severity="success"
                  >
                    ცვლადი წარმატებით დაემატა!
                  </Alert>
                </Snackbar>
                <Snackbar
                  open={this.state.openWarningAlert}
                  autoHideDuration={6000}
                  onClose={this.handleWarningAlertClose}
                >
                  <Alert
                    onClose={this.handleWarningAlertClose}
                    severity="error"
                  >
                    ცვლადის დასამატებლად აუცილებელია შეავსოთ ველები!
                  </Alert>
                </Snackbar>
              </div>
            </React.Fragment>
          );
        }}
      </AlertConsumer>
    );
  }
}

export default withStyles(styles)(CreateOperand);

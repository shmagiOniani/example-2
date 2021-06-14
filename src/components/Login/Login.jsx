import React, { Component } from "react";
// REact-Router Components
import { Link } from "react-router-dom";
// Axios
import axios from "axios";
// Material-UI Components
import {
  Avatar,
  Container,
  Button,
  CssBaseline,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// Local Components
import Input from "../Input/Input";
// Local Data
import { data } from "./data";
// Styles
import { Styles } from "./Styles";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authErrors: [],
      formValues: {
        login: "",
        password: "",
      },
      formErrors: {
        login: "",
        password: "",
      },
      formValidity: {
        login: false,
        password: false,
      },
      isSubmitting: false,
      searchNodes: "",
    };
  }

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    target.type === "checkbox"
      ? (formValues[target.name] = target.checked)
      : (formValues[target.name] = target.value);
    this.setState({ formValues });
    this.handleValidation(target);
  };

  handleValidation = (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    switch (name) {
      case "firstname":
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid name`;
        break;
      case "password":
        validity[name] = value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/);
        validity[name] = value.length >= 9;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 9 characters minimum`;
        break;
      default:
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} can be your mobile or email`;
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
    // console.log(this.state.authErrors);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      axios
        .post("http://localhost/PHP-React/login.php", this.state.formValues)
        .then((response) => {
          if (response.data.verified) {
            localStorage.setItem("userKey", JSON.stringify(response.data));
            return this.props.history.push("/Dashboard/Application");
          } else {
            this.setState({
              authErrors: response.data,
            });
          }
        })
        .catch((err) => {
          console.log(err, "error");
        });
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key],
        };
        this.handleValidation(target);
      }
    }
  };

  confirmPassword = ({ value }) => {
    const password = this.state.formValues["password"];
    return value === password;
  };

  popUp = (errorArr, key) => {
    if (errorArr[key]) {
      return <span className={this.props.classes.error}>{errorArr[key]}</span>;
    }
  };
  render() {
    const { formValues, formErrors } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={this.props.classes.paper}>
          <Avatar className={this.props.classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={this.props.classes.form}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <Grid container spacing={3}>
              {data.map((inner) => (
                <Grid item xs={12} key={inner.userId}>
                  <Input
                    key={inner.userId}
                    inputType={inner.inputType}
                    userId={inner.userId}
                    userName={inner.userName}
                    userLabel={inner.userLabel}
                    handleChange={this.handleChange}
                    inputValue={formValues[inner.userName]}
                    error={formErrors[inner.userName]}
                    autoComplete={inner.userName}
                    variant={inner.variant}
                  >
                    {this.popUp(this.state.authErrors, "login_err")}
                  </Input>
                </Grid>
              ))}
            </Grid>
            {this.popUp(this.state.authErrors, "login_err")}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={this.props.classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs={6}>
                <Link to="#">Forgot password?</Link>
              </Grid>
              <Grid item xs={6}>
                <Link to="/Registration">Register Now</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default withStyles(Styles)(Login);

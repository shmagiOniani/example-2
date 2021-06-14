import React from "react";
import axios from "axios";
// Material-UI Core Components
import {
  Grid,
  withStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

// Component's inner material
import { inputArr } from "./inputArr";
// Local Component
import Input from "../Input/Input";

const styles = () => ({
  container: {
    margin: "0",
    justifyContent: "flex-end",
  },
  buttons: {
    margin: "20px",
  },
  submit: {
    marginLeft: "16px!important",
  },
  success: {
    backgroundColor: "rgb(0, 171, 85)",
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "rgb(0, 123, 85)",
      boxShadow: "none",
    },
  },
});

export class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authErrors: [],
      formValues: {
        email: "",
        displayName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthDate: "",
        personalNumber: "",
        position: "",
        profession: "",
        gender: "",
        jobStartDate: "",
        workAddress: "",
        workZipCode: "",
        secondaryEmail: "",
        secondaryPhone: "",
        relativePhone: "",
        legalAddress: "",
        factAddress: "",
        bloodGroup: "",
        bloodType: "",
        allergy: "",
        smoker: "",
        convictions: "",
        marriageStatus: "",
        bankName: "",
        bankCode: "",
        accountNumber: "",
        customWorkingTime: "",
        salaryInterval: "",
        salary: "",
        salaryBonus: "",
        salaryCurrency: "",
      },
      formErrors: {
        email: "",
        displayName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        birthDate: "",
        personalNumber: "",
        position: "",
        profession: "",
        gender: "",
        jobStartDate: "",
        workAddress: "",
        workZipCode: "",
        secondaryEmail: "",
        secondaryPhone: "",
        relativePhone: "",
        legalAddress: "",
        factAddress: "",
        bloodGroup: "",
        bloodType: "",
        allergy: "",
        smoker: "",
        convictions: "",
        marriageStatus: "",
        bankName: "",
        bankCode: "",
        accountNumber: "",
        customWorkingTime: "",
        salaryInterval: "",
        salary: "",
        salaryBonus: "",
        salaryCurrency: "",
      },
      formValidity: {
        email: false,
        displayName: false,
        firstName: false,
        lastName: false,
        phoneNumber: false,
        birthDate: false,
        personalNumber: false,
        position: false,
        profession: false,
        gender: false,
        jobStartDate: false,
        workAddress: false,
        workZipCode: false,
        secondaryEmail: false,
        secondaryPhone: false,
        relativePhone: false,
        legalAddress: false,
        factAddress: false,
        bloodGroup: false,
        bloodType: false,
        allergy: false,
        smoker: false,
        convictions: false,
        marriageStatus: false,
        bankName: false,
        bankCode: false,
        accountNumber: false,
        customWorkingTime: false,
        salaryInterval: false,
        salary: false,
        salaryBonus: false,
        salaryCurrency: false,
      },
      isSubmitting: false,
      additable: false,
    };
  }

  handleValidation = (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;

    switch (name) {
      case "email":
        validity[name] = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`;
        break;
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
      case "cPassword":
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} is required and cannot be empty`;

        validity[name] = this.confirmPassword(target);
        // console.log(validity[name]);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : ` password does not match`;
        break;
      case "phone":
      case "mobile":
        validity[name] = value.length >= 9;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} must be more than 9 digits`;
        break;
      default:
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} is required and can not be empty`;
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });
    const { formValues, formValidity } = this.state;
    if (Object.values(formValidity).every(Boolean)) {
      axios
        .post(
          "http://localhost/portall-test-users-table/registration.php",
          this.state.formValues
        )
        .then((response) => {
          console.log(response.data);
          if (response.data === "success") {
            console.log("success");
          } else {
            this.setState({
              authErrors: response.data,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ isSubmitting: false });
    } else {
      for (let key in formValues) {
        let target = {
          name: key,
          value: formValues[key],
        };
        this.handleValidation(target);
      }
      this.setState({ isSubmitting: false });
    }
  };

  confirmPassword = ({ value }) => {
    const password = this.state.formValues["password"];
    return value === password;
  };

  popUp = (errorArr, key) => {
    if (errorArr[key]) {
      return <span className="db-error">{errorArr[key]}</span>;
    }
  };

  handleSubmite = (e, formValidity, authErrors, submitable) => {
    if (formValidity && authErrors === "register") {
      return (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={this.props.classes.success}
          disabled={submitable}
          onClick={this.props.close}
        >
          Successfully Registered
        </Button>
      );
    } else {
      return (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={this.props.classes.submit}
          disabled={submitable}
        >
          {console.log(submitable)}
          Submit
        </Button>
      );
    }
  };

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    target.type === "checkbox"
      ? (formValues[target.name] = target.checked)
      : (formValues[target.name] = target.value);
    this.setState({ formValues });
    this.handleValidation(target);
  };

  render() {
    const { formValues, formErrors, isSubmitting } = this.state;

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.close}
          aria-labelledby="form-dialog-title"
          maxWidth={"md"}
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <form
              noValidate
              onSubmit={this.handleSubmit}
              className={this.props.classes.form}
            >
              <Grid
                container
                spacing={2}
                className={this.props.classes.container}
              >
                {inputArr.map((inner) => (
                  <Grid item xs={inner.xs} sm={inner.sm} key={inner.userId}>
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
                      additable={this.state.additable}
                    >
                      {inner.option
                        ? inner.option.map((option) => (
                            <MenuItem key={option.key} value={option.key}>
                              {option.name}
                            </MenuItem>
                          ))
                        : ""}
                    </Input>
                    <FormHelperText id="my-helper-text">
                      {this.popUp(this.state.authErrors, inner.error)}
                    </FormHelperText>
                  </Grid>
                ))}
                <DialogActions className={this.props.classes.buttons}>
                  <Button
                    onClick={this.props.close}
                    color="secondary"
                    variant="contained"
                  >
                    Cancel
                  </Button>

                  {this.handleSubmite(
                    Object.values(this.state.formValidity).every(Boolean),
                    this.state.authErrors,
                    isSubmitting
                  )}
                </DialogActions>
              </Grid>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(AddForm);

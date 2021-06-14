import React, { Component } from "react";
import Input from "../../../../../Input/Input";
// Material-Ui core components
import {
  Button,
  Grid,
  withStyles,
  MenuItem,
  Paper,
  CssBaseline,
  Container,
  FormHelperText,
} from "@material-ui/core";

// Context Components
import { AdminConsumer } from "../../../../../LocalContext/AdminContext";
// Styles
import { Styles } from "./Styles";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authErrors: [],
      formValues: {
        // id: this.props.rowData.id,
        firstname: "",
        lastname: "",
        personalId: "",
        email: "",
        mobile: "",
        gender: "",
        bloodGroup: "",
        bloodBandar: "",
        allergy: "",
        smoker: "",
        previousConvictions: "",
        married: "",
        secondMobile: "",
        relativeMobile: "",
        birthDate: "",
        secondEmail: "",
        firstAddress: "",
        secondAddress: "",
        bankName: "",
        bankCode: "",
        bankAccount: "",
        profession: "",
        workAddress: "",
        workZip: "",
        flexitime: "",
        salaryPeriod: "",
        salary: "",
        overtimeSalary: "",
        currency: "",
        startWorking: "",
        password: "",
        cPassword: "",
        position: "",
      },
      formErrors: {
        firstname: "",
        lastname: "",
        personalId: "",
        email: "",
        mobile: "",
        role: "",
        gender: "",
        bloodGroup: "",
        bloodBandar: "",
        allergy: "",
        smoker: "",
        previousConvictions: "",
        married: "",
        secondMobile: "",
        relativeMobile: "",
        birthDate: "",
        secondEmail: "",
        firstAddress: "",
        secondAddress: "",
        bankName: "",
        bankCode: "",
        bankAccount: "",
        profession: "",
        workAddress: "",
        workZip: "",
        flexitime: "",
        salaryPeriod: "",
        salary: "",
        overtimeSalary: "",
        currency: "",
        startWorking: "",
        password: "",
        cPassword: "",
        position: "",
      },
      formValidity: {
        firstname: false,
        lastname: false,
        personalId: false,
        email: false,
        mobile: false,
        gender: true,
        bloodGroup: true,
        bloodBandar: true,
        allergy: true,
        smoker: true,
        previousConvictions: true,
        married: true,
        secondMobile: true,
        relativeMobile: true,
        birthDate: true,
        secondEmail: true,
        firstAddress: true,
        secondAddress: true,
        bankName: true,
        bankCode: true,
        bankAccount: true,
        profession: true,
        workAddress: true,
        workZip: true,
        flexitime: true,
        salaryPeriod: true,
        salary: true,
        overtimeSalary: true,
        currency: true,
        startWorking: true,
        password: true,
        cPassword: true,
        position: true,
      },
      isSubmitting: true,
      counter: 0,
    };
  }

  handleValidation = (target) => {
    const { name, value } = target;
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    console.log("handleValidation");

    switch (name) {
      case "email":
        validity[name] = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : ` მითითებული ელ.ფოსტა არ არის ვარგისი`;
        break;
      case "firstname":
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : ` ველის შევსება აუცილებელია`;
        break;
      case "lastname":
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : ` ველის შევსება აუცილებელია`;
        break;
      case "personalId":
        validity[name] = value.length > 0;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : ` ველის შევსება აუცილებელია`;
        break;
      // case "password":
      //   validity[name] = value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/);
      //   validity[name] = value.length >= 9;
      //   fieldValidationErrors[name] = validity[name]
      //     ? ""
      //     : `${name} should be 9 characters minimum`;
      //   break;
      // case "cPassword":
      //   validity[name] = value.length > 0;
      //   fieldValidationErrors[name] = validity[name]
      //     ? ""
      //     : `${name} is required and cannot be empty`;

      //   validity[name] = this.confirmPassword(target);
      //   // console.log(validity[name]);
      //   fieldValidationErrors[name] = validity[name]
      //     ? ""
      //     : ` password does not match`;
      //   break;
      case "phone":
      case "mobile":
        validity[name] = value.length >= 9;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `მობილურის ნომერი უნდა შეიცავდეს 9 ციფრს`;
        break;
      default:
        // validity[name] = value.length > 0;
        // fieldValidationErrors[name] = validity[name]
        //   ? ""
        //   : `${name} is required and can not be empty`;
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      formValidity: validity,
    });
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

  handleChange = ({ target }) => {
    const { formValues } = this.state;
    target.type === "checkbox"
      ? (formValues[target.name] = target.checked)
      : (formValues[target.name] = target.value);
    this.setState({ formValues });
    this.handleValidation(target);
  };

  render() {
    const { formValues, formErrors } = this.state;

    return (
      <AdminConsumer>
        {(props) => {
          const { userEditInputTypes, setData } = props;
          return (
            <Container component="main">
              <CssBaseline />
              {/* <main className={this.props.classes.root}> */}
              <Paper elevation={4} className={this.props.classes.paper}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                >
                  {/* choose parent */}
                  {/* <Grid item xs={12}>
                    <TextField value={this.props.rowData.id} />
                  </Grid> */}
                  {userEditInputTypes.map((inner) => (
                    <Grid item xs={inner.xs} sm={inner.sm} key={inner.userId}>
                      {/* {console.log(inner.userId)} */}
                      <Input
                        key={inner.userId}
                        inputType={inner.inputType}
                        // userId={inner.userId}
                        userName={inner.userName}
                        userLabel={inner.userLabel}
                        handleChange={this.handleChange}
                        inputValue={formValues[inner.userName]}
                        error={formErrors[inner.userName]}
                        autoComplete={inner.userName}
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

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={this.props.classes.submit}
                    onClick={(e) => {
                      e.preventDefault();
                      const { formValues, formValidity } = this.state;
                      console.log(formValidity, "formValidity");
                      if (!Object.values(formValidity).includes(false)) {
                        setData(formValues);
                        console.log("yes");
                      } else {
                        console.log("No");

                        for (let key in formValues) {
                          let target = {
                            name: key,
                            value: formValues[key],
                          };
                          this.handleValidation(target);
                        }
                        this.setState({ isSubmitting: false });
                      }
                      // updateData(this.props.rowData, formValues);
                      // this.setState({ formValues: {} });
                      console.log(formValues);
                    }}
                  >
                    შენახვა
                  </Button>
                </Grid>
              </Paper>
              {/* </main> */}
            </Container>
          );
        }}
      </AdminConsumer>
    );
  }
}

export default withStyles(Styles)(EditForm);

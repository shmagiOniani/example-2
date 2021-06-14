import React, { Component } from "react";
// Material-Ui core components
import {
  Button,
  Grid,
  withStyles,
  Paper,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";

// Context Components
import { AdminConsumer } from "../../../../../LocalContext/AdminContext";
// Styles
import { Styles } from "./Styles";

let today = new Date();
let date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.editDataArr ? this.props.editDataArr[0] : "",
      description: this.props.editDataArr ? this.props.editDataArr[1] : "",
      // permissions of copied element
      permissions: this.props.copyPermissions,
      date: date,
    };
  }

  // componentWillMount = ( ) => {
  //   this.setState({name: this.props.editDataArr ? this.props.editDataArr[0] : "",
  //                 description: this.props.editDataArr ? this.props.editDataArr[1] : ""}),
  // }
  render() {
    const { name, description } = this.state;
    return (
      <AdminConsumer>
        {(props) => {
          const { addPermission } = props;
          return (
            <Paper elevation={4} className={this.props.classes.paper}>
              <Container>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={3}
                  className={this.props.classes.formContainer}
                >
                  <Grid item xs={12}>
                    <button
                      onClick={() =>
                        console.log(this.props.editDataArr[1], description)
                      }
                    >
                      check
                    </button>
                    <Typography variant="h5">როლის დამატება</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className={this.props.classes.inputContainer}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={name}
                      label="დასახელება"
                      onChange={(e) => this.setState({ name: e.target.value })}
                      helperText="ესვ ველი აუცილებელია იყოს შევსებული"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    className={this.props.classes.inputContainer}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      value={description}
                      label="აღწერა"
                      onChange={(e) =>
                        this.setState({ description: e.target.value })
                      }
                      helperText="."
                    />
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={this.props.classes.submit}
                    onClick={() => {
                      this.setState({ date: date });
                      addPermission(Object.values(this.state));
                      this.setState({
                        name: "",
                        description: "",
                        permissions: "",
                      });
                      this.props.status(false, true);
                    }}
                  >
                    შენახვა
                  </Button>
                </Grid>
              </Container>
            </Paper>
          );
        }}
      </AdminConsumer>
    );
  }
}

export default withStyles(Styles)(AddForm);

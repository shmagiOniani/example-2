import React, { Component } from "react";
// React-Router Component
import { Link } from "react-router-dom";
// Image
import illustration from "../../assets/img/illustration_404.svg";
// Material-UI Core Components
import {
  Typography,
  Container,
  CssBaseline,
  withStyles,
  Box,
  Button,
} from "@material-ui/core";
// Styles
import { Styles } from "./Styles";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box pt={3} className={this.props.classes.content}>
            <Typography
              paragraph
              variant="h3"
              className={this.props.classes.header}
            >
              Sorry, page not found!
            </Typography>
            <Typography variant="body1">
              Sorry, we couldn’t find the page you’re looking for. Perhaps
              you’ve mistyped the URL? Be sure to check your spelling.
            </Typography>
            <img
              src={illustration}
              alt="404 illustration"
              className={this.props.classes.illustration}
            />
            <Link to="/">
              <Button variant="contained" className={this.props.classes.button}>
                Go To Home
              </Button>
            </Link>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(Styles)(NotFound);

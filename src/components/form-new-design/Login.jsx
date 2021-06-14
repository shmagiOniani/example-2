import React from "react";
import { Link } from "react-router-dom";
// Material-UI Core Components
import {
  Grid,
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
// Material-UI Icons
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Styles } from "./LoginStyles";

export default function Login() {
  const classes = Styles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs={6}>
              <Link to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/Registration" variant="body2">
                Register Now
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

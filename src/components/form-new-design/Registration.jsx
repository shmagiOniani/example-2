import React from "react";
// Material-UI Core Components
import {
  Link,
  Container,
  Avatar,
  Grid,
  Button,
  CssBaseline,
  TextField,
  Typography,
} from "@material-ui/core";
// Material-UI Icons
import CreateIcon from "@material-ui/icons/Create";
import TelegramIcon from "@material-ui/icons/Telegram";
// Local Resource
import { data } from "./Data";
import { Styles } from "RegistrationStyles.js";

export default function Registration() {
  const classes = Styles();
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CreateIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.header}>
          Registration
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            {data.map((inner) => (
              <Grid item xs={inner.xs} sm={inner.sm} key={inner.userId}>
                <TextField
                  variant={inner.variant}
                  required
                  fullWidth
                  id={inner.userId}
                  label={inner.userLabel}
                  name={inner.userName}
                  autoComplete={inner.userName}
                />
              </Grid>
            ))}
            <Grid container className={classes.grid}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                startIcon={<TelegramIcon />}
              >
                <Link href="/Login" variant="body2" color="inherit">
                  Submit
                </Link>
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

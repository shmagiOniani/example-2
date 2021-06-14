import React from "react";
// Material-Ui core components
import {
  Grid,
  Typography,
  Paper,
  CssBaseline,
  Container,
} from "@material-ui/core";
// Styles
import { Styles } from "./Styles";

function ShowForm(prop) {
  const classes = Styles();

  return (
    <Container component="main">
      <CssBaseline />
      <Paper elevation={4} className={classes.paper}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {/* choose parent */}
          {/* <Grid item xs={12}>
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={roleList}
                      />
                    </Grid> */}
          {console.log(prop.data)}
          {Object.keys(prop.data).map((key, index) => {
            return (
              <Grid item xs={12} sm={4} key={index}>
                <Typography>
                  {key}: {prop.data[key]}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
}

export default ShowForm;

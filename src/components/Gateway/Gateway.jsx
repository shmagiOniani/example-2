import React from "react";
// Material-ui Core Components
import { CssBaseline, Container, Grid } from "@material-ui/core";
// Local Components
import GatewayComponent from "./components/GatewayComponent";
// Local Data
import { gatewayData } from "../../assets/dataImitators/gatewayData";
// Styles
import { Styles } from "./Styles";

function Gateway() {
  const classes = Styles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container>
        <Grid container spacing={3}>
          {gatewayData.map((index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index.model}>
                <GatewayComponent
                  model={index.model}
                  status={index.status}
                  label={index.label}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default Gateway;

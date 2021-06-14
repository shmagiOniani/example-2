import React from "react";
// Material Core Components
import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
  Divider,
} from "@material-ui/core";
// Material-UI Icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
// Context Component
import { DeviceConsumer } from "../../../LocalContext/DeviceContext";
// Styles
import { Styles } from "./Styles";

function Error() {
  const classes = Styles();
  return (
    <DeviceConsumer>
      {(props) => {
        const { errors } = props;

        return (
          <Container className={classes.root}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              {errors.map((item) => {
                return (
                  <Grid item xs={11} key={item.id}>
                    <Paper elevation={4}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                      >
                        <Grid item xs={12} className={classes.errorHeader}>
                          <Box p={2}>
                            <Typography variant="body1">{item.name}</Typography>
                            <IconButton
                              component="span"
                              color="secondary"
                              className={classes.closeButton}
                            >
                              <HighlightOffIcon />
                            </IconButton>
                          </Box>
                          <Divider />
                        </Grid>
                        <Grid item xs={12}>
                          <Box p={4}>
                            <Typography variant="body2">
                              {item.content}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        );
      }}
    </DeviceConsumer>
  );
}

export default Error;

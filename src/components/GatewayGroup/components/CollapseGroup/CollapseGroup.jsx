import React from "react";
// Maetrial-Ui Core Components
import { Fab, Grid, Typography, Tooltip } from "@material-ui/core";
// Material-Ui Icons
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteIcon from "@material-ui/icons/Delete";

// Context Components
import { GatewayGroupConsumer } from "../../../LocalContext/GatewayGroupContext";
// Local Data
// import { gatewayData } from "../../../../assets/dataImitators/gatewayData";
// Local Componnets
import GatewayComponent from "../../../Gateway/components/GatewayComponent";
// Local styles
import { Styles } from "./Styles";

function CollapseGroup(prop) {
  const classes = Styles();

  return (
    <GatewayGroupConsumer>
      {(props) => {
        const { groupsContent, deleteGroup } = props;
        return (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.fadeGrid}
          >
            <Tooltip title="ჯგუფიდან გამოსვლა" arrow>
              <Fab
                size="medium"
                color="primary"
                aria-label="add"
                className={classes.backIcon}
                onClick={() => {
                  prop.close(false);
                }}
              >
                <ArrowBackIosIcon />
              </Fab>
            </Tooltip>
            {/* delete button */}
            <Tooltip title="ჯგუფის წაშლა" arrow>
              <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.deleteButton}
                onClick={() => {
                  deleteGroup(prop.name);
                  prop.deleteGroup(prop.name);
                  prop.close(false);
                }}
              >
                <DeleteIcon />
              </Fab>
            </Tooltip>
            {/* group header */}
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.header}>
                {prop.name}
              </Typography>
            </Grid>
            {/* group elements */}
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                {groupsContent.map((item, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={item.model}>
                      <GatewayComponent
                        model={item.model}
                        status={item.status}
                        label={item.label}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </GatewayGroupConsumer>
  );
}

export default CollapseGroup;

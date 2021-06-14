import React, { useState } from "react";
// Material-Ui Core Components
import {
  CssBaseline,
  Container,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Button,
  Fab,
  Collapse,
} from "@material-ui/core";
import { Icon } from "@material-ui/core";

// Material-UI Table
import { DataGrid } from "@material-ui/data-grid";
// Material-Ui icons
import AddIcon from "@material-ui/icons/Add";
// Local Data
import { gatewayData } from "../../assets/dataImitators/gatewayData";
// Styles
import { Styles } from "./Styles";

const columns = [
  { field: "type", headerName: "ტიპი", width: 130 },
  { field: "content", headerName: "შიგთავსი", width: 500 },
];

const rows = [
  {
    id: 1,
    content: "SnowSnow Snow Snow Snow Snow Snow Snow Snow Snow",
    type: "SMS",
  },
  {
    id: 2,
    content:
      "LannisterLannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister",
    type: "Email",
  },
  {
    id: 3,
    content:
      "LannisterLannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister Lannister",
    type: "SMS",
  },
  {
    id: 4,
    content: "StarkStark Stark Stark Stark Stark Stark Stark Stark Stark",
    type: "Email",
  },
  {
    id: 5,
    content:
      "TargaryenTargaryen Targaryen Targaryen Targaryen Targaryen Targaryen Targaryen Targaryen Targaryen",
    type: "SMS",
  },
  {
    id: 6,
    content:
      "MelisandreMelisandre Melisandre Melisandre Melisandre Melisandre Melisandre Melisandre Melisandre Melisandre",
    type: "SMS",
  },
  {
    id: 7,
    content:
      "CliffordClifford Clifford Clifford Clifford Clifford Clifford Clifford Clifford Clifford",
    type: "Email",
  },
  {
    id: 8,
    content:
      "FrancesFrances Frances Frances Frances Frances Frances Frances Frances Frances",
    type: "Email",
  },
  {
    id: 9,
    content: "RoxieRoxie Roxie Roxie Roxie Roxie Roxie Roxie Roxie Roxie",
    type: "Email",
  },
];

export default function MailTemplate() {
  const classes = Styles();

  const [checked, setChecked] = useState(false);
  const [mailType, setMailType] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const [deviceData, setDeviceData] = React.useState([]);
  const [variableData, setVariableData] = React.useState([]);

  const [actionArr, setActionArr] = React.useState([]);

  const handleDevice = (e) => {
    setActionArr({ ...actionArr, device: e.target.value });
    const data = deviceData.find((item) => item.value === e.target.value);
    setVariableData(data.variables);
    console.log(variableData);
  };

  const handleGateway = (e) => {
    setActionArr({ ...actionArr, gateway: e.target.value });
    const data = gatewayData.find((item) => item.value === e.target.value);
    setDeviceData(data.device);
  };

  const handleVariable = (item) => {
    setContent(content + item);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleMailtype = (e) => {
    setMailType(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <Typography variant="h5" className={classes.header}>
          შეტყობინების შაბლონები
        </Typography>
        <Fab
          aria-label="add"
          className={classes.addSign}
          onClick={handleChange}
        >
          <AddIcon />
        </Fab>
        <div className={classes.fade}>
          <Collapse in={checked}>
            <Grid container spacing={3} className={classes.fadePaper}>
              <Grid item xs={12}>
                <Typography variant="h6" className={classes.header}>
                  შაბლონის დამატება
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6">დეტალური ინფორმაცია</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        id="demo-controlled-open-select"
                        value={mailType}
                        onChange={handleMailtype}
                        // className={classes.textfield}
                        label="აირჩიეთ შეტყობინების ტიპი"
                      >
                        <MenuItem value={"sms"}>SMS</MenuItem>
                        <MenuItem value={"email"}>ელ.ფოსტა</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        onChange={handleName}
                        value={name}
                        label="მიუთითეთ დასახელება"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        გამოიყენეთ მოწყობილობის ცვლადები
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        id="demo-controlled-open-select"
                        value={actionArr.gateway ? actionArr.gateway : ""}
                        onChange={handleGateway}
                        label="აირჩიეთ გეითვეი"
                      >
                        {gatewayData.map((index) => {
                          return (
                            <MenuItem key={index.model} value={index.value}>
                              {index.label}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        value={actionArr.device ? actionArr.device : ""}
                        onChange={handleDevice}
                        label="აირჩიეთ მოწყობილობა"
                        className={classes.textfield}
                      >
                        {deviceData.map((index) => {
                          return (
                            <MenuItem key={index.id} value={index.value}>
                              {index.name}
                            </MenuItem>
                          );
                        })}
                      </TextField>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      spacing={3}
                    >
                      {variableData.map((index) => {
                        return (
                          <Grid key={index.value} item>
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.button}
                              endIcon={<Icon>send</Icon>}
                              onClick={() => handleVariable(index.name)}
                            >
                              {index.name}
                            </Button>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                  <Typography variant="h6">შეიყვანეთ შეტყობინება</Typography>
                  <TextField
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                    onChange={handleContent}
                    value={content ? content : ""}
                    className={classes.textarea}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" className={classes.saveButton}>
                  შენახვა
                </Button>
              </Grid>
            </Grid>
          </Collapse>
        </div>
        <Paper>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              checkboxSelection
            />
          </div>
        </Paper>
      </Container>
    </div>
  );
}

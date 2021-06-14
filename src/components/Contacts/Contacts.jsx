import React from "react";
// Material-UI core components
import { Container, makeStyles, Typography } from "@material-ui/core";
// Material Table
import MUIDataTable from "mui-datatables";
// Local Data
import { data } from "./data";

const styles = makeStyles((theme) => ({
  header: {
    paddingBottom: "40px",
  },
}));

export default function Contacts() {
  const classes = styles();

  const columns = [
    "სახელი გვარი",
    "პირადი ნომერი",
    "ძირითადი ელ.ფოსტა",
    "ძირითადი ტელეფონი",
    "დაბადების თარიღი",
    "თანამდებობა",
    "როლი",
  ];

  const options = {
    filterType: "dropdown",
    selectableRows: "none",
    responsive: "vertical",
  };

  return (
    <Container>
      <Typography variant="h5" className={classes.header}>
        კონტაქტების სია
      </Typography>
      <MUIDataTable
        title={"კონტაქტების სია"}
        data={data}
        columns={columns}
        options={options}
      />
    </Container>
  );
}

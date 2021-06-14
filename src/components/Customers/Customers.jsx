import React from "react";
// Material Table
import MUIDataTable from "mui-datatables";
// Local Data
import { data } from "./data";

export default function Customers() {
  const columns = [
    "ორგანიზაციის დასახელება",
    "საიდენტიფიკაციო კოდი",
    "მისამართი",
  ];

  const options = {
    filterType: "dropdown",
    responsive: "vertical",
    selectableRows: "none",
  };

  return (
    <MUIDataTable
      title={"მომხმარებელთა სია"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

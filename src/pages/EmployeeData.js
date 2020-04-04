import React from "react";
import { MDBDataTable } from "mdbreact";

const EmployeeData = (props) => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 270,
      },
      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 200,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 200,
      },
      {
        label: "DOB",
        field: "dob",
        sort: "asc",
        width: 200,
      },
    ],
  };
  console.log("Props", props);
  return <MDBDataTable striped />;
};

export default EmployeeData;

import React from "react";
import axios from "axios";

import EmployeeData from "./EmployeeData";

class Employee extends React.Component{
    state ={
        employeeRecords : []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=500&nat=us")
        .then(function(records){
            let empdata = records.data.results
            let employeeRecordstemp = []
            for(let i=0;i<empdata.length;i++){
                let erecord ={
                    name: empdata.first+" "+empdata.last,
                    email:empdata.email,
                    image:empdata.picture.medium,
                    phone:empdata.cell,
                    dob:empdata.dob.date
                }
                employeeRecordstemp.push(erecord)
            }
            console.log(records)
            this.setState({employeeRecords : employeeRecordstemp})
        })
    }

    render(){
        return(<div>
            <h2>Employee Details</h2>
            <EmployeeData employees = {this.state.employeeRecords} />>
        </div>
        )
    }
}

export default Employee;
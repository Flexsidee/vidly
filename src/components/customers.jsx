import React, {Component} from "react";
import Table from "./common/table";
import {getCustomers }from "../services/customersService.js";

class Customers extends Component {
  state = {  
    customers: [],
    sortColumn: { path: "name", order: "asc" },
  }

  columns = [
    {path: 'name', label: 'Customers'},
    {path:'email', label: 'Email'}
  ]

  async componentDidMount() {
    const {data} = await getCustomers();
    const customers = [...data];
    this.setState({customers});
    console.log(customers);
  }

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  
  render() { 
    const { onSort, sortColumn, customers } = this.state;
    
    return (
      <Table
        onSort={this.handleSort}
        columns={this.columns}
        data={customers}
        sortColumn={sortColumn}
      />
    );
  }
}
 
export default Customers;

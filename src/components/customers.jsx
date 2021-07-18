import React, {Component} from "react";
import Table from "./common/table";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchBox";
import Loading from "./common/loading";
import {getCustomers }from "../services/customersService.js";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Customers extends Component {
  state = {  
    loading: true,
    customers: [],
    currentPage: 1,
    pageSize: 10,
    sortColumn: { path: "name", order: "asc" },
  }

  columns = [
    {path: 'name', label: 'Users'},
    {path:'email', label: 'Email'}
  ]

  async componentDidMount() {
    const {data} = await getCustomers();
    const customers = [...data];
    
    demoAsyncCall().then(() => this.setState({customers, loading: false }));
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      searchQuery,
      customers: allCustomers,
      sortColumn,
    } = this.state;

    let filtered = allCustomers;
    if (searchQuery)
      filtered = allCustomers.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
   
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const customers = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: customers };
  };
  
  renderTags() { 
    const { pageSize, currentPage, sortColumn } = this.state;
    
    const { totalCount, data: customers } = this.getPageData();
    
    return (
      <React.Fragment>
        <SearchBox
          value={this.state.searchQuery}
          onChange={this.handleSearch}
        />
        <Table
          onSort={this.handleSort}
          columns={this.columns}
          data={customers}
          sortColumn={sortColumn}
        />
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Loading />; //render null when app is not ready
    }
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }
}


function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}
 
export default Customers;

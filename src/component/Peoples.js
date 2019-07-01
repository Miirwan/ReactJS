import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { connect } from "react-redux";
import { getPoeplesData, changePeopleFilter } from "../redux/people/actions";

class Peoples extends Component {
  constructor(props) {
    super(props);
    this.pageSize = 50;
    this.pagesCount = Math.ceil(120 / this.pageSize);

    this.state = {
      currentPage: 0
    };
  }
  componentDidMount() {
    this.props.getPoeplesData();
  }

  onChangePage = page => {
    const { peoplesFilter } = this.props;
    peoplesFilter.page = page;
    this.setState({ currentPage: page });

    console.log(peoplesFilter.page);

    this.props.changePeopleFilter(peoplesFilter);
  };
  render() {
    const { peoplesData } = this.props;
    console.log(peoplesData.count);

    return (
      <div className="container mt-4">
        <table className="table mt-4">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Eye Color</th>
              <th>Mass</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Homeworld</th>
            </tr>
          </thead>
          <tbody>
            {peoplesData.results.map((people, id) => {
              return (
                <tr key={id}>
                  <td>{people.name}</td>
                  <td>{people.eye_color}</td>
                  <td>{people.mass}</td>
                  <td>{people.gender}</td>
                  <td>{people.height}</td>
                  <td>
                    <a href={people.homeworld}> My Home</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-wrapper">
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={this.state.currentPage <= 0}>
              <PaginationLink
                onClick={() => this.onChangePage(this.state.currentPage - 1)}
                previous
              />
            </PaginationItem>

            {[...Array(this.pagesCount)].map((page, i) => (
              <PaginationItem active={i === this.state.currentPage} key={i}>
                <PaginationLink onClick={() => this.onChangePage(i)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem
              disabled={this.state.currentPage >= this.pagesCount - 1}
            >
              <PaginationLink
                onClick={() => this.onChangePage(this.state.currentPage + 1)}
                next
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.peoples);
  return {
    peoplesData: state.peoples.data,
    peoplesFilter: state.peoples.filter
  };
};

export default connect(
  mapStateToProps,
  {
    getPoeplesData,
    changePeopleFilter
  }
)(Peoples);

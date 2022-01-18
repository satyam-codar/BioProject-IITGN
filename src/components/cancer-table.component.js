import React, { Component } from "react";
import CancerTableDataService from "../services/cancer-data.service";
import History from "./History";

import { Link } from "react-router-dom";
import MakeTable from "./table-creator";

export default class CancerTable extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveCancerTable = this.retrieveCancerTable.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveRow = this.setActiveRow.bind(this);
    this.removeAllCancerData = this.removeAllCancerData.bind(this);
    this.searchTitle = this.searchTitle.bind(this);
    this.submitAction = this.submitAction.bind(this);
    console.log("hello");
    console.log(this.props);
    console.log(this.props.match.params.param);
    const querry = this.props.match.params.param;
    this.state = {
      cancerTable: [],
      currentRow: null,
      currentIndex: -1,
      searchTitle: querry,
      history: "",
    };
  }

  componentDidMount() {
    // this.retrieveCancerTable();
    this.searchTitle();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
      history: searchTitle,
    });
  }
  submitAction(e) {
    // prevents default, so page won't reload on form submit
    e.preventDefault();
    History.push("/search/query/" + this.state.history);
  }

  retrieveCancerTable() {
    CancerTableDataService.getAll()
      .then((response) => {
        this.setState({
          cancerTable: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCancerTable();
    this.setState({
      currentRow: null,
      currentIndex: -1,
    });
  }

  setActiveRow(row, index) {
    this.setState({
      currentRow: row,
      currentIndex: index,
    });
  }

  removeAllCancerData() {
    CancerTableDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    CancerTableDataService.findByTitle(this.state.searchTitle)
      .then((response) => {
        this.setState({
          cancerTable: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    // ...
    const { searchTitle, cancerTable } = this.state;
    // const cancerData = cancerTable

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/" className="btn btn-success mb-3">
              &#11207; Back to Home
            </Link>
          </div>
          <div className="col-md-9">
            <form onSubmit={this.submitAction}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by LncRNA name / Cancer name"
                  style={{
                    borderWidth: "1px",
                    borderColor: `rgb(38, 97, 173)`,
                  }}
                  value={searchTitle}
                  onChange={this.onChangeSearchTitle}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    onClick={this.searchTitle}
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div>
            <h4>Cancer Data:</h4>
          </div>
          <div>
            <MakeTable cancerData={cancerTable} param={searchTitle} />
          </div>
        </div>
      </div>
    );
  }
}

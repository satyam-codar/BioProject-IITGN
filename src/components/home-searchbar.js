import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    // console.log("hello");
    // console.log(this.props);
    this.state = {
      searchTitle: "",
    };
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle,
    });
  }
  render() {
    // ...
    const { searchTitle } = this.state;

    return (
      <div>
        {/* <div className="list row">
          <div className="col-md-12">
            <form>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by LncRNA name/Cancer name/Alias"
                  value={searchTitle}
                  onChange={this.onChangeSearchTitle}
                />
                <div className="input-group-append">
                  <NavLink
                    activeClassName="active"
                    to={"/search/query/" + searchTitle}
                  >
                    <button className="btn btn-outline-secondary" type="submit">
                      Search
                    </button>
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div> */}
        <div className="row">
          <div className="header wow bounceInUp" style={{ paddingTop: "25px" }}>
            <div
              className="panel panel-primary"
              style={{ borderColor: "#EDEDED" }}
            >
              <div
                className="panel-heading p-2"
                style={{
                  fontSize: "20px",
                  backgroundColor: "rgb(38, 97, 173)",
                  color: "white",
                }}
              >
                <b>Welcome to Lnc2Cancer</b>
              </div>
              <div className="panel-body">
                <p style={{ textAlign: "justify" }}>
                  Lnc2Cancer, is a manually curated database that provides
                  comprehensive experimentally supported associations between
                  lncRNA or circRNA and human cancer. The current version of
                  Lnc2Cancer documents 10,303 entries of associations between
                  2,659 human lncRNAs, 743 circRNAs and 216 human cancer
                  subtypes through review of more than 1,5000 published papers.
                  Lnc2Cancer also provides experimentally supported regulatory
                  mechanism (microRNA, Transcription factor, variant,
                  methylation and enhancer), biological function (cell growth,
                  apoptosis, autophagy, Epithelial mesenchymal transformation,
                  immune and coding ability) and clinical application
                  (metastasis, recurrence, circulating, drug-resistant and
                  prognostic) of lncRNAs and circRNAs in human cancer.
                  Especially, an interactive analysis platform including RNA and
                  single cell sequencing expression data is developed to help
                  users explore lncRNAs in cancers with a standard processing
                  pipeline.
                </p>
              </div>
              <div>
                <form>
                  <h4 style={{ marginTop: "0px", paddingTop: "0px" }}>
                    <strong>Quick Search</strong>
                  </h4>
                  <div className="input-group" style={{ width: "90%" }}>
                    <input
                      id="QuickSearch"
                      name="searchName"
                      type="text"
                      className="form-control input-lg"
                      placeholder=" lncRNA / Cancer"
                      style={{
                        borderWidth: "1px",
                        borderColor: `rgb(38, 97, 173)`,
                      }}
                      value={searchTitle}
                      onChange={this.onChangeSearchTitle}
                    />
                    <span className="input-group-btn">
                      <NavLink
                        activeClassName="active"
                        to={"/search/query/" + searchTitle}
                      >
                        <button
                          className="btn btn-outline-secondary"
                          type="submit"
                        >
                          Search
                        </button>
                      </NavLink>
                    </span>
                  </div>
                  <div>
                    <p style={{ marginLeft: "0%" }}>
                      <b>e.g.</b> lncRNA: "
                      <a
                        href="//"
                        style={{ color: "#37BC9B" }}
                        // onClick="document.getElementById('QuickSearch').value='MALAT1'"
                      >
                        <font>
                          <strong>MALAT1</strong>
                        </font>
                      </a>
                      "&nbsp;&nbsp;&nbsp;Cancer: "
                      <a
                        href="//"
                        style={{ color: "#37BC9B" }}
                        // onClick="document.getElementById('QuickSearch').value='breast cancer'"
                      >
                        <font>
                          <strong>breast cancer</strong>
                        </font>
                      </a>
                      "
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

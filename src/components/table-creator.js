/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
class MakeTable extends Component {
  constructor(props) {
    super(props);
    console.log("hello props from table maker");
    console.log(this.props);
    this.state = {};
    console.log("hello from tablemaker");
    console.log(props);
  }
  render() {
    console.log("table-creator");
    console.log(this.props);
    const { cancerData } = this.props;
    // console.log(cancerData);
    function Data(props) {
      // console.log(props);
      return (
        <tr>
          {/* <th scope="row">{props.sno}</th> */}
          <td>{props.LncRNA_name}</td>
          <td>{props.Cancer_name} </td>
          <td>{props.Method_of_Identification}</td>
          <td>{props.Expression_pattern}</td>
          <td>{props.Pubmed_ID}</td>
          <td>{props.Alias}</td>
          <td>
            <Link to={"/show-plots/" + props.LncRNA_name}>
              {props.Subcellular_localization}
            </Link>
          </td>
          <td>
            <Link to={"/qgrs-details/query/" + props.LncRNA_name}>Details</Link>
          </td>
          <td>
            <Link to={"/g4hunter-details/query/" + props.LncRNA_name}>
              Detail
            </Link>
          </td>
        </tr>
      );
    }
    return (
      <div className="table-responsive">
        {/* <div className="row">
          <div
            className="col-md-6 p-2"
            style={{ textAlign: "center", border: "1px solid green" }}
          >
            {cancerData.length ? (
              <h5>
                <Link to={"/qgrs-details/query/" + cancerData[0].LncRNA_name}>
                  QGRS mapper detail
                </Link>
                of <b style={{ color: "green" }}>{cancerData[0].LncRNA_name}</b>
                lncRNA
              </h5>
            ) : (
              <div></div>
            )}
          </div>
          <div
            className="col-md-6 p-2"
            style={{ textAlign: "center", border: "1px solid green" }}
          >
            {cancerData.length ? (
              <h5>
                <Link
                  to={"/g4hunter-details/query/" + cancerData[0].LncRNA_name}
                >
                  G4 hunter detail
                </Link>
                of <b style={{ color: "green" }}>{cancerData[0].LncRNA_name}</b>
                lncRNA
              </h5>
            ) : (
              <div></div>
            )}
          </div>
        </div> */}
        <table className="table table-sm table-hover ml-3">
          <thead>
            <tr>
              {/* <th scope="col">S No.</th> */}
              <th scope="col">LncRNA name</th>
              <th scope="col">Cancer name</th>
              <th scope="col">Method of Identification</th>
              <th scope="col">Expression pattern</th>
              <th scope="col">Pubmed ID</th>
              <th scope="col">Alias</th>
              <th scope="col">Subcellular localization</th>
              <th scope="col">QGRS details</th>
              <th scope="col">g4-Hunter details</th>
            </tr>
          </thead>

          <tbody>
            {cancerData.map((child) => (
              <Data
                key={child.id}
                LncRNA_name={child.LncRNA_name}
                Cancer_name={child.Cancer_name}
                sno={child.id}
                Method_of_Identification={child.Method_of_Identification}
                Expression_pattern={child.Expression_pattern}
                Pubmed_ID={child.Pubmed_ID}
                Alias={child.Alias}
                Subcellular_localization={child.Subcellular_localization}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MakeTable;

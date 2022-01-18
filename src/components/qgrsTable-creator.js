/** @format */

import React, { Component } from "react";
import CancerTableDataService from "../services/cancer-data.service";
import { Link } from "react-router-dom";

class MakeQGRSTable extends Component {
  constructor(props) {
    super(props);
    this.retrieveQGRSTable = this.retrieveQGRSTable.bind(this);
    const querry = this.props.match.params.param;

    this.state = {
      qgrsData: [],
      LncRNA_name: querry,
    };
  }

  componentDidMount() {
    // this.retrieveQGRSTable();
    this.retrieveQGRSTable();
  }
  retrieveQGRSTable() {
    CancerTableDataService.findByLncRna(this.state.LncRNA_name)
      .then((response) => {
        this.setState({
          qgrsData: response.data,
        });
        // console.log(response.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  }
  render() {
    console.log(this.state);
    const { qgrsData } = this.state;
    function Data(props) {
      //   console.log(props);
      return (
        <tr>
          {/* <th scope="row">{props.sno}</th> */}
          <td>{props.LncRNA_name}</td>
          <td>{props.Transcript_variant_no} </td>
          <td>{props.NCBI_Reference_Number}</td>
          <td>{props.Total_No_of_PQS}</td>
          <td>{props.No_of_2G_PQS}</td>
          <td>{props.No_of_3G_PQS}</td>
          <td>{props.No_of_4G_PQS}</td>
          <td>
            <Link to={"/qgrs-mapper-details/query/" + props.LncRNA_name}>
              Mapper details
            </Link>
          </td>
        </tr>
      );
    }
    return (
      <div className="table-responsive">
        <div>
          <p>{qgrsData.length}</p>
        </div>
        <table className="table table-sm table-hover ml-3">
          <thead>
            <tr>
              {/* <th scope="col">S No.</th> */}
              <th scope="col">LncRNA name</th>
              <th scope="col">Transcript variant no</th>
              <th scope="col">NCBI Reference Number</th>
              <th scope="col">Total No of_ QS</th>
              <th scope="col">No of 2G PQS</th>
              <th scope="col">No of 3G PQS</th>
              <th scope="col">No of 4G PQS</th>
              <th scope="col">QGRS Mapper details</th>
            </tr>
          </thead>

          <tbody>
            {qgrsData.map((child) => (
              <Data
                key={child.NCBI_Reference_Number}
                LncRNA_name={child.LncRNA_name}
                Transcript_variant_no={child.Transcript_variant_no}
                // sno={child.id}
                NCBI_Reference_Number={child.NCBI_Reference_Number}
                Total_No_of_PQS={child.Total_No_of_PQS}
                No_of_2G_PQS={child.No_of_2G_PQS}
                No_of_3G_PQS={child.No_of_3G_PQS}
                No_of_4G_PQS={child.No_of_4G_PQS}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MakeQGRSTable;

/** @format */
/* eslint-disable */

import React, { Component } from "react";
import CancerTableDataService from "../services/cancer-data.service";
class MakeG4HunterTable extends Component {
  constructor(props) {
    super(props);
    this.retrieveG4HunterTablePoint9 =
      this.retrieveG4HunterTablePoint9.bind(this);
    this.retrieveG4HunterTable11Point4 =
      this.retrieveG4HunterTable11Point4.bind(this);
    const querry = this.props.match.params.param;

    this.state = {
      g4HunterPoint9Data: [],
      g4Hunter1Point4Data: [],
      LncRNA_name: querry,
    };
  }

  componentDidMount() {
    // this.retrieveG4HunterTablePoint9();
    this.retrieveG4HunterTablePoint9();
    this.retrieveG4HunterTable11Point4();
  }
  retrieveG4HunterTablePoint9() {
    CancerTableDataService.findByLncRnaG4Hpoint9(this.state.LncRNA_name)
      .then((response) => {
        this.setState({
          g4HunterPoint9Data: response.data,
        });
        // console.log(response.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  }
  retrieveG4HunterTable11Point4() {
    CancerTableDataService.findByLncRnaG4H1point4(this.state.LncRNA_name)
      .then((response) => {
        this.setState({
          g4Hunter1Point4Data: response.data,
        });
        // console.log(response.data);
      })
      .catch((e) => {
        // console.log(e);
      });
  }
  render() {
    console.log(this.state);
    const { g4HunterPoint9Data } = this.state;
    const { g4Hunter1Point4Data } = this.state;
    const array = [];
    g4HunterPoint9Data.forEach((child) => {
      array.push(child.LncRNA_name);
      array.push(child.LncRNA_name);
    });
    function CollectG4hunterData(props) {
      console.log("hello from function");
      const array1 = props.g4HunterPoint9Data;
      const array2 = props.g4Hunter1Point4Data;
      let g4hunterData = [];
      if (array1.length & array2.length) {
        for (let i = 0; i < array1.length; i++) {
          const item = {
            LncRNA_name: array1[i].LncRNA_name,
            Transcript_variant_no: array1[i].Transcript_variant_no,
            NCBI_Reference_Number: array1[i].NCBI_Reference_Number,
            Total_No_of_PQS1: array1[i].Total_No_of_PQS,
            No_of_2G_PQS1: array1[i].No_of_2G_PQS,
            No_of_3G_PQS1: array1[i].No_of_3G_PQS,
            No_of_4G_PQS1: array1[i].No_of_4G_PQS,
            No_of_C_rich_Sequences1: array1[i].No_of_C_rich_Sequences,
            Total_No_of_PQS2: array2[i].Total_No_of_PQS,
            No_of_2G_PQS2: array2[i].No_of_2G_PQS,
            No_of_3G_PQS2: array2[i].No_of_3G_PQS,
            No_of_4G_PQS2: array2[i].No_of_4G_PQS,
            No_of_C_rich_Sequences2: array2[i].No_of_C_rich_Sequences,
          };
          g4hunterData.push(item);
        }
      }
      return g4hunterData;
    }
    function Data(props) {
      //   console.log(props);
      return (
        <tr>
          <td>{props.LncRNA_name}</td>
          <td>{props.Transcript_variant_no} </td>
          <td>{props.NCBI_Reference_Number}</td>
          <td>{props.Total_No_of_PQS1}</td>
          <td>{props.No_of_2G_PQS1}</td>
          <td>{props.No_of_3G_PQS1}</td>
          <td>{props.No_of_4G_PQS1}</td>
          <td>{props.No_of_C_rich_Sequences1}</td>

          <td>{props.Total_No_of_PQS2}</td>
          <td>{props.No_of_2G_PQS2}</td>
          <td>{props.No_of_3G_PQS2}</td>
          <td>{props.No_of_4G_PQS2}</td>
          <td>{props.No_of_C_rich_Sequences2}</td>
        </tr>
      );
    }
    return (
      <div className="table-responsive">
        <div>
          <p>{g4HunterPoint9Data.length}</p>
        </div>
        <table className="table table-sm table-hover ml-3">
          <thead>
            <tr>
              <th colspan="3"></th>
              <th colspan="5">
                Search Parameters: Window size:45 | Threshold:0.9
              </th>
              <th colspan="5">
                Search Parameters: Window size:45 | Threshold:1.4
              </th>
            </tr>
            <tr>
              <th scope="col">LncRNA name</th>
              <th scope="col">Transcript variant no</th>
              <th scope="col">NCBI Reference Number</th>

              <th scope="col">Total No of PQS</th>
              <th scope="col">No of 2G PQS</th>
              <th scope="col">No of 3G PQS</th>
              <th scope="col">No of 4G PQS</th>
              <th scope="col">No of C-rich Sequences</th>

              <th scope="col">Total No of PQS</th>
              <th scope="col">No of 2G PQS</th>
              <th scope="col">No of 3G PQS</th>
              <th scope="col">No of 4G PQS</th>
              <th scope="col">No of C-rich Sequences</th>
              {/* <th scope="col"></th> */}
            </tr>
          </thead>

          <tbody>
            {CollectG4hunterData({
              g4HunterPoint9Data,
              g4Hunter1Point4Data,
            }).map((child) => (
              <Data
                key={child.NCBI_Reference_Number}
                LncRNA_name={child.LncRNA_name}
                Transcript_variant_no={child.Transcript_variant_no}
                NCBI_Reference_Number={child.NCBI_Reference_Number}
                Total_No_of_PQS1={child.Total_No_of_PQS1}
                No_of_2G_PQS1={child.No_of_2G_PQS1}
                No_of_3G_PQS1={child.No_of_3G_PQS1}
                No_of_4G_PQS1={child.No_of_4G_PQS1}
                No_of_C_rich_Sequences1={child.No_of_C_rich_Sequences1}
                Total_No_of_PQS2={child.Total_No_of_PQS2}
                No_of_2G_PQS2={child.No_of_2G_PQS2}
                No_of_3G_PQS2={child.No_of_3G_PQS2}
                No_of_4G_PQS2={child.No_of_4G_PQS2}
                No_of_C_rich_Sequences2={child.No_of_C_rich_Sequences2}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MakeG4HunterTable;

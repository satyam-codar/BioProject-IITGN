/** @format */

import React, { Component } from "react";
class MakeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("hello from tablemaker");
    console.log(props);
  }
  render() {
    // console.log(this.props);
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
          <td>{props.Subcellular_localization}</td>
        </tr>
      );
    }
    return (
      <div className="table-responsive">
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

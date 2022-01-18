import React, { Component } from "react";
import cancerDataService from "../services/cancer-data.service";
import Gallery from "./gallery/gallery";
class ShowImage extends Component {
  constructor(props) {
    super(props);
    this.retrievePlotData = this.retrievePlotData.bind(this);
    const query = this.props.match.params.param;
    this.state = {
      plotData: [],
      LncRna_name: query,
    };
  }
  componentDidMount() {
    this.retrievePlotData();
  }
  retrievePlotData() {
    cancerDataService
      .findByLncRnaPlotData(this.state.LncRna_name)
      .then((response) => {
        this.setState({
          plotData: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    console.log(this.state);
    const imageURL = false;
    if (this.state.plotData.length !== 0) {
      const imageURL =
        "data:image/png;base64," +
        new Buffer(this.state.plotData[0].data, "binary").toString("base64");
      //   console.log(imageURL);
    }

    return (
      <div>
        {/* <h1>hello there!</h1> */}
        <Gallery />

        {/* {imageURL ? <img src={imageURL} alt="hello" /> : <p>comming soon</p>} */}
      </div>
    );
  }
}

export default ShowImage;

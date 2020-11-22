import React, { Component } from "react";
import { getData } from "../modules/performanceData";
import DisplayDoughnutChart from "../components/DisplayDoughnutChart";
import DisplayLineChart from "../components/DisplayLineChart"

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null,
  };

  componentDidMount() {
    this.getPerformanceData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getPerformanceData();
    }
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    });
  }

  render() {
    return ( <div> <DisplayDoughnutChart performanceData={this.state.performanceData}/>
     <DisplayLineChart performanceData={this.state.performanceData}/>
     </div>
  )}
}

export default DisplayPerformanceData;

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
    return ( <div> <h1>Doughnut chart</h1><DisplayDoughnutChart performanceData={this.state.performanceData}/>
    <h1>Line chart</h1>
    <DisplayLineChart performanceData={this.state.performanceData}/>
    </div>
  )}
}

export default DisplayPerformanceData;

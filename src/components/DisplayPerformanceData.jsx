import React, { Component } from "react";
import { getData } from "../modules/performanceData";
import { Doughnut } from "react-chartjs-2";

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
    let graph;
    let distances = [];
    let labels = [];

    if (this.state.performanceData != null) {
      this.state.performanceData.forEach((entry) => {
        distances.push(entry.data.distance);
        labels.push(entry.data.message);
      });
    }

    const data = {
      labels: labels,
      datasets: [
        {
          // label: "Fitness level",
          data: distances,
        },
      ],
    };

    graph = <Doughnut data={data} />;

    return <div id="index">
    <h1 className='title'>Accumulated test results</h1>{graph}</div>;
  }
}

export default DisplayPerformanceData;

// (
//   <div>
//     {this.state.performanceData.map((item) => {
//       return (
//         <div key={item.id}>
//           <p>{item.data.message}</p>
//           <p>{item.data.age}</p>
//           <p>{item.data.distance}</p>
//         </div>
//       );
//     })}
//   </div>
// );

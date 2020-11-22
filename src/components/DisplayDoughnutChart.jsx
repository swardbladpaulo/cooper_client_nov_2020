import React from "react";
import { Doughnut } from "react-chartjs-2";

const DisplayDoughnutChart = ({ performanceData }) => {
  const doughnutData = {};

  if (performanceData != null) {
    performanceData.forEach((entry) => {
      let label = entry.data.message;
      if (doughnutData[label] == null) {
        doughnutData[label] = 0;
      }
      doughnutData[label] += 1;
    });
  }

  const data = {
    labels: Object.keys(doughnutData),
    datasets: [
      {
        data: Object.values(doughnutData),
        backgroundColor: [
          "rgba(17,131,138)",
          "rgba(12,91,96)",
          "rgba(24,188,198)",
          "rgba(29,233,245)",
        ],
        borderWidth: 5,
      },
    ],
  };

  let doughnut = <Doughnut data={data} />;

  return <div id="index">{doughnut}</div>;
};

export default DisplayDoughnutChart;

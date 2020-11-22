import React from "react";
import { Line } from "react-chartjs-2";

const DisplayLineChart = ({ performanceData }) => {
  const lineData = {};

  if (performanceData != null) {
    performanceData.forEach((entry) => {
      let label = entry.data.message;
      if (lineData[label] == null) {
        lineData[label] = 0;
      }
      lineData[label] += 1;
    });
  }

  const data = {
    labels: Object.keys(lineData),
    datasets: [
      {
        label: "# of Tests",
        data: Object.values(lineData),
        fill: false,
        backgroundColor: "rgba(17,131,138)",
        borderColor: "rgba(29,233,245)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};
export default DisplayLineChart;

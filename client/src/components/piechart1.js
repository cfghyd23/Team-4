import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["projectName", "fundsCollected"],
  ["project_1", 11000],
  ["project_2", 20000],
  ["project_3", 34000],
  ["project_4", 18000],
];

export const options = {
  title: "OVERALL PERFORMANCE",
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"800px"}
      height={"600px"}
    />
  );
}

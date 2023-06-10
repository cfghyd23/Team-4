import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["projectName", "fundsCollected"],
  ["funds collected ", 30],
  ["Funds yet to collected", 70],
];


export const options = {
  title: "FUNDS COLLECTED",
};

export default function PieChart2() {
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
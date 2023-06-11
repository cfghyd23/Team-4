import React, { useEffect } from "react";
import PieChart from "../piechart1";
import PieChart2 from "../piechart2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Overview() {
  useEffect(() => {}, []);
  const data = {
    name: "Sanju",
    campaigns: [
      {
        name: "Child Care",
        fundscollected: 3000,
        fundstonextmilestone: 1000,
        mileStonesPassed: 3,
      },
    ],
  };

  const internDetails = ["Username, password"];
  return (
    <div className="w-full flex flex-col items-center p-12">
      <Container>
        <Row>
          <Col sm={7}>
            <div class="d-flex justify-content-center text-light w-full">
              <PieChart2 />
            </div>
          </Col>
          <Col sm={5}>
            <div class="d-flex justify-content-center text-light w-full">
              <PieChart />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="flex flex-row items-center justify-between my-8 mx-8 w-full">
        <h5 className="">Current Fundraiser Cause: {data.campaigns[0].name}</h5>
        <h5>Funds Collected: ₹{data.campaigns[0].fundscollected}</h5>
        <h5>Next Milestone: ₹{data.campaigns[0].fundstonextmilestone}</h5>
      </div>
      <span className="p-6 rounded-lg backdrop-blur-md bg-gray-500 bg-opacity-10 mt-4 mx-auto">
        <span className="font-semibold text-orange-600">
          🔗 Fundraiser URL:{" "}
        </span>
        https://payments-test.cashfree.com/forms/intern1-campaign1
      </span>
    </div>
  );
}

import React from "react";
import PieChart from "../piechart1";
import PieChart2 from "../piechart2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Overview() {
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
    <div>
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
      <div className="flex flex-row items-center justify-between my-0 mx-8">
        <h4 className="">Current Fundraiser Cause: {data.campaigns[0].name}</h4>
        <span>Funds Collected: ₹{data.campaigns[0].fundscollected}</span>
        <span>Next Milestone: ₹{data.campaigns[0].fundstonextmilestone}</span>
      </div>
    </div>
  );
}

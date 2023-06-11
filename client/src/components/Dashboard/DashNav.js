import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";

const DashNav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          style={{ fontFamily: "Raleway", fontSize: "30px", color: "tomato" }}
        >
          Marpu Foundation
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/dashboard" style={{ marginLeft: "200px" }}>
            Overview
          </Nav.Link>
          <Nav.Link href="/dashboard/rewards" style={{ marginLeft: "10px" }}>
            Rewards
          </Nav.Link>
          <Nav.Link style={{ marginLeft: "10px" }}>Add New Project</Nav.Link>
          <Nav.Link href="/dashboard/alumni" style={{ marginLeft: "10px" }}>
            Alumni Contact
          </Nav.Link>
          <Nav.Link href="#username" style={{ marginLeft: "10px" }}>
            {window.localStorage.getItem("username")}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashNav;

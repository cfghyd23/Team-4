import React from "react";
import PieChart from "./piechart1";
import PieChart2 from "./piechart2";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const temp={
    marginLeft: '20px',
    fontFamily: 'Raleway',
    fontSize: '10px',
    fontStyle: 'italic',
    color: "orange",
    backgroundColor: "pink"
}

export default function Dashboard() {
    const internDetails = ["Username, password"];
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand style={{fontFamily: 'Raleway',fontSize: '30px',color:'tomato'}}>Marpu Foundation</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#alumni" style={{marginLeft:'450px'}}>Alumni Contact</Nav.Link>
                        <Nav.Link href="#certificate" style={{marginLeft:'10px'}}>Rewards</Nav.Link>
                        <Button variant="light" style={{marginLeft:'10px'}}>Add New Project</Button>
                        <Nav.Link href="#username" style={{marginLeft:'10px'}}>Username</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Row>
                    <Col sm={7}><div class="d-flex justify-content-center text-light">
                        <PieChart2 />
                    </div>
                    </Col>
                    <Col sm={5}><div class="d-flex justify-content-center text-light">
                        <PieChart />
                    </div></Col>
                </Row>
            </Container>
        </div>
    );
}

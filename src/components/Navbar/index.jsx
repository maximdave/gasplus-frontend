import React from "react";
import Button from "../Button";
import { FiPhoneCall } from "react-icons/fi";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";
const NavigationBar = () => {
  return (
    <Navbar bg="transparent" className="text-white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white">
          Gas plus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white nav-list">
              Service
            </Nav.Link>
            <Nav.Link href="#link" className="text-white nav-list">
              Why Gasplus
            </Nav.Link>
            <Nav.Link href="#link" className="text-white nav-list">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="text-white">
              <Button>LOGIN</Button>
            </Nav.Link>
            <Nav.Link href="#link" className="text-white">
              <div className="d-flex align-items-center text-white">
                <FiPhoneCall style={{ marginTop: "-5px" }} />
                <p className="mt-2 mx-4">08167678998</p>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

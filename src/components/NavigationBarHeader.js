import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../src/App.css";
const NavigationBarHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src={require("./assets/logo.png")} alt="Tomoegawa Logo" />
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">COMPANY</Nav.Link>
          <Nav.Link href="/products">PRODUCTS</Nav.Link>
          <Nav.Link href="/contact">CONTACT US</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/">
        <img
          src={require("./assets/logo2.jpg")}
          alt="Tomoegawa Logo"
          style={{ maxWidth: "100px", maxHeight: "100px" }}
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBarHeader;

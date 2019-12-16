import React from "react";
import { Navbar, Nav } from "react-bootstrap";
const NavBar = props => (
  <Navbar expand="lg">
    <Navbar.Brand href="/">Joshua Kelly</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/self-bio">Bio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/my-portfolio">My Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact-me"> Contact Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default NavBar;

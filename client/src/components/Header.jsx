import React from "react";
import Row from "react-bootstrap/Row";
const Header = ({ title }) => (
  <Row className="justify-content-center">
    <h1>{title}</h1>
  </Row>
);
export default Header;

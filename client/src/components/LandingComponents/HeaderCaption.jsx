import React from "react";
import Row from "react-bootstrap/Row";
const HeaderCaption = ({ caption }) => (
  <Row className="justify-content-center">
    <p>{caption}</p>
  </Row>
);

export default HeaderCaption;

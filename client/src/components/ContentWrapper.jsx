import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
const ContentWrapper = ({ children }) => (
  <Container>
    <Jumbotron className="shadow-lg">{children}</Jumbotron>
  </Container>
);
export default ContentWrapper;

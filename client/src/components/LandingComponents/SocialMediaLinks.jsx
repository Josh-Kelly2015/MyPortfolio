import React from "react";
import { Row, Button } from "react-bootstrap";
const SocialMediaLinks = props => (
  <Row className="justify-content-around">
    <Button size="lg" href="https://github.com/Josh-Kelly2015">
      Github
    </Button>
    <Button
      size="lg"
      href="https://www.linkedin.com/in/joshua-kelly-482196185/"
    >
      LinkedIn
    </Button>
  </Row>
);

export default SocialMediaLinks;

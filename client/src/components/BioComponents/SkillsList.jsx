import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const SkillsList = props => (
  <ListGroup>
    <Card.Header>
      React.JS, Handlebars, BootStrap, Flex-Box, Media Queries
    </Card.Header>
    <Card.Header> HTML5, JavaScript, CSS3, jQuery</Card.Header>
    <Card.Header> MongoDB, MySQL, Mongoose, Sequelize</Card.Header>
    <Card.Header>Node Js, Express, Axios</Card.Header>
    <Card.Header>RESTful API's, AJAX, JSON, GIT</Card.Header>
    <Card.Header>
      MERN Stack, Postman, Robo3T, Adobe XD, GitHub, Heroku
    </Card.Header>
  </ListGroup>
);

export default SkillsList;

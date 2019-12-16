import React from "react";
import { Animated } from "react-animated-css";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import MyProjects from "../components/MyPortfolioComponents/MyProjects";
const MyPortfolio = props => (
  <Container fluid className="bg-dark text-white">
    <Animated
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <ContentWrapper>
        <Header title="My Portfolio" />
        <MyProjects />
      </ContentWrapper>
    </Animated>
  </Container>
);
export default MyPortfolio;

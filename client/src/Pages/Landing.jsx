import React from "react";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import { Animated } from "react-animated-css";
import HeaderCaption from "../components/HeaderCaption";
import SocialMediaLinks from "../components/LandingComponents/SocialMediaLinks";
const Landing = props => (
  <Container fluid className="bg-dark text-white">
    <Container>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1800}
        animationOutDuration={1800}
        isVisible={true}
      >
        <Header title="Joshua Kelly" />
        <HeaderCaption caption="Full Stack Web Developer" />
        <SocialMediaLinks />
      </Animated>
    </Container>
  </Container>
);
export default Landing;

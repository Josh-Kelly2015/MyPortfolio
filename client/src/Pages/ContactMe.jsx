import React from "react";
import { Animated } from "react-animated-css";
import Container from "react-bootstrap/Container";
import ContentWrapper from "../components/ContentWrapper";
import Header from "../components/Header";
import ContactForm from "../components/ContactMeComponents/ContactForm";
const ContactMe = props => (
  <Container fluid>
    <Animated
      animationIn="slideInLeft"
      animationOut="slideOutRight"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={true}
    >
      <ContentWrapper>
        <Header title="Contact Me" />

        <ContactForm />
      </ContentWrapper>
    </Animated>
  </Container>
);
export default ContactMe;

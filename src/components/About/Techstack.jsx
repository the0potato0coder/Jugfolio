// src/components/About/Techstack.jsx
import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiJava } from "react-icons/di";
import { SiSpringboot, SiHibernate } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHibernate /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
    </Row>
  );
}

export default Techstack;
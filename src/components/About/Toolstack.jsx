import React from "react";
import { Col, Row } from "react-bootstrap";
// THE FIX IS HERE: We import from the specific icon set path.
import { SiVsco, SiPostman, SiMysql, SiGit } from "react-icons/si";
import { DiLinux } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiVsco /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiLinux /></Col>
    </Row>
  );
}

export default Toolstack;
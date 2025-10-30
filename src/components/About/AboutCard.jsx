// src/components/About/AboutCard.js
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jugantar Roy </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a Computer Science graduate with a strong foundation in Java development and Object-Oriented Programming.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating on projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
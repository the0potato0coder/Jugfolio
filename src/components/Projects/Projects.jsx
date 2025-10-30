// src/components/Projects/Projects.js
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codeEditor from "../../assets/Projects/codeEditor.png";
import leaf from "../../assets/Projects/leaf.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "AmFlow – Attendance Management System | Java Spring Boot, React, MySQL, JWT",
      description: "Developed a full-stack web application to streamline employee attendance, leave, and payroll management. Engineered and secured RESTful APIs using Spring Boot with JWT-based authentication and role-based access control (Admin, User) to ensure data integrity. Conducted comprehensive unit testing using JUnit and Mockito to ensure code quality, achieving high test coverage for the service layer. Designed and implemented a relational database schema in MySQL and utilized Hibernate for object-relational mapping. Created a responsive, user-friendly frontend with React.js, consuming the backend APIs to provide a seamless user experience.",
      imgPath: codeEditor
    },
    {
      id: 2,
      title: "CoreOS – Gym Management System | Java Spring Boot, Hibernate, MySQL",
      description: "Built a robust backend system to manage gym memberships, class schedules, and user bookings. Implemented core features including user registration with password encryption, JWT-based authentication, and role-based access for members and trainers. Developed a booking module with validation checks for active memberships and class capacity, preventing scheduling conflicts. Created comprehensive RESTful APIs and implemented custom exception handling for robust and reliable operation.",
      imgPath: leaf
    }
  ];

  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "var(--imp-text-color)" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map(project => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                ghLink={"#"} // Replace with your actual GitHub link if available
                imgPath={project.imgPath}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
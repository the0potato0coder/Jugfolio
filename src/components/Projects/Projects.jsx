// src/components/Projects/Projects.js
import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import codeEditor from "../../assets/Projects/codeEditor.png";
import leaf from "../../assets/Projects/leaf.png";
import blog from "../../assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "AmFlow – Attendance Management System | Java Spring Boot, React, MySQL, JWT",
      description: "Full-stack attendance management system using Java Spring Boot, React, MySQL, and JWT for employee tracking and payroll.",
      imgPath: codeEditor,
      ghLink: "#", // Placeholder for GitHub link
      demoLink: "https://amflow-frontend.netlify.app/"
    },
    {
      id: 2,
      title: "CoreOS – Gym Management System | Java Spring Boot, Hibernate, MySQL",
      description: "Gym management system backend using Java Spring Boot, Hibernate, and MySQL for memberships and bookings.",
      imgPath: leaf,
      ghLink: "#" // Placeholder for GitHub link
    },
    {
      id: 3,
      title: "Books API",
      description: "A lightweight Spring Boot application (Java 21) that exposes a Books REST API and Thymeleaf web UI for searching a book catalog.",
      imgPath: blog,
      ghLink: "#" // Placeholder for GitHub link
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
                ghLink={project.ghLink}
                demoLink={project.demoLink}
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
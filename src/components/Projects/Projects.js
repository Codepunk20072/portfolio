import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import keeper from "../../Assets/keeper.png";
import emotion from "../../Assets/Projects/emotion.png";
import carbon from "../../Assets//carbon.png";
import blog from "../../Assets/blog.png";
import suicide from "../../Assets/Travel.png";
import tesla from "../../Assets/tesla.png";
import idaar from "../../Assets/idaar.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idaar}
              isBlog={false}
              title="IDAAR Cell (In-Progress)"
              description="I am currently working as the lead backend developer for the LNMIIT Idaar Cell website which is a comprehensive platform designed for faculty members, Heads of Departments (HODs), and the administration. With multi-level authorization, it facilitates the efficient storage and management of crucial information such as published papers, conference details, and journal information. This centralized hub streamlines data access, ensuring a seamless flow of academic and research-related content within the LNMIIT community."
              ghLink="https://github.com/kaustubh-765/idaar_cell_lnmiit"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carbon}
              isBlog={false}
              title="Carbon Footprint Calculator"
              description="Our project, conducted in collaboration with IEEE, centered on creating a website to calculate user-specific carbon emissions, awarded virtual badges accordingly, and visualized data in charts.  Our success in this endeavor was affirmed by winning the hackathon. Notably, users could compare their emissions with friends, fostering a sense of competition."
              ghLink="https://github.com/KrishnaKhattri-27/Carbon-Footprint"
              demoLink="https://carbonfootprintcalculator-rp58.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Full Stack Blog Website"
              description="This is a Blog website developed using MongoDB to store stuff and a strong backend to keep everything running smoothly. The website looks great and works well, making writing and reading blogs super easy and enjoyable."
              ghLink="https://github.com/Codepunk20072/Blog---full-mern-stack-"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tesla}
              isBlog={false}
              title="Tesla Car Website Clone"
              description="This is a clone of the official Tesla Website. "
              ghLink="https://github.com/Codepunk20072/Tesla-clone"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper Web-App"
              description="React based notes keeper app"
              ghLink="https://github.com/Codepunk20072/Keeper-react"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Travel Agency Website"
              description="I have also made a Travel Agency Website using vanila JS. It uses various concepts of HTML, CSS, JS."
              ghLink="https://github.com/Codepunk20072/Travel-Website-UI"
              demoLink="https://jadoo-travelagency.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

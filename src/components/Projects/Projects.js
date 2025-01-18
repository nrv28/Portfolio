import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto_project from "../../Assets/Projects/crypto_project.png";
import events_project from "../../Assets/Projects/events_project.png";
import traffic_project from "../../Assets/Projects/traffic_project.png";
import fall_project from "../../Assets/Projects/fall_project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic_project}
              isBlog={false}
              title="Traffic Security and Control"
              description=" I built a traffic security system using OCR and the MERN stack, improving monitoring efficiency by 30%. The project included a web portal for vehicle registration and online challan payments, reducing manual effort by 40%. Leveraging Docker and NGINX, I ensured scalability, high availability, and optimized server performance, cutting response times by 20%."
              ghLink="https://github.com/nrv28/Traffic-Project-Deploy"
              demoLink="https://traffic-project-deploy.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fall_project}
              isBlog={false}
              title="Fall Detector"
              description="I developed an innovative Android app for real-time fall detection, achieving 93% accuracy using accelerometer data. The app sends instant alerts within 0.5 seconds via socket communication and shares precise GPS locations (5m accuracy) to ensure swift emergency responses. Tested across 50 simulated and 10 real-life scenarios."
              ghLink="https://github.com/nrv28/Fall-Detection"
              demoLink="https://github.com/nrv28/Fall-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={events_project}
              isBlog={false}
              title="Nirjay Events"
              description="I developed a MERN stack-based web application for seamless event booking, catering to weddings, birthdays, and other occasions. The platform allowed clients to easily find and book nearby event organizers, integrate secure payment gateways, enable real-time order tracking, and use Context API for efficient state management, enhancing user experience and convenience."
              ghLink="https://github.com/nrv28/Nirjay-Events"
              demoLink="https://nirjay-events.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto_project}
              isBlog={false}
              title="Crypto"
              description="The Crypto Server Application is a Node.js backend that fetches cryptocurrency data using the CoinGecko API and provides APIs for stats and price deviation. It tracks Bitcoin, Ethereum, and Matic, storing data in MongoDB every 2 hours. Users can retrieve real-time stats and calculate price deviations for the last 100 records. Built with Node.js, Express.js, and Mongoose, it features a modular design for scalability and future enhancements like user authentication and expanded tracking."
              ghLink="https://github.com/nrv28/koinx"
              demoLink="https://koinx-green.vercel.app//"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

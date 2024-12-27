import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./index.css";

function About() {
  return (
    <Container>
      <div className="about-wrapper">
        <Card className="about-item-card">
          <h6>Created with &#10084; by Aishi Archita Saha</h6>
          
        </Card>
        <Row>
          <Col>
            <Card className="about-item-card">
              <h5 className="text-uppercase">Tech stack</h5>
              <ul className="list-unstyled">
                <li>ReactJS</li>
                <li>Redux</li>
                <li>NodeJS</li>
                <li>MySQL</li>
              </ul>
            </Card>
          </Col>
          <Col>
            <Card className="about-item-card">
              <h5 className="text-uppercase">Connect with me</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/aishi-archita-saha-075b28165/">
                    My Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aishi-archita">My Github</a>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;

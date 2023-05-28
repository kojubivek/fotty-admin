import "./Footer.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p className="text-light">
              &copy; {new Date().getFullYear()} Bivek. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

import React from "react";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import Email from "../../svgs/SocialMedia/email.png";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <Container>
        <h2>Need Help?</h2>
        <Row>
          <Col md className="mb-4">
            <h3>Email us</h3>
            <img
              src={Email}
              alt="Link to Instagram"
              width={20}
              style={{ marginRight: "0.25em" }}
            />
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="mailto:info@senecahackathon.com"
            >
              info@senecahackathon.com
            </a>
          </Col>
          <Col md className="mb-4">
            <h3>Address</h3>
            <p style={{ margin: 0 }}>
              Seneca College Newnham Campus, 1750 Finch Ave E., North York,
              Toronto, ON M2J 2X5
            </p>
          </Col>
          <Col md className="mb-4">
            <h3>Social Media</h3>
            <SocialMediaIcons />
          </Col>
        </Row>
        <p>&copy; Copyright. All rights reserved by Housing Hackathon.</p>
      </Container>
    </div>
  );
};

export default Footer;

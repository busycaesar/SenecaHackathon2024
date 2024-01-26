import { Row, Col } from "react-bootstrap";
import WhoAreWe1 from "../../svgs/WhoAreWe/1.jpeg";
import WhoAreWe2 from "../../svgs/WhoAreWe/2.jpeg";
import WhoAreWe3 from "../../svgs/WhoAreWe/3.jpeg";
import WhoAreWe4 from "../../svgs/WhoAreWe/4.jpeg";
import "./about.css";

export default function WhoAreWe() {
  const whoareweImages = [WhoAreWe1, WhoAreWe2, WhoAreWe3, WhoAreWe4];
  return (
    <div id="who-are-we-section" className="mt-10 page-content">
      <Row>
        <Col md={6} style={{ marginBottom: "1em" }}>
          <h2>
            <strong>Who We Are</strong>
          </h2>
          <p>
            The hackathon is a student-focused innovation competition that provides a unique experiential learning experience. It encourages and develops creative thinking, entrepreneurship, and problem-solving skills by bringing together students from diverse backgrounds to work together on addressing real-world challenges. The teams receive support from subject-specific mentors and technical specialists and then showcase their solutions in a fun and lively environment to be adjudicated by a panel of experts consisting of investors, partners, school representatives, and domain specialists. The winning teams will have the opportunity to receive prizes and be considered for applied research project investment opportunities.
          </p>
          <div className="button">
            <a href={`/about`}>
              <button>Learn More</button>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <Row>
            {whoareweImages.map((image) => (
              <Col sm={6}>
                <img src={image} alt="Team" height={238} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

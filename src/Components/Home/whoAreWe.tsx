import { Row, Col } from "react-bootstrap";
import WhoAreWe1 from "../../svgs/WhoAreWe/1.jpeg";
import WhoAreWe2 from "../../svgs/WhoAreWe/2.jpeg";
import WhoAreWe3 from "../../svgs/WhoAreWe/3.jpeg";
import WhoAreWe4 from "../../svgs/WhoAreWe/4.jpeg";
import "./about.css";

export default function WhoAreWe() {
  const whoareweImages = [WhoAreWe1, WhoAreWe2, WhoAreWe3, WhoAreWe4];
  return (
    <div id="who-are-we-section">
      <Row>
        <Col md={6} style={{ marginBottom: "1em" }}>
          <h2>
            <strong>Who Are We</strong>
          </h2>
          <p>
            The Seneca Hackathon is an all-inclusive student-focused innovation
            competition, originally conceived at the height of the pandemic in
            2020. Since then,we’ve come a long way to hosting the
            secondin-person Hackathon event in 2024! We have an average of 595
            participants and 58 submissions.
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
                <img src={image} alt="Team" />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

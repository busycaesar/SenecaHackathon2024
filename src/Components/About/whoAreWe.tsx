import { Row, Col } from "react-bootstrap";
import SampleImage from "../../svgs/sample.jpg";
import "./about.css";

export default function WhoAreWe() {
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
            <a href={`/`}>
              <button>Learn More</button>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <Row>
            <Col sm={6}>
              <img src={SampleImage} alt="Sample" />
            </Col>
            <Col sm={6}>
              <img src={SampleImage} alt="Sample" />
            </Col>
            <Col sm={6}>
              <img src={SampleImage} alt="Sample" />
            </Col>
            <Col sm={6}>
              <img src={SampleImage} alt="Sample" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

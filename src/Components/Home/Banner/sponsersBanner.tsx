import { Row, Col } from "react-bootstrap";
import SenecaAppliedResearch from "../../../svgs/seneca-applied-research.png";
import SenecaPolytechnic from "../../../svgs/seneca-polytechnic.png";
import "./banner.css";

export default function SponsersBanner() {
  return (
    <>
      <h2 style={{ marginTop: "1em" }}>
        <strong>Our Sponsers</strong>
      </h2>
      <Row>
        <Col className="center-hv" style={{ margin: "1em 0" }} md={6}>
          <img
            src={SenecaAppliedResearch}
            style={{ width: "70%" }}
            alt="Seneca Innovation"
          />
        </Col>
        <Col className="center-hv" style={{ margin: "1em 0" }} md={6}>
          <img
            src={SenecaPolytechnic}
            style={{ width: "30%" }}
            width={200}
            alt="Seneca Innovation"
          />
        </Col>
      </Row>
    </>
  );
}

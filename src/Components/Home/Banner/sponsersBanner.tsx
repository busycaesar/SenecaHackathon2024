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
        <Col className="center-hv" sm={6}>
          <img
            src={SenecaAppliedResearch}
            width={500}
            alt="Seneca Innovation"
          />
        </Col>
        <Col className="center-hv" sm={6}>
          <img src={SenecaPolytechnic} width={200} alt="Seneca Innovation" />
        </Col>
      </Row>
    </>
  );
}

import { Row, Col } from "react-bootstrap";
import SenecaInnovation from "../../../svgs/seneca-innovation.jpg";
import SenecaPolytechnic from "../../../svgs/seneca-polytechnic.jpg";

export default function SponsersBanner() {
  return (
    <>
      <h2 style={{ marginTop: "1em" }}>
        <strong>Our Sponsers</strong>
      </h2>
      <Row style={{ textAlign: "center" }}>
        <Col sm={6}>
          <img
            src={SenecaInnovation}
            style={{ borderRadius: "10px", marginBottom: "1em" }}
            alt="Seneca Innovation"
          />
        </Col>
        {/* <Col sm={2}>Sponser Logo</Col>
      <Col sm={2}>Sponser Logo</Col>
      <Col sm={2}>Sponser Logo</Col>
    <Col sm={2}>Sponser Logo</Col> */}
        <Col sm={6}>
          <img
            src={SenecaPolytechnic}
            style={{ borderRadius: "10px", marginBottom: "1em" }}
            alt="Seneca Innovation"
          />
        </Col>
      </Row>
    </>
  );
}

import { Row, Col } from "react-bootstrap";
import SenecaAppliedResearch from "../../../svgs/seneca-applied-research.png";
import SenecaPolytechnic from "../../../svgs/seneca-polytechnic.png";
import "./banner.css";
import { Sponsers } from "../../../Data/Schema/sponsers";

export default function SponsersBanner(props: { sponsers: Sponsers[] }) {
  return (
    <>
      <h2 style={{ marginTop: "1em" }}>
        <strong>Our Sponsors</strong>
      </h2>
      <Row>
        {props.sponsers.map((sponser) => (
          <Col
            key={sponser.id}
            className="center-hv"
            style={{ margin: "1em 0" }}
          >
            <img
              src={sponser.path}
              style={{ width: sponser.width }}
              alt={sponser.title}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

import SampleClip from "../../../svgs/ClipArts/mindSet.png";
import { WordDescription } from "../../../Data/Schema/utilSchema";
import { Row, Col } from "react-bootstrap";
import "../about.css";

export default function WorkingItem({ work }: { work: WordDescription }) {
  return (
    <div id="work-item">
      <Row>
        <Col sm={2}>
          <div className="red-background rounded-border">
            <img src={SampleClip} alt="icon" width={25} />
          </div>
        </Col>
        <Col sm={10}>
          <p>
            <strong>{work.title}</strong>
          </p>
          <p>{work.description}</p>
        </Col>
      </Row>
    </div>
  );
}

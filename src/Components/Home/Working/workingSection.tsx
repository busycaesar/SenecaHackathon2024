import { WordDescription } from "../../../Data/Schema/utilSchema";
import WorkingItem from "./workingItem";
import { Row, Col } from "react-bootstrap";

export default function WorkingSection({
  works,
}: {
  works: WordDescription[];
}) {
  return (
    <div className="page-content">
      <h2>
        <strong>Why Participate</strong>
      </h2>
      <Row>
        {works.map((work, index) => (
          <Col key={index} md={6}>
            <WorkingItem work={work} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

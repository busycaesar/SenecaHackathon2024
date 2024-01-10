import { WordDescription } from "../../../Data/Schema/utilSchema";
import WorkingItem from "./workingItem";
import { Row, Col } from "react-bootstrap";

export default function WorkingSection({
  works,
}: {
  works: WordDescription[];
}) {
  return (
    <div>
      <h2>
        <strong>How it Works</strong>
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

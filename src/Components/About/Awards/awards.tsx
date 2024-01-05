import AwardLevel from "./awardLevel";
import { Award } from "../../../Data/Schema/awardSchema";
import { Row, Col } from "react-bootstrap";

export default function Awards({ awards }: { awards: Award[] }) {
  type HeightsMap = { [key: number]: number };
  const heights: HeightsMap = {
    1: 30,
    2: 28,
    3: 26,
    4: 22,
  };
  return (
    <>
      <h2>
        <strong>Prizes and Awards</strong>
      </h2>
      {/* <Row>
        {awards.map((award, index) => (
          <Col key={index} sm={3} style={{ padding: "0" }}>
            <AwardLevel award={award} height={heights[award.level]} />
          </Col>
        ))}
      </Row> */}
    </>
  );
}

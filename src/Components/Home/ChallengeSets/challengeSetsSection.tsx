import { WordDescription } from "../../../Data/Schema/utilSchema";
import { Row, Col } from "react-bootstrap";
import ChallengeSetItem from "./challengeSetItem";

export default function ChallengeSetsSection({
  challengeSet,
}: {
  challengeSet: WordDescription[];
}) {
  return (
    <>
      <h2>
        <strong>Challenge Sets</strong>
      </h2>
      <p>
        Explore a variety of challenges in the hackathon and demonstrate your
        innovative skills and creativity. Choose your passion and make a
        real-world impact.
      </p>
      <Row style={{ margin: "1.5em 0" }}>
        {challengeSet.map((challengeSetItem, index) => (
          <Col key={index} md={6}>
            <ChallengeSetItem challengeSetItem={challengeSetItem} />
          </Col>
        ))}
      </Row>
      <div className="button" style={{ textAlign: "center" }}>
        <a href={`/challenge-sets`}>
          <button>More on Challenge Sets</button>
        </a>
      </div>
    </>
  );
}

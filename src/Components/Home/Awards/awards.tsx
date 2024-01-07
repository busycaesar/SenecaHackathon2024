import React from "react";
import AwardLevel from "./awardLevel";
import { Row, Col } from "react-bootstrap";
import "./awards.css";

export default function Awards(props: { awards: any }) {
  console.log(props.awards.length);
  return (
    <>
      <h2>
        <strong>Prizes and Awards</strong>
      </h2>
      <Row>
        {props.awards.map((award: any) => (
          <Col md={3} key={award._id}>
            <AwardLevel
              awardLevelOrder={award.level}
              awardLevelName={award.awardName}
              awardLevelPrice={award.price}
              awardLevelDescription={award.description}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

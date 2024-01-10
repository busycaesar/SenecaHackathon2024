import React from "react";

export default function AwardLevel(props: {
  awardLevelOrder: Number;
  awardLevelName: string;
  awardLevelDescription: string;
  awardLevelPrice: Number;
}) {
  return (
    <div className="award">
      <span style={{ fontSize: "xx-large" }}>
        {props.awardLevelOrder.toString()}
      </span>
      <h3>
        <strong>{props.awardLevelName}</strong>
      </h3>
      <strong style={{ fontSize: "x-large" }}>
        ${props.awardLevelPrice.toString()}
      </strong>
      <p>{props.awardLevelDescription}</p>
    </div>
  );
}

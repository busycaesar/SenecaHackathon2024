import React from "react";
import ChallengeSet from "../Components/ChallengeSet/challengeSet";

export default function ChallengeSets() {
  return (
    <>
      <h1 className="page-title">
        <strong>Know Your Challenge Sets</strong>
      </h1>
      <p style={{ textAlign: "center" }}>
        Challenge sets for the ThinkingNorth SmartCities Hackathon 2023 powered
        by Seneca Polytechnic
      </p>
      <ChallengeSet
        title="Lorem ipsum dolor sit amet consectetur"
        subtitle="Lorem ipsum dolor sit amet consectetur"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus, fuga laudantium, vel laborum repellendus nemo dicta ullam ut voluptatibus consectetur. Quasi, dolorem. Qui vero porro architecto quaerat ipsam neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem incidunt? Tenetur iure velit maxime autem sunt, veritatis quam sequi. Tempore incidunt earum vero minus quisquam voluptates cupiditate ducimus provident?"
      />
    </>
  );
}

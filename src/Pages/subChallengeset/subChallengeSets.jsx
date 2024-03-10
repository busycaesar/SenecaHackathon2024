import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { findChallengeSetById} from "../../Data/Query/challengeQuery";

function SubChallengeSet() {
  const { id } = useParams();
  console.log(id)
  const challengeSet = findChallengeSetById(id);

  return (
    <div>
      <section className="py-20 bg-white p-20">
        <h2>{challengeSet.name}</h2>
        {challengeSet.challenges && challengeSet.challenges.length > 0 ? (
          challengeSet.challenges.map((challenge, index) => (
            <div key={index} className="mb-10">
              <h3 className="text-xl font-bold">{challenge.categoryTitle}</h3>
              <p>{challenge.categoryDescription}</p>
            </div>
          ))
        ) : (
          <p>No challenges available.</p>
        )}
      </section>
    </div>
  );
}

export default SubChallengeSet;

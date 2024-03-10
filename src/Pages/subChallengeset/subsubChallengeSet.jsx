import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findChallengeSetById } from "../../Data/Query/challengeQuery";
import { Link } from "react-router-dom";

function CategorySubChallengeSet() {
  const { id, categoryName } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const challengeSet = findChallengeSetById(id);
    if (challengeSet) {
      const foundCategory = challengeSet.challenges.find(
        (challenge) =>
          challenge.categoryName.toLowerCase() === categoryName.toLowerCase()
      );
      setCategory(foundCategory);
    }
  }, [id, categoryName]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="py-20 bg-white p-20">
        <h2>{category.categoryTitle}</h2>
        <p>{category.categoryDescription}</p>
        {category.problemStatement && category.problemStatement.length > 0 && (
          <div>
            <h3>Problem Statements</h3>
            {category.problemStatement.map((statement, index) => (
              <div key={index}>
                <h4>{statement.title}</h4>
                <p>{statement.description}</p>
              </div>
            ))}
          </div>
        )}
        {category.possibleSolution && category.possibleSolution.length > 0 && (
          <div>
            <h3>Possible Solutions</h3>
            {category.possibleSolution.map((solution, index) => (
              <div key={index}>
                <h4>{solution.title}</h4>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default CategorySubChallengeSet;

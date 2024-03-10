import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { findChallengeSetById } from "../../Data/Query/challengeQuery";
import { Link } from "react-router-dom";

const findCategoryByName = (challenges, categoryName) => {
  return challenges.find(
    (challenge) =>
      challenge.categoryName.toLowerCase() === categoryName.toLowerCase()
  );
};

function CategorySubChallengeSet() {
  const { id, categoryName } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const challengeSet = findChallengeSetById(id);
    const foundCategory = findCategoryByName(
      challengeSet.challenges,
      categoryName
    );
    setCategory(foundCategory);
  }, [id, categoryName]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="py-20 bg-white p-20">
        <h2>{category.categoryTitle}</h2>
        <p>{category.categoryDescription}</p>
      </section>
    </div>
  );
}

export default CategorySubChallengeSet;

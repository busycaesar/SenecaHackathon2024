import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findChallengeSetById } from "../../Data/Query/challengeQuery";
import { Zoom, Fade } from "react-awesome-reveal";

function CategorySubChallengeSet() {
  const { id, categoryName } = useParams();
  const [category, setCategory] = useState(null);
  const [challengeSet, setChallengeSet] = useState(null);

  useEffect(() => {
    setChallengeSet(() => findChallengeSetById(id));

    if (challengeSet) {
      const foundCategory = challengeSet.challenges.find(
        (challenge) =>
          challenge.categoryName.toLowerCase() === categoryName.toLowerCase()
      );
      setCategory(foundCategory);
    }
  }, [id, categoryName, category, challengeSet]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    // <section class="py-20 bg-white p-20">
    <section className="mx-auto  text-black font-gotham sm:text-base text-sm">
      <div className="mx-auto w-3/4 sm:w-1/4 xl:w-1/6">
        <img
          src={challengeSet.img}
          alt={challengeSet.name}
          className="w-full"
        />
      </div>
      <h1 className="font-semibold text-2xl sm:text-3xl text-center my-4 tracking-wide text-my-red">
        {category.categoryTitle}
      </h1>
      <Fade triggerOnce direction="up">
        <div className="border-solid border-my-red rounded-2xl shadow-2xl p-4 bg-my-red animateSection">
          <h2 className="mb-0 text-2xl font-semibold text-white">
            Description
          </h2>
          <div className="flex h-1 rounded-full bg-white my-2"></div>
          <p className="text-white">{category.categoryDescription}</p>
        </div>
      </Fade>

      {(category.problemStatement.length > 0 ||
        category.problemStatementDescription) && (
        <Fade triggerOnce direction="up">
          <div className="border-solid border-my-red rounded-2xl shadow-2xl p-4 mt-3 animateSection">
            <h2 className="mb-0 text-lg font-semibold text-my-red">
              Problem Statement
            </h2>
            <p>{category.problemStatementDescription}</p>
            <div>
              {category.problemStatement.length > 1 &&
                category.problemStatement.map((statement, index) => (
                  <Zoom triggerOnce key={index + statement}>
                    <div className="bg-my-red px-3 sm:px-4 py-4 my-2 sm:mx-3 text-gray-200 rounded-lg border-solid border-gray-700 border-4 shadow-md">
                      <h3 className="mb-2 text-base sm:text-xl font-bold tracking-tight">
                        {statement.title}
                      </h3>
                      <hr className="my-2" />
                      <p className="text-sm sm:text-base ">
                        {statement.description}
                      </p>
                    </div>
                  </Zoom>
                ))}

              {category.problemStatement.length === 1 && (
                <Zoom triggerOnce>
                  <div className="bg-my-red px-4 py-4 my-2 sm:mx-3 text-gray-200 rounded-lg border-solid border-gray-700 border-4 shadow-md">
                    <p className="text-sm sm:text-base ">
                      {category.problemStatement[0].description}
                    </p>
                  </div>
                </Zoom>
              )}
            </div>
          </div>
        </Fade>
      )}
      {(category.possibleSolutionDescription ||
        category.possibleSolution.length > 0) && (
        <Fade triggerOnce direction="up">
          <div className="border-solid border-my-red rounded-2xl shadow-2xl p-4 bg-gray-300 mt-3 animateSection">
            <h2 className="mb-0 text-lg font-semibold text-my-red">
              Possible Solutions
            </h2>
            <p>{category.possibleSolutionDescription}</p>
            <div>
              {category.possibleSolution.length > 1 &&
                category.possibleSolution.map((statement, index) => (
                  <Zoom triggerOnce key={index + statement}>
                    <div className="bg-my-red px-4 py-4 my-2 sm:mx-3 text-gray-200 rounded-lg border-solid border-gray-700 border-4 shadow-md">
                      <h3 className="mb-2 text-base sm:text-xl font-bold tracking-tight">
                        {statement.title}
                      </h3>
                      <hr className="my-2" />
                      <p className="text-sm sm:text-base ">
                        {statement.description}
                      </p>
                    </div>
                  </Zoom>
                ))}

              {category.possibleSolution.length === 1 && (
                <Zoom triggerOnce>
                  <div className="bg-my-red px-4 py-4 my-2 sm:mx-3 text-gray-200 rounded-lg border-solid border-gray-700 border-4 shadow-md">
                    <p className="text-sm sm:text-base ">
                      {category.possibleSolution[0].description}
                    </p>
                  </div>
                </Zoom>
              )}
            </div>
          </div>
        </Fade>
      )}
    </section>
  );
}

export default CategorySubChallengeSet;

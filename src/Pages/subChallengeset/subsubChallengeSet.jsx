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
    // <section class="py-20 bg-white p-20">
    <section className="mx-auto bg-gray-200 p-8 border-solid border-red-700 rounded-2xl shadow-2xl">
      <h1 className="font-semibold text-center my-4 tracking-wide text-red-700">
        {category.categoryTitle}
      </h1>
      <h2 className="mb-0 text-lg font-semibold text-gray-700">Description</h2>
      <p className="text-gray-600">{category.categoryDescription}</p>
      <h2 className="mb-0 text-lg font-semibold text-gray-700">
        Problem Statement
      </h2>
      <div>
        {category.problemStatement.map((statement, index) => (
          <div className="bg-red-700 px-4 py-2 my-2 mx-3 text-gray-200 rounded-md">
            <h3 className="mb-2 text-2xl font-bold tracking-tight ">
              {statement.title}
            </h3>
            <p className="font-normal ">{statement.content}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-600">
        Participants are encouraged to think outside the box and create a smart
        self-checkout system that revolutionizes the retail experience in smart
        cities, promoting efficiency, sustainability, and convenience for both
        retailers and customers.
      </p>
      <div>
        <div></div>
      </div>
      <p className="text-lg font-semibold text-gray-700">Possible Solutions</p>
      <br></br>
      <p className="text-gray-600">
        Select one of the 3 technologies and develop a solution with 2 or more
        features mentioned above.
      </p>
      <div>
        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Gesture Recognition
          </h3>
          <p className="text-gray-600">
            Use gesture recognition technology to allow customers to scan and
            bag items simply by waving their hands over the scanner, reducing
            the need for physical contact with the system.
          </p>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Voice Recognition
          </h3>
          <p className="text-gray-600">
            Participants can develop a machine learning-based model that can
            identify fraudulent activities based on data patterns. The model can
            be trained on a dataset of phishing, fraud, and digital scam
            incidents to identify common patterns and signatures of these scams.
          </p>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div className="my-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Augmented Reality Assistance
          </h3>
          <p className="text-gray-600">
            Develop an augmented reality (AR) app that assists customers in
            finding and scanning items, providing real-time information about
            product features and prices.
          </p>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div></div>
    </section>
  );
  // <div>
  //   <section className="py-20 bg-white p-20">
  //     <h2>{category.categoryTitle}</h2>
  //     <p>{category.categoryDescription}</p>
  //     {category.problemStatement && category.problemStatement.length > 0 && (
  //       <div>
  //         <h3>Problem Statements</h3>
  //         {category.problemStatement.map((statement, index) => (
  //           <div key={index}>
  //             <h4>{statement.title}</h4>
  //             <p>{statement.description}</p>
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //     {category.possibleSolution && category.possibleSolution.length > 0 && (
  //       <div>
  //         <h3>Possible Solutions</h3>
  //         {category.possibleSolution.map((solution, index) => (
  //           <div key={index}>
  //             <h4>{solution.title}</h4>
  //             <p>{solution.description}</p>
  //           </div>
  //         ))}
  //       </div>
  //     )}
  //   </section>
  // </div>
  // );
}

export default CategorySubChallengeSet;

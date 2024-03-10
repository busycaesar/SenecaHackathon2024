import { Slide } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
import { findChallengeSetById } from "../../Data/Query/challengeQuery";
import { Link } from "react-router-dom";
function SubChallengeSet() {
  const { id } = useParams();
  const challengeSet = findChallengeSetById(id);

  return (
    <div>
      <section className="py-5 sm:py-10 font-gotham bg-gray-100 sm:px-8 px-2">
        <div className="mx-auto w-3/4 sm:w-1/4 xl:w-1/6">
          <img
            src={challengeSet.img}
            alt={challengeSet.name}
            className="w-full"
          />
        </div>
        <h2 className="text-center text-my-red font-bold text-3xl md:text-5xl">{challengeSet.name}</h2>
        {challengeSet.challenges && challengeSet.challenges.length > 0 ? (
          challengeSet.challenges.map((challenge, index) => (
            <Slide
              direction={index % 2 === 0 ? "left" : "right"}
              triggerOnce
              key={index}
            >
              <div className="mb-6 border-solid bg-white border-gray-500 border-4 shadow-md p-6 rounded-2xl">
                <Link
                  className="no-underline"
                  to={{
                    pathname: `/challenge-sets/${challengeSet.id}/${challenge.categoryName}`,
                    state: { challengeSet: challengeSet.challenges },
                  }}
                >
                  <h3 className="text-lg md:text-2xl font-bold no-underline text-my-red">
                    {challenge.categoryTitle}
                  </h3>
                </Link>
                <p className="font-gotham text-lg md:text-xl ">
                  {challenge.categoryDescription}
                </p>
              </div>
            </Slide>
          ))
        ) : (
          <p>No challenges available.</p>
        )}
      </section>
    </div>
  );
}

export default SubChallengeSet;

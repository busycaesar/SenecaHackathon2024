import { Slide } from "react-awesome-reveal";
import { useParams } from "react-router-dom";
import { findChallengeSetById } from "../../Data/Query/challengeQuery";
import { Link } from "react-router-dom";
function SubChallengeSet() {
  const { id } = useParams();
  const challengeSet = findChallengeSetById(id);

  return (
    <div>
      <section className="py-5 sm:py-10  sm:px-8 px-2 no-underline">
        <div className="mx-auto w-3/4 sm:w-1/4 no-underline xl:w-1/6">
          <img
            src={challengeSet.img}
            alt={challengeSet.name}
            className="w-full"
          />
        </div>
        <div className="shadow rounded-xl mt-2">
          <h2 className="font-gotham p-1 bg-gray-900 text-center uppercase md:text-4xl text-lg bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            {challengeSet.name}
          </h2>
        </div>

        {challengeSet.challenges && challengeSet.challenges.length > 0 ? (
          challengeSet.challenges.map((challenge, index) => (
            <Slide
              direction={index % 2 === 0 ? "left" : "right"}
              triggerOnce
              key={index}
            >
              <div className="mb-10 shadow-2xl hover:scale-110 duration-300 transition-all ease-in-out p-3 rounded-2xl no-underline">
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

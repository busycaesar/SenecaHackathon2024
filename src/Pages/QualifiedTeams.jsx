import { CSData } from "../Data/JSONData";
import { findQualifiedTeamById } from "../Data/Query/qualifiedTeamQuery";

export default function QualifiedTeams() {
  console.log(
    findQualifiedTeamById(1).map((temp) => console.log(temp.team_name))
  );

  // Create the href string by concatenating the fixed part and the variable
  return (
    <>
      <section class="overflow-hidden">
        <h1 class="text-center font-gotham font-bold text-3xl md:text-5xl">
          Housing Hackathon 2024 Finalists
          <div className="flex h-4 rounded-full bg-my-red my-4"></div>
        </h1>
        {/* <div className=" font-gotham flex-auto container text-center">
          {ChallengeSetData?.map((challengeSet) => (
            <a
              class="p-2 m-3 btn text-white bg-my-red hover:bg-gray-500 d-inline-block"
              href="${href}"
            >
              {challengeSet.title}
            </a>
          ))}
        </div> */}

        {CSData?.map((challengeSet) => (
          <div class="position-relative font-gotham py-20 bg-light-light">
            <div class="position-absolute top-0 start-0 h-100 w-100"></div>
            <div class="position-relative container">
              <div class="mb-24 text-center mw-md-5xl mx-auto">
                <img
                  class="rounded-xl mx-auto items-center justify-center shadow-xl mb-6 h-[300px] w-[300px] hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={challengeSet.image}
                  alt=""
                  id={challengeSet.challenge_set}
                ></img>
                <div className="block bg-my-red px-5 py-2 max-w-max mx-auto rounded-3xl">
                  <h2
                    class="font-heading m-4 font-bold text-white text-3xl md:text-5xl"
                    id="student-housing"
                  >
                    {challengeSet.title}
                  </h2>
                </div>
                <p class="mt-6 font-bold text-2xl text-black text-secondary">
                  Congratulations to the following Teams for qualifying for the
                  next round in this challenge category.
                </p>
              </div>
              <div class="mw-md-6xl mx-auto">
                <div class="row g-8">
                  {console.log(challengeSet.id)}
                  {findQualifiedTeamById(challengeSet._id).map((team) => (
                    <div class="mb-8 col-12 col-md-4">
                      <div class="position-relative p-8 pt-14 h-100 bg-white rounded shadow">
                        <div class="position-absolute top-0 start-50 translate-middle-x mt-n7 border mt-4 border-5 border-light-light overflow-hidden rounded-pill">
                          <div class="d-flex justify-content-center align-items-center fs-9 text-white fw-semibold bg-my-red w-[48px] h-[48px]">
                            {team.id}
                          </div>
                        </div>

                        <h3 class="my-8 text-center text-my-red font-heading fs-9">
                          {team.team_name}
                        </h3>
                      </div>
                    </div>
                  ))}
                  <div className="flex h-4 rounded-full bg-my-red my-4"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

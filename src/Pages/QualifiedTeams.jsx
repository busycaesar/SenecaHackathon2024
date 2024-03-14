import { ChallengeSetData } from "../Data/JSONData";
import { findQualifiedTeamById } from "../Data/Query/qualifiedTeamQuery";

export default function QualifiedTeams() {
  console.log(
    findQualifiedTeamById(1).map((temp) => console.log(temp.team_name))
  );
  return (
    <>
      <section class="overflow-hidden">
        <h1 class="text-center font-gotham font-bold text-3xl md:text-5xl">
          Qualified Teams
        </h1>
        <div className=" font-gotham flex-auto container text-center">
          {ChallengeSetData?.map((challengeSet) => (
            <a
              class="p-2 m-3 btn text-white bg-my-red d-inline-block"
              href="#student-housing"
            >
              {challengeSet.title}
            </a>
          ))}
        </div>

        {ChallengeSetData?.map((challengeSet) => (
          <div class="position-relative font-gotham py-20 bg-light-light">
            <div class="position-absolute top-0 start-0 h-100 w-100"></div>
            <div class="position-relative container">
              <div class="mb-24 text-center mw-md-5xl mx-auto">
                <img
                  class="rounded-xl mx-auto items-center justify-center shadow-xl mb-6 h-[300px] w-[300px] hover:scale-105 transition-transform duration-500 ease-in-out"
                  src="/svgs/challengeSet/Student Housing.svg"
                  alt=""
                ></img>
                <h2
                  class="font-heading mb-4 font-bold text-my-red text-3xl md:text-5xl"
                  id="student-housing"
                >
                  {challengeSet.title}
                </h2>
                <p class="mb-0 text-black text-secondary">
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
                        <div class="position-absolute top-0 start-50 translate-middle-x mt-n7 border border-5 border-light-light overflow-hidden rounded-pill">
                          <div class="d-flex justify-content-center align-items-center fs-9 text-white fw-semibold bg-my-red w-[48px] h-[48px]">
                            1
                          </div>
                        </div>
                        <h3 class="mb-4 text-center text-my-red font-heading fs-9">
                          Measure your performance
                        </h3>
                        <ul class="mb-0 text-left fw-medium text-secondary">
                          Stay connected with your team and make quick decisions
                          wherever you are.
                          <li className="ml-4">{team.team_name}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

import { CSWinners } from "../Data/JSONData";
import { findCategoryIconById } from "../Data/Query/challengeQuery";

export default function ChallengeSetWinners() {
  return (
    <>
      <section class="relative font-gotham py-24">
        <div class="absolute top-0 left-0 w-full h-full"></div>
        <div class="container relative z-10 px-4 mx-auto">
          <div class="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
            <h3 class="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              Challenge Set Winners
            </h3>
            <p class="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">
              This is our Challenge Set Winners
            </p>
          </div>
          {CSWinners.map((winner) => (
            <div class="flex mx-auto mb-12 bg-white md:mb-20">
              <div class="w-full  md:flex md:w-full p-4 mb-8 ">
                <div className="md:1/3">
                  <a
                    class="block mx-auto mb-6 overflow-hidden rounded-md"
                    href="#"
                  >
                    {console.log(
                      findCategoryIconById(winner.challenge_set).image
                    )}
                    <img
                      class="md:w-[400px]"
                      src={findCategoryIconById(winner.challenge_set).image}
                      alt="Challenge Set Icon"
                    />
                  </a>
                </div>
                <div class="md:m-auto text-center md:w-1/3">
                  <p class="inline-block mb-4 text-2xl md:text-3xl leading-tight text-my-red font-bold ">
                    {winner.team_name}
                  </p>
                  <ul class="text-xl justify-between text-black list-none">
                    {winner.team_member.map((member) => (
                      <li>{member}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:1/3">
                  <a class="block mb-6 overflow-hidden rounded-md" href="#">
                    <img
                      class="md:w-[400px]"
                      src={winner.image}
                      alt="Team Photo"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

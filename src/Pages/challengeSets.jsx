import React from "react";
import ChallengeSet from "../Components/ChallengeSet/challengeSet";
import SocialMediaIcons from "../Components/SocialMedia/socialMedia";
import { WordDescription } from "../Data/Schema/utilSchema";
import ChallengeSetItem from "../Components/Home/ChallengeSets/challengeSetItem";
import { Link } from "react-router-dom";
import challengeSetObject from "../Data/Challengesets/challengeSets.json"; // Assuming the corrected file path and variable name
import SubChallengeSet from "./subChallengeset/subChallengeSets";

export default function ChallengeSets() {
  const [toggleSubChallenge, setToggleSubChallenge] = React.useState(false);

  const handleSubChallenge = (subChallenge) => {
    setToggleSubChallenge(!toggleSubChallenge);
  };

  return (
    <>
      <section className="py-20">
        <h2>Challenge Set</h2>
        {challengeSetObject.map((set) =>
          set.challengeSets.map((challengeSet, index) => (
            <div key={index} className="flex flex-wrap -mx-4 mb-20">
              <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                <span className="inline-block py-1 uppercase text-lg md:text-2xl font-semibold  rounded-full text-my-red">
                  {challengeSet.name}{" "}
                </span>
                <h3 className="my-4 text-xl md:text-lg font-bold font-gotham">
                  {challengeSet.detail}
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400"></p>
                <a className="text-xs font-semibold text-blue-600" href="#">
                  <Link
                    to={{
                      pathname: `/challenge-sets/${challengeSet.id}`,
                      state: { challengeSet: challengeSet },
                    }}
                  >
                    Read More
                  </Link>

                  <svg
                    className="inline-block w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1 rounded-xl">
                {/* Example image. Replace or modify as needed. */}
                <img
                  className="w-full h-80 object-fill rounded"
                  src={challengeSet.img}
                  alt=""
                />
              </div>
            </div>
          ))
        )}
      </section>
      <div className="center">
        <div className="bg-my-red p-2 flex mx:auto curved-border">
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
}

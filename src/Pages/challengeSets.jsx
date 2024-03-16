import React from "react";
import SocialMediaIcons from "../Components/SocialMedia/socialMedia";
import { Link } from "react-router-dom";
import challengeSetObject from "../Data/Challengesets/challengeSets.json"; // Assuming the corrected file path and variable name
import { JackInTheBox } from "react-awesome-reveal";
export default function ChallengeSets() {
  return (
    <>
      <section className="py-2 font-gotham">
        <h2 className="text-center font-bold text-3xl md:text-5xl text-my-red">Know Your Challenge Sets</h2>
        {challengeSetObject.map((set) =>
          set.challengeSets.map((challengeSet, index) => (
            <JackInTheBox key={index} triggerOnce>
              <div
                className="flex flex-wrap -mx-4 mb-8 border-solid  bg-white shadow-xl p-3 rounded-2xl"
              >
                <div className="w-full lg:w-2/3 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                  <Link
                    to={{
                      pathname: `/challenge-sets/${challengeSet.id}`,
                      state: { challengeSet: challengeSet },
                    }}
                  >
                    <h3 className="inline-block py-1 uppercase text-2xl md:text-4xl md:mt-10 font-semibold hover:underline  rounded-full text-my-red">
                      {challengeSet.name}
                    </h3>
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
                  </Link>
                  <p className="text-xl text-black font-medium md:text-lg  font-gotham">
                    {challengeSet.detail}
                  </p>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-8 order-0 lg:order-1 rounded-xl">
                  <img
                    className="w-full h-80 object-fill rounded"
                    src={challengeSet.img}
                    alt=""
                  />
                </div>
              </div>
            </JackInTheBox>
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

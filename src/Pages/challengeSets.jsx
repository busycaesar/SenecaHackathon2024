import React from "react";
import SocialMediaIcons from "../Components/SocialMedia/socialMedia";
import { Link } from "react-router-dom";
import challengeSetObject from "../Data/Challengesets/challengeSets.json"; // Assuming the corrected file path and variable name
import { JackInTheBox } from "react-awesome-reveal";
export default function ChallengeSets() {
  return (
    <>
      <section className="py-20">
        <div className="shadow rounded-xl">
          <h2 className="font-gotham p-1 bg-gray-900 text-center uppercase md:text-4xl text-lg bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Challenge Set
          </h2>
        </div>
        {challengeSetObject.map((set) =>
          set.challengeSets.map((challengeSet, index) => (
            <JackInTheBox key={index} triggerOnce>
              <div className="flex flex-wrap -mx-4 mb-20 shadow-xl hover:scale-105 transition-all ease-in-out duration-300 p-2 rounded-2xl">
                <div className="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1 lg:order-0">
                  <Link
                    to={{
                      pathname: `/challenge-sets/${challengeSet.id}`,
                      state: { challengeSet: challengeSet },
                    }}
                  >
                    <h3 className="inline-block py-1 uppercase text-lg md:text-2xl font-semibold  rounded-full text-my-red">
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
                <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1 rounded-xl">
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

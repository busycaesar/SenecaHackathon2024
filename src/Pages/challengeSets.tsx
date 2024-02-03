import React from "react";
import ChallengeSet from "../Components/ChallengeSet/challengeSet";
import SocialMediaIcons from "../Components/SocialMedia/socialMedia";
import { WordDescription } from "../Data/Schema/utilSchema";
import ChallengeSetItem from "../Components/Home/ChallengeSets/challengeSetItem";

export default function ChallengeSets() {
  return (
    <>
      <h1 className="text-5xl text-my-red page-title">
        <strong>Know Your Challenge Sets</strong>
      </h1>
      <div className="flex flex-wrap rounded-3xl item-center bg-white -mx-4 mb-4">
            <div className="my-8 w-full lg:w-4/5 px-4">
              <div className="md:text-left">
                <h2 className="text-black mb-4 text-3xl md:text-3xl font-semibold font-heading">Student Housing</h2>
                <p className="text-base text-black"> Focus exclusively on the unique challenges and opportunities in student housing. This category invites you to craft innovative housing models that cater to the specific needs of students. From maximizing space in dorm rooms to creating communal living spaces that foster learning and collaboration, your ideas can transform the student living experience.</p>
              </div>
            </div>
            <div className="md:my-8 order-first md:order-last w-full md:w-1/5 px-4">
              <div className="">
                <img className="max-w-3xs max-h-3xs md:max-w-xl h-full w-full md:h-1/2 md:w-full md:object-cover object-center rounded-md" src="/svgs/challengeSet/Student Housing.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap rounded-3xl item-center bg-white -mx-4 mb-4">
            <div className="my-8 w-full lg:w-4/5 px-4">
              <div className="md:text-left">
                <h2 className="text-black mb-4 text-3xl md:text-3xl font-semibold font-heading">Affordable Housing Solutions</h2>
                <p className="text-base text-black"> Dive into the challenge of making housing accessible and affordable for everyone. In this category, you’ll innovate to redefine rental management systems, streamline homeownership processes, and create sustainable living models. Your solutions could be the key to reshaping the landscape of housing affordability, opening doors to homes for people from all walks of life.</p>
              </div>
            </div>
            <div className="md:my-8 order-first md:order-last w-full md:w-1/5 px-4">
              <div className="">
                <img className="max-w-3xs max-h-3xs md:max-w-xl h-full w-full md:h-1/2 md:w-full md:object-cover object-center rounded-md" src="/svgs/challengeSet/Affordable Housing Solutions.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap rounded-3xl item-center bg-white -mx-4 mb-4">
            <div className="my-8 w-full lg:w-4/5 px-4">
              <div className="md:text-left">
                <h2 className="text-black mb-4 text-3xl md:text-3xl font-semibold font-heading">Community Well-being</h2>
                <p className="text-base text-black">Prioritize the heart and soul of residential areas—community well-being. Tackle challenges related to health, education, and social connectivity to enhance the quality of life within neighbourhoods. Whether it's through designing health-integrated living spaces, creating digital inclusion hubs, or fostering community engagement, your contributions will sow the seeds for thriving, supportive communities.</p>
              </div>
            </div>
            <div className="md:my-8 order-first md:order-last w-full md:w-1/5 px-4">
              <div className="">
                <img className="max-w-3xs max-h-3xs md:max-w-xl h-full w-full md:h-1/2 md:w-full md:object-cover object-center rounded-md" src="/svgs/challengeSet/Community Well-being.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap rounded-3xl item-center bg-white -mx-4 mb-4">
            <div className="my-8 w-full lg:w-4/5 px-4">
              <div className="md:text-left">
                <h2 className="text-black mb-4 text-3xl md:text-3xl font-semibold font-heading">Housing Tech</h2>
                <p className="text-base text-black">Step into the future where technology and housing intersect. In this category, you’ll harness the power of fintech, IoT, and smart home innovations to revolutionize the way we secure, manage, and experience our homes. From fintech solutions that make homeownership more attainable to smart security systems that keep neighbourhoods safe, your tech-driven solutions will pave the way for the next generation of living spaces.</p>
              </div>
            </div>
            <div className="md:my-8 order-first md:order-last w-full md:w-1/5 px-4">
              <div className="">
                <img className="max-w-3xs max-h-3xs md:max-w-xl h-full w-full md:h-1/2 md:w-full md:object-cover object-center rounded-md" src="/svgs/challengeSet/Housing Tech.svg" alt="" />
              </div>
            </div>
          </div>
      <div className="center">
      <div className="bg-my-red p-2 flex mx:auto curved-border"><SocialMediaIcons/></div></div>
      
      {/*Delete this below div which has visibility hidden. It is added to the code to keep the footer stick to the bottom of the website.*/}


    </>
  );
}

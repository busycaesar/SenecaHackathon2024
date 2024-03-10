import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderBanner from "../Components/Home/Banner/headerBanner";
import Testimonial from "../Components/Home/Testimonial/testimonials";
import SocialMediaSection from "../Components/Home/socialMediaSection";
import ChallengeSetsSection from "../Components/Home/ChallengeSets/challengeSetsSection";
import WorkingSection from "../Components/Home/Working/workingSection";
import SponsersBanner from "../Components/Home/Banner/sponsersBanner";
import PartnersBanner from "../Components/Home/Banner/PartnerInsitituions";
import { Sponsers } from "../Data/Schema/sponsers";
import { Partners } from "../Data/Schema/partners";
import WhoAreWe from "../Components/Home/whoAreWe";
import Awards from "../Components/Home/Awards/awards";
import ImportantDates from "../Components/Home/Dates/importantDates";
import WhoCanParticipate from "../Components/WhoParticipant/WhoParticipant";
import Prize from "../Components/Prize/Prize";
import {
  WorkingData,
  ImportantDateData,
  AwardData,
  ChallengeSetData,
  TestimonialData,
  SponsersData,
  PartnersData,
} from "../Data/JSONData";
import VideoComponents from "../Components/VideoComponent/VideoComponent";
import QandA from "../Components/Small Component/TFandQA";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [toggleVideo, setToggleVideo] = React.useState(true);

  const toggleVideoHandler = () => {
    setToggleVideo(!toggleVideo);
  };

  React.useEffect(() => {
    gsap.utils.toArray<Element>(".animateSection").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, scale: 0.85, y: 50, rotation: -1 },
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          rotation: 0,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });
  }, []); // dont change this set as run only once

  return (
    <>
      <HeaderBanner />
      <div className="animateSection -pt-4 rounded-xl -mt-24 md:-mt-60">
        {toggleVideo ? (
          <>
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleVideoHandler();
              }}
              className="text-dark-900 bg-white rounded-full p-1 absolute top-0 right-0 m-4 z-50 hover:cursor-pointer hover:bg-gray-200 transition-all duration-150 ease-in-out"
            >
              <svg
                width="23"
                height=""
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </>
        ) : (
          <div
            onClick={(e) => {
              e.preventDefault();
              toggleVideoHandler();
            }}
            className="text-dark-900
            hover:scale-125
            bg-white rounded-full p-2 absolute top-[14rem] right-0 m-4 z-50 hover:cursor-pointer hover:bg-gray-200 transition-all duration-150 ease-in-out"
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            Why Hackathon ?
          </div>
        )}
        {toggleVideo && <VideoComponents />}
      </div>

      <hr />

      {/* <div className="animateSection rounded-xl mt-3">
        <QandA />
      </div> */}

      {/* <hr /> */}

      <div
        className={`animateSection rounded-xl mt-18 ${
          toggleVideo ? "" : "mt-[20rem]"
        }`}
      >
        <WhoAreWe />
      </div>
      <hr />
      <div className="animateSection">
        <WhoCanParticipate />
      </div>
      <hr />
      <div className="animateSection">
        <WorkingSection works={WorkingData} />
      </div>
      <hr />
      <div className="animateSection">
        <Prize />
      </div>
      <hr />

      <div className="animateSection">
        <ImportantDates dates={ImportantDateData} />
      </div>
      <hr />
      <div className="animateSection">
        <ChallengeSetsSection challengeSet={ChallengeSetData} />
      </div>
      <hr />
      <div className="animateSection rounded-xl mt-3">
        <PartnersBanner partners={PartnersData} />
      </div>

      <hr />
      <div className="animateSection rounded-xl mt-3">
        <SponsersBanner sponsers={SponsersData} />
      </div>
      <hr />

      <div className="animateSection">
        <Testimonial testimonials={TestimonialData} />
      </div>
      <hr />
      <div className="animateSection">
        <SocialMediaSection />
      </div>
    </>
  );
}

/*
  <ImportantDates dates={ImportantDateData} />
        <hr />
        <ChallengeSetsSection challengeSet={ChallengeSetData} />
        <hr />
        <Testimonial testimonials={TestimonialData} />
        <hr />
        <SocialMediaSection />
*/

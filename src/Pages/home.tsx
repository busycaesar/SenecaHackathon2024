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

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
  }, []);

  return (
    <>
      <HeaderBanner />

      <div className="animateSection -pt-4 rounded-xl -mt-24 md:-mt-60">
        <VideoComponents />
      </div>

      <hr />

      <div className="animateSection rounded-xl mt-3">
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

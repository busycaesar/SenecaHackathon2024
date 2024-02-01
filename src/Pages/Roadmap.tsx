import React from "react";
import RegistrationImg from "../svgs/RoadmapImg/registration.png";
import ChallengeSetMentoring from "../svgs/RoadmapImg/challengeSetMentoring.png";
import Finale from "../svgs/RoadmapImg/finale.png";
import FinalistsAnnoucement from "../svgs/RoadmapImg/finalistsAnnoucement.png";
import FinalOpening from "../svgs/RoadmapImg/finalOpening.png";
import HackathonQualifiers from "../svgs/RoadmapImg/hackathonQualifiers.png";
import TeamFormation from "../svgs/RoadmapImg/teamFormation.png";
import PreHackathonMixer from "../svgs/RoadmapImg/preHackathonMixer.png";
import FinalistsAnnouncementsSVG from "../svgs/RoadmapImg/FinalistsAnnouncements.svg";
import HackathonFinaleSVG from "../svgs/RoadmapImg/HackathonFinale.svg";
import HackathonQualifiersSVG from "../svgs/RoadmapImg/HackathonQualifiers.svg";
import PreHackathonMixerSVG from "../svgs/RoadmapImg/Pre-hackathonMixer.svg";
import RegistrationSVG from "../svgs/RoadmapImg/Registration.svg";
import TeamFormationSVG from "../svgs/RoadmapImg/TeamFormation.svg";
import FinalOpeningSVG from "../svgs/RoadmapImg/FinalOpening.svg";
import ChallengeSetMentoringSVG from "../svgs/RoadmapImg/ChallengeSetMentoring.svg";

function Roadmap() {
  const items = [
    {
      title: "Registration",
      cardTitle: "22nd January 2024",
      media: {
        name: "Registration image",
        source: {
          url: RegistrationImg,
          horizontalUrl: RegistrationSVG,
        },
        type: "IMAGE",
      },
      info: "The registration portal will be open for interested students to sign up.",
    },
    {
      title: "Team Formation",
      cardTitle: "1st February 2024",
      media: {
        name: "Team Formation",
        source: {
          url: TeamFormation,
          horizontalUrl: TeamFormationSVG,
        },
        type: "IMAGE",
      },
      info: "The organizing committee will reach out to participants who registered individually to facilitate the grouping process.",
    },
    {
      title: "Pre-hackathon Mixer",
      cardTitle: "14th February 2024",
      media: {
        name: "Pre-hackathon Mixer",
        source: {
          url: PreHackathonMixer,
          horizontalUrl: PreHackathonMixerSVG,
        },
        type: "IMAGE",
      },
      info: "All qualified teams are given the opportunity to connect, exchange ideas, and start their exciting hackathon journey.",
    },
    {
      title: "Challenge Set Mentoring",
      cardTitle: "20th February 2024",
      media: {
        name: "Challenge Set Mentoring",
        source: {
          url: ChallengeSetMentoring,
          horizontalUrl: ChallengeSetMentoringSVG,
        },
        type: "IMAGE",
      },
      info:"Mentors for the Housing Hackathon will engage with each team and offer guidance and feedback according to their chosen challenge set."
    },
    {
      title: "Registration Deadline",
      cardTitle: "26th February 2024",
      media: {
        name: "Registration Deadline",
        source: {
          url: HackathonQualifiers,
          horizontalUrl: HackathonQualifiersSVG,
        },
        type: "IMAGE",
      },
      info: "This is the last day to sign up and register for the event.",
    },
    {
      title: "Opening Ceremony and Qualifier Round",
      cardTitle: "10th March 2024",
      media: {
        name: "Opening Ceremony and Qualifier Round",
        source: {
          url: FinalistsAnnoucement,
          horizontalUrl: FinalistsAnnouncementsSVG,
        },
        type: "IMAGE",
      },
      info: "Each team is expected to begin developing solutions for their selected challenge set.",
    },
    {
      title: "Qualifier Submission Deadline",
      cardTitle: "11th March 2024",
      media: {
        name: "Final Opening",
        source: {
          url: FinalOpening,
          horizontalUrl: FinalOpeningSVG,
        },
        type: "IMAGE",
      },
      info:"This is the last day for each team to submit their entry for judging. Please note that all finalists are expected to attend the in-person finale on March 16, 2024."
    },
    {
      title: "Finale",
      cardTitle: "16th March 2024",
      media: {
        name: "Hackathon Finale",
        source: {
          url: Finale,
          horizontalUrl: HackathonFinaleSVG,
        },
        type: "IMAGE",
      },
      info: "Qualified teams will be invited for the in-person finale. This marks the culmination of the 2024 Housing Hackathon in which the winning team will be formally awarded.",
    },
  ];

  return (
    <div>
      {/* Desktop view */}
      <div className="hidden lg:inline">
        <ol className="items-center sm:flex overflow-x-scroll list-none">
          {items.map((item, index) => {
            return (
              <li className="relative mb-6 sm:mb-0">
                <div className="h-60 w-80 text-center relative">
                  {index % 2 !== 0 && (
                    <>
                      <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-2 w-full">
                        {item.info && <p className="text-sm">{item.info}</p>}
                        <h1 className="text-xl font-bold">{item.title}</h1>
                      </div>
                    </>
                  )}
                  {index % 2 === 0 && (
                    <>
                      <p className="text-lg text-center w-80 font-bold">
                        {item.cardTitle}
                      </p>
                      <div className="h-4/5 mx-auto">
                        <img
                          src={item.media.source.horizontalUrl}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="hidden sm:flex w-full bg-red-700 h-0.5 0"></div>
                  <div className="z-10 w-5 h-5 bg-red-700 rounded-full ring-0 ring-white  sm:ring-8 dark:ring-gray-200 shrink-0"></div>
                  <div className="hidden sm:flex w-full bg-red-700 h-0.5 0"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-60 w-80 text-center">
                  {index % 2 === 0 && (
                    <>
                      <div className="flex justify-center flex-col w-80 ">
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        {item.info && <p className="text-sm">{item.info}</p>}
                      </div>
                    </>
                  )}
                  {index % 2 !== 0 && (
                    <>
                      <div className="h-4/5 mx-auto flex items-center justify-center w-80">
                        <img
                          src={item.media.source.horizontalUrl}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                      <p className="text-lg text-center w-80 font-bold">
                        {item.cardTitle}
                      </p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {/* Small screen view */}
      <div className="lg:hidden w-full">
        <ol className="items-center overflow-x-scroll list-none">
          {items.map((item, index) => {
            return (
              <li className="relative flex">
                <div className="h-60 w-2/5 text-center relative flex flex-col items-center justify-center">
                  {index % 2 !== 0 && (
                    <>
                      <div>
                        <h1 className="text-lg mx-0.5 font-bold">{item.title}</h1>
                        {item.info && <p className="text-sm">{item.info}</p>}
                      </div>
                    </>
                  )}
                  {index % 2 === 0 && (
                    <>
                      <div className="h-2/5">
                        <img
                          src={item.media.source.url}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                      <p className="text-base text-center font-bold">{item.cardTitle}</p>
                    </>
                  )}
                </div>
                <div className="flex flex-col items-center">
                  <div className=" h-full bg-red-700 w-0.5 0"></div>
                  <div className="z-10 w-5 h-5 bg-red-700 rounded-full ring-0 ring-white  sm:ring-8 dark:ring-gray-200 shrink-0"></div>
                  <div className=" h-full bg-red-700 w-0.5 0"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-60 w-2/5 text-center flex flex-col items-center justify-center">
                  {index % 2 === 0 && (
                    <>
                      <div>
                        <h1 className="text-lg mx-0.5 font-bold">{item.title}</h1>
                        {item.info && <p className="text-sm">{item.info}</p>}
                      </div>
                    </>
                  )}
                  {index % 2 !== 0 && (
                    <>
                      <div className="h-2/5">
                        <img
                          src={item.media.source.url}
                          alt={item.media.name}
                          className="h-full w-full"
                        ></img>
                      </div>
                      <p className="text-base text-center font-bold">{item.cardTitle}</p>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Roadmap;

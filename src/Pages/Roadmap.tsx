import React from "react";
import { Chrono } from "react-chrono";
import RegistrationImg from "../svgs/RoadmapImg/registration.png";
import ChallengeSetMentoring from "../svgs/RoadmapImg/challengeSetMentoring.png";
import Finale from "../svgs/RoadmapImg/finale.png";
import FinalistsAnnoucement from "../svgs/RoadmapImg/finalistsAnnoucement.png";
import FinalOpening from "../svgs/RoadmapImg/finalOpening.png";
import HackathonQualifiers from "../svgs/RoadmapImg/hackathonQualifiers.png";
import TeamFormation from "../svgs/RoadmapImg/teamFormation.png";
import PreHackathonMixer from "../svgs/RoadmapImg/preHackathonMixer.png";

function Roadmap() {
  const items = [
    {
      title: "Registration",
      cardTitle: "22nd January 2024",
      media: {
        name: "Registration image",
        source: {
          url: RegistrationImg,
        },
        type: "IMAGE",
      },
    },
    {
      title: "Team Formation",
      cardTitle: "1st February 2024",
      media: {
        name: "Team Formation",
        source: {
          url: TeamFormation,
        },
        type: "IMAGE",
      },
    },
    {
      title: "Pre-hackathon Mixer",
      cardTitle: "14th February 2024",
      media: {
        name: "Pre-hackathon Mixer",
        source: {
          url: PreHackathonMixer,
        },
        type: "IMAGE",
      },
    },
    {
      title: "Challenge Set Mentoring",
      cardTitle: "20th February 2024",
      media: {
        name: "Challenge Set Mentoring",
        source: {
          url: ChallengeSetMentoring,
        },
        type: "IMAGE",
      },
    },
    {
      title: "Hackathon Qualifiers",
      cardTitle: "10th & 12th March 2024",
      media: {
        name: "Hackathon Qualifiers",
        source: {
          url: HackathonQualifiers,
        },
        type: "IMAGE",
      },
    },
    {
      title: "Finalists Announcements",
      cardTitle: "13th March 2024",
      media: {
        name: "Finalists Announcements",
        source: {
          url: FinalistsAnnoucement,
        },
        type: "IMAGE",
      },
    },
    {
      title: "Final Opening",
      cardTitle: "15th March 2024",
      media: {
        name: "Final Opening",
        source: {
          url: FinalOpening,
        },
        type: "IMAGE",
      },
    },
    {
      title: "Hackathon Finale",
      cardTitle: "16th March 2024",
      media: {
        name: "Hackathon Finale",
        source: {
          url: Finale,
        },
        type: "IMAGE",
      },
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
                <div className="h-60 w-80 text-center">
                  {index % 2 !== 0 && (
                    <>
                      <div>
                        <h1 className="text-2xl">{item.title}</h1>
                        <p className="text-lg">{item.cardTitle}</p>
                      </div>
                      <div>
                        <img
                          src={item.media.source.url}
                          alt={item.media.name}
                          className="h-2/5 sm:h-3/5"
                        ></img>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-center">
                  <div className="z-10 w-5 h-5 bg-red-700 rounded-full ring-0 ring-white  sm:ring-8 dark:ring-gray-200 shrink-0"></div>
                  <div className="hidden sm:flex w-full bg-red-700 h-0.5 0"></div>
                </div>
                <div className="mt-3 sm:pe-8 h-60 w-80 text-center">
                  {index % 2 === 0 && (
                    <>
                      <div>
                        <h1 className="text-2xl">{item.title}</h1>
                        <p className="text-lg">{item.cardTitle}</p>
                      </div>
                      <div>
                        <img
                          src={item.media.source.url}
                          alt={item.media.name}
                          className="h-2/5 sm:h-3/5"
                        ></img>
                      </div>
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      {/* Small screen view */}
      <div className="lg:hidden" style={{ width: "95%" }}>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          showAllCardsHorizontal
          cardWidth={350}
          cardHeight={250}
          contentDetailsHeight={100}
          fontSizes={{
            title: "1rem",
          }}
          slideShow
          theme={{
            primary: "#b91c1c",
            secondary: "#b91c1c",
            titleColor: "black",
            titleColorActive: "white",
          }}
          hideControls="true"
          classNames={{
            cardTitle: "text-center text-black",
          }}
        >
          {items.map((item, index) => {
            return (
              <div className="text-center overflow-hidden">
                <img
                  src={item.media.source.url}
                  alt={item.media.name}
                  className="h-2/5 sm:h-3/5"
                ></img>
                <h1 className="sm:text-2xl text-lg">{item.title}</h1>
                <p className="sm:text-lg text-base">{item.cardTitle}</p>
              </div>
            );
          })}
        </Chrono>
      </div>
    </div>
  );
}

export default Roadmap;

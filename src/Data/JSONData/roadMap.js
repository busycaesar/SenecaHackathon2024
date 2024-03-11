import RegistrationImg from "../../svgs/RoadmapImg/registration.png";
import Finale from "../../svgs/RoadmapImg/finale.png";
import FinalistsAnnoucement from "../../svgs/RoadmapImg/finalistsAnnoucement.png";
import FinalOpening from "../../svgs/RoadmapImg/finalOpening.png";
import HackathonQualifiers from "../../svgs/RoadmapImg/hackathonQualifiers.png";
import TeamFormation from "../../svgs/RoadmapImg/teamFormation.png";
import PreHackathonMixer from "../../svgs/RoadmapImg/preHackathonMixer.png";
import FinalistsAnnouncementsSVG from "../../svgs/RoadmapImg/FinalistsAnnouncements.svg";
import HackathonFinaleSVG from "../../svgs/RoadmapImg/HackathonFinale.svg";
import HackathonQualifiersSVG from "../../svgs/RoadmapImg/HackathonQualifiers.svg";
import PreHackathonMixerSVG from "../../svgs/RoadmapImg/Pre-hackathonMixer.svg";
import RegistrationSVG from "../../svgs/RoadmapImg/Registration.svg";
import TeamFormationSVG from "../../svgs/RoadmapImg/TeamFormation.svg";
import FinalOpeningSVG from "../../svgs/RoadmapImg/FinalOpening.svg";
import ChallengeSetMentoringSVG from "../../svgs/RoadmapImg/ChallengeSetMentoring.svg";


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
                url: ChallengeSetMentoringSVG,
                horizontalUrl: ChallengeSetMentoringSVG,
            },
            type: "IMAGE",
        },
        info: "Mentors for the Housing Hackathon will engage with each team and offer guidance and feedback according to their chosen challenge set.",
    },
    {
        title: "Registration Deadline",
        cardTitle: "1st March 2024",
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
        info: "This is the last day for each team to submit their entry for judging. Please note that all finalists are expected to attend the in-person finale on March 16, 2024.",
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

export default items;
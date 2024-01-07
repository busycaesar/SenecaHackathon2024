import HeaderBanner from "../Components/About/Banner/headerBanner";
import WhoAreWe from "../Components/About/whoAreWe";
import Testimonial from "../Components/About/Testimonial/testimonials";
import SocialMediaSection from "../Components/About/socialMediaSection";
import ChallengeSetsSection from "../Components/About/ChallengeSets/challengeSetsSection";
import WorkingSection from "../Components/About/Working/workingSection";
import Awards from "../Components/About/Awards/awards";
import TestimonialData from "../Data/JSONData/testimonials.json";
import ChallengeSetData from "../Data/JSONData/challengeSetData.json";
import WorkingData from "../Data/JSONData/workingData.json";
import AwardData from "../Data/JSONData/awardData.json";
import ImportantDates from "../Components/About/Dates/importantDates";
import ImportantDateData from "../Data/JSONData/importantDate.json";

export default function Home() {
  return (
    <>
      <HeaderBanner />
      <WhoAreWe />
      <hr />
      <WorkingSection works={WorkingData} />
      <hr />
      <ImportantDates dates={ImportantDateData} />
      <hr />
      <Awards awards={AwardData} />
      <hr />
      <ChallengeSetsSection challengeSet={ChallengeSetData} />
      <hr />
      <Testimonial testimonials={TestimonialData} />
      <hr />
      <SocialMediaSection />
    </>
  );
}

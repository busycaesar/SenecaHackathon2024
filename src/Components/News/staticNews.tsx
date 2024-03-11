import Banner from "../../svgs/banner.jpg";
import SocialMediaIcons from "../SocialMedia/socialMedia";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./staticNews.css";
export default function StaticNews() {
  return (
    <>
      <section className="py-16 md:py-24 bg-coolGray-900 background-image: url('flex-ui-assets/elements/pattern-dark2.svg'); background-repeat: no-repeat; background-position: center;">
        <div className="container px-4 mx-auto">
          <div className="md:max-w-2xl mx-auto mb-12 text-center">
            <h1>
              <span className="text-4xl md:text-5xl font-bold text-black">
                News | Media
              </span>
            </h1>
            <div className="flex items-center justify-center">
              <p className="inline-block text-my-red font-medium">Yancy Liu</p>
              <span className="mx-2 mb-2 text-my-red">&bull;</span>
              <p className="inline-block text-my-red font-medium">
                20 Jan 2024
              </p>
              <span className="mx-2 mb-2 text-my-red">&bull;</span>
              <p className="inline-block text-my-red font-medium">
                Housing Hackathon
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden max-w-6xl mx-auto rounded-lg aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              height="315"
              src="
https://www.youtube.com/embed/sk7Dtu2gm0I?si=pKefrsQXhVVK7tVz"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="md:text-center mb-10">
            <h1>
              <span className="text-xl md:text-4xl font-bold  text-black">
                Seneca Housing Hackathon | Hackathon Insider <br></br> | Episode
                1 Experience of Hackathon
              </span>
            </h1>
          </div>
          <div className="md:max-w-3xl mx-auto font-gotham text-black">
            <p className="mb-4 lg:text-xl text-base  ">
              Welcome to our initial video podcast episode, where we provide the
              inside-world of Housing Hackathon 2024 hosted by Seneca
              Polytechnic! Our energetic host is excited to present this
              engaging discussion, filled with humor and insightful
              perspectives. Joining us is a remarkable guest—Ms. Yahui Liu
              (Yancy), an experienced participant who won 1st place Hackathon
              2023 and turned into an organizer of Hackathon 2024—will share her
              Hackathon journey with us on our First podcast episode.
            </p>
            <p className="mb-4 lg:text-xl text-base ">
              In this conversation, our guest expresses her motivation for
              participating in Hackathon, emphasizing collaborative
              problem-solving and the practical application of psychological
              principles to real-world issues. She also shares her participation
              experience, highlighting the rewards of collaboration, diverse
              idea exchange, and the impactful learning journey. The discussion
              covers the successful moment of her first place winning, exploring
              the personal and professional impacts of this achievement. Gain
              unique insights into her transition from a participant to an
              organizer and hear exceptional memories from each phase of her
              remarkable journey.
            </p>

            <p className="mb-6 lg:text-xl text-base ">
              Our guest also sheds light on how Hackathons contribute to
              addressing societal problems, sharing a personal project that had
              a direct impact on a real-world issue. The podcast concludes with
              valuable advice for aspiring participants, emphasizing
              open-mindedness, teamwork, and the joy of the learning experience.
              Don't miss this inspiring episode, where our guest shares a
              powerful message encouraging collective action to address societal
              challenges through initiatives like Hackathon.
            </p>

            <div className="grid grid-cols-2">
              <div>
                <p className="lg:text-xl text-base font-bold">Follow us on</p>
                <div className="red-background mb-10 curved-border">
                  <SocialMediaIcons />
                </div>
              </div>
              <div className="flex flex-col ml-auto justify-end items-end">
                <p className="lg:text-xl text-base font-bold">Subscribe to</p>
                <div className="red-background mb-10 curved-border">
                  <a
                    href="https://www.youtube.com/@seneca.hackathon"
                    target="_blank"
                  >
                    <YouTubeIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

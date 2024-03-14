import { Row, Col } from "react-bootstrap";
import { Sponsers } from "../../../Data/Schema/sponsers";
import { Partners } from "../../../Data/Schema/partners";
import Timer from "../../Timer/Timer";
import WhoAreWe from "../whoAreWe";
import "../about.css";
import SponsersBanner from "./sponsersBanner";
import PartnersBanner from "./PartnerInsitituions";
import { toast } from "react-toastify";

export default function HeaderBanner() {
  const copyEmailToClipboard = () => {
    const email = "info@senecahackathon.com";
    navigator.clipboard.writeText(email).then(
      () => {
        toast.success("Email copied to clipboard");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="page-content-1">
      <section className="md:max-w-full">
        <div className="md:max-w-full text-white">
          <div className="px-8 md:py-20 py-16 overflow-hidden rounded-xl background-banner">
            <div className="md:max-w-6xl text-center mx-auto">
              <h1 className="font-heading mb-6 md:my-10 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight">
                <span>Housing Hackathon</span>
              </h1>
              <p className=" mb-11 text-base md:text-lg text-white ">
              Bring your ideas to life at the 5th Annual Seneca Hackathon. Gain practical experience, connect with industry experts, and get a chance to win amazing prizes.
              </p>
              <div className="md:max-w-lg md:mx-auto ">
                <div className="button hover:none">
                  <a
                    // href={`https://forms.office.com/r/r2c5YSGYTn`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="font-bold">Submission Closed</button>
                  </a>
                </div>
                <p className="m-4 md:text-md text-base text-white  font-medium">
                  Thank you for your interest in participating in Housing
                  Hackathon 2024. The submission has now been closed. 
                </p>

                {/* <Timer/> */}
                <h1 className="  text-3xl text-yellow-300 font-black tracking-tight blink_me">
                <span>Submission closed! <br></br>Please wait for the qualifier annoucement. </span>
              </h1>
                {/* <p className="m-4 md:text-md text-base text-white  font-medium">
                  Thank you for your interest in participating in Housing
                  Hackathon 2024. The registration is now closed.
                </p>
                <p className="text-white font-pretty md:text-md text-base p-3 font-medium rounded-xl bg-gray-900">
                  ⚠️ Team Formation and Category Selection is due on March 2,
                  2024, 6 PM. After the due date, you will be grouped with other
                  participants in the same category.
                  <p className="mt-4 text-white text-sm md:text-sm">
                    Once you have confirmed your team or want to make changes to
                    your team, please send an email to{" "}
                    <span
                      className="email-link hover:cursor-pointer hover:underline"
                      onClick={(e) => {
                        copyEmailToClipboard();
                      }}
                    >
                      info@senecahackathon.com
                    </span>
                    &nbsp; using the email you registered with.
                  </p>
                </p> */}
                <div className="md:pb-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

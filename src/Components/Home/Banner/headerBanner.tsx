import { Row, Col } from "react-bootstrap";
import { Sponsers } from "../../../Data/Schema/sponsers";
import { Partners } from "../../../Data/Schema/partners";
import Timer from "../../Timer/Timer";
import WhoAreWe from "../whoAreWe";
import "../about.css";
import SponsersBanner from "./sponsersBanner";
import PartnersBanner from "./PartnerInsitituions";

export default function HeaderBanner() {
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
                Elevate your skills, connect with industry experts, and
                transform your ideas into reality. <br></br> Join the hackathon
                for a chance to win amazing prizes and contribute to shaping the
                future of the housing industry.
              </p>
              <div className="md:max-w-lg md:mx-auto ">
                <div className="button hover:none">
                  <a
                    href={`https://www.senecahackathon.com/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="font-bold">Registration Closed.</button>
                  </a>
                </div>

                <p className="m-4 md:text-lg text-base text-white  font-bold">
                  Thank you for your interest in participating in Housing
                  Hackathon 2024. The registration is now closed.
                </p>
                <p className=" text-amber-400 font-gotham p-3 rounded-xl bg-dark">
                  Team Formation and Category Selection is
                  due on March 2, 2024, 6 PM. After the due date, you will be
                  grouped with other participants in the same category.
                </p>
                <div className="md:pb-40">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import SampleImage from "../../../svgs/banner.jpg";
import Timer from "../../Timer/Timer";
import "../about.css";
import SponsersBanner from "./sponsersBanner";

const styles = {
  paperContainer : {
    backgroundImage : `url(${SampleImage})`,
    height: "100%",
    width: "100%"

  }
}

export default function HeaderBanner() {
  return (
    <div style={{ marginBottom: "3em" }}>
      <div  id="head-banner">
        <img src={SampleImage} alt="Banner" />
        <div className="content">
          <h1 className="text-6xl">
            <strong>Housing <span className="text-my-red">Hackathon </span></strong>
          </h1>
          <p className="text-lg">
            Join us in innovating, collaborating and building an inclusive
            hackathon for hands-on experience
          </p>
          <div className="button">
            <a
              // href={`https://registrations.senecahackathon.com/`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Registration begins on Jan 22, 2024</button>
            </a>
          </div>
          <div>
            <Timer/>
          </div>
          <p className="text-lg">Registration closes on March 8th, 2024</p>
        </div>
      </div>
      <div
      className="bg-wh rounded-3xl overflow-hidden border border-gray-100 "
     
    >
   
    </div>
      <SponsersBanner />
    </div>
  );
}

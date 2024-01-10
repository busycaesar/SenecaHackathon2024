import SampleImage from "../../../svgs/sampleBanner.jpg";
import "../about.css";
import SponsersBanner from "./sponsersBanner";

export default function HeaderBanner() {
  return (
    <div style={{ marginBottom: "3em" }}>
      <div id="head-banner">
        <img src={SampleImage} alt="Banner" />
        <div className="content">
          <h1>
            <strong>Housing Hackathon</strong>
          </h1>
          <p>
            Join us in innovating, collaborating and building an inclusive
            hackathon for hands-on experience
          </p>
          <div className="button">
            <a
              href={`https://registrations.senecahackathon.com/`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Register Now</button>
            </a>
          </div>
          <p>Registration closes on March 1st, 2024</p>
        </div>
      </div>
      <SponsersBanner />
    </div>
  );
}

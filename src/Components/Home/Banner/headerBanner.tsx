import { Sponsers } from "../../../Data/Schema/sponsers";
import SampleImage from "../../../svgs/banner.jpg";
import Timer from "../../Timer/Timer";
import "../about.css";
import SponsersBanner from "./sponsersBanner";


export default function HeaderBanner(props: { sponsers: Sponsers[] }) {
  return (
    
      
      <div>

      <section className="md:max-w-full ">
        <div className="container md:max-w-full">
          <div className="px-8 py-20 overflow-hidden rounded-xl background-banner" >
            <div className="md:max-w-6xl text-center mx-auto">
              <h1 className="font-heading mb-6 md:my-10 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight"><span>Housing Hackathon </span></h1>
              <p className="mb-8 text-lg text-white ">Elevate your skills, connect with industry experts, and transform
                    your ideas into reality. <br></br> Join the hackathon for a chance to win
                    amazing prizes and contribute to shaping the future of the housing
                    industry.</p>
              <div className="max-w-lg mx-auto">
              <div className="button">
                  
                  <a
                    href={`https://registrations.senecahackathon.com/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="font-bold">Click Here to Register</button>
                  </a>
                </div>
                <div>
                  <Timer />
                </div>
                <p className="m-8 text-lg text-white">Deadline to register is on February 26, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <SponsersBanner sponsers={props.sponsers} />
    </div>
  );
}

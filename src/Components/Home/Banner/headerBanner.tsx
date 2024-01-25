import { Row, Col } from "react-bootstrap";
import { Sponsers } from "../../../Data/Schema/sponsers";
import { Partners } from "../../../Data/Schema/partners";
import SampleImage from "../../../svgs/banner.jpg";
import Timer from "../../Timer/Timer";
import "../about.css";
import SponsersBanner from "./sponsersBanner";
import {
  SponsersData,
  PartnersData
} from "../../../Data/JSONData/";


export default function HeaderBanner(props: {
  partners: Partners[]; sponsers: Sponsers[] 
}) {
  return (
      <div className="page-content-1">
      <section className="md:max-w-full">
        <div className="md:max-w-full">
          <div className="px-8 md:py-20 py-16 overflow-hidden rounded-xl background-banner" >
            <div className="md:max-w-6xl text-center mx-auto">
              <h1 className="font-heading mb-6 md:my-10 text-4xl md:text-5xl lg:text-6xl text-white font-black tracking-tight"><span>Housing Hackathon </span></h1>
              <p className=" mb-11 text-base md:text-lg text-white ">Elevate your skills, connect with industry experts, and transform
                    your ideas into reality. <br></br> Join the hackathon for a chance to win
                    amazing prizes and contribute to shaping the future of the housing
                    industry.</p>
              <div className="md:max-w-lg md:mx-auto ">
              <div className="button">
                  
                  <a
                    href={`https://registrations.senecahackathon.com/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="font-bold">
                      Click Here to Register
                    </button>
                  </a>
                </div>
                <div className="">
                  <Timer />
                </div>
                <p className="m-4 md:text-lg text-base text-white font-bold">Deadline to register is on February 26, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
   <div className="page-content">

      <SponsersBanner sponsers={props.sponsers} />

      <h2 style={{ marginTop: "1em" }}>
        <strong className="">Our Partner Institutions</strong>
      </h2>
      <center>
      <Row>
        {props.partners.map((partners) => (
          <Col
            key={partners.id}
            className="center-hv"
            style={{ margin: "1.5em 0" }}
            sm={3}
          >
            <a href={partners.link} target="_blank">
            <img
              src={partners.path}
              style={{ width: partners.width }}
              alt={partners.title}
            />
            </a>
          </Col>
        ))}
      </Row>
      </center>
   </div>
    </div>
  );
}

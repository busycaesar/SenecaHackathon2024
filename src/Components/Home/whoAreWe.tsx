import { Row, Col } from "react-bootstrap";
import WhoAreWe1 from "../../svgs/WhoAreWe/1.jpg";
import WhoAreWe2 from "../../svgs/WhoAreWe/2.jpeg";
import WhoAreWe3 from "../../svgs/WhoAreWe/3.jpeg";
import WhoAreWe4 from "../../svgs/WhoAreWe/4.jpeg";
import "./about.css";

export default function WhoAreWe() {
  const whoareweImages = [WhoAreWe1, WhoAreWe2, WhoAreWe3, WhoAreWe4];
  return (
    <div id="who-are-we-section" className="mt-10 font-gotham page-content">
      <Row>
        <Col md={6} style={{ marginBottom: "1em" }}>
          <h2 style={{ marginTop: "1em" }} className="pb-2">
            <strong>Who We Are</strong>
          </h2>

          <p className="pb-1 md:text-xl  marker:text-my-red mr-10  ">
          Seneca Hackathon is an event led by student and alumni volunteers with shared commitment and passion for continuous learning and growth. Alongside its partners and sponsors, they create an inclusive platform where fellow students are encouraged to think outside the box and showcase their ideas. </p>
            <br></br>
            <h2 className=" text-xl font-bold"> The Organizing Team</h2>
            <p className="pb-1 md:text-xl font-gotham marker:text-my-red mr-10  ">
            The team is comprised of dedicated volunteers – skilled professionals and enthusiastic students, who take the lead in steering and integrating Seneca Hackathon’s mission and vision, ensuring seamless event execution and its overall success.</p>
            <h2 className=" text-xl font-bold"> The Participants</h2>
            <p className="pb-1 md:text-xl font-gotham marker:text-my-red mr-10  ">
            The participants are students and graduates of Seneca and its partner institutions with diverse interests and backgrounds, united and driven by shared passion for innovation. </p>
          <div className="button pt-4 bg-transparent">
            <a href={`/about`} rel="noreferrer">
              <button className="font-bold ">Learn More</button>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <Row>
            {whoareweImages.map((image, index) => (
              <Col sm={6} key={index} className="pb-4">
                <div className="">
                  <img
                    src={image}
                    alt={`Team ${index + 1}`}
                    className="rounded-xl object-cover shadow-2xl w-full h-auto bg-transparent d-block mx-auto"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

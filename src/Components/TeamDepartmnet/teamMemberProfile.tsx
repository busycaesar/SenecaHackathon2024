import SampleImage from "../../svgs/sampleAvatar.png";
import "./team.css";
import { Row, Col } from "react-bootstrap";
import { Member } from "../../Data/Schema/teamSchema";

export default function TeamMemberProfile({ member }: { member: Member }) {
  return (
    <div className="profile">
      <Row>
        <Col sm={12}>
          <img className="w-24 h-24 mx-auto mb-6 rounded-full" src={SampleImage} alt=""></img>
          <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-full lg:w-full px-4 mb-10">
          <div className="h-full py-8 px-10 bg-my-red rounded-md text-center">
            <h3 className="mb-2 text-xl md:text-2xl leading-tight font-gotham  font-semibold">{member.firstName} {member.lastName}</h3>
            <span className="inline-block mb-2 text-medium font-medium font-gotham text-white">{member.designation}</span>            <div className="flex items-center justify-center">
              <a className="hover:opacity-80" href={member.linkedinLink} target="_blank">
              <img className="w-full h-full" src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003-2011.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>
      </div>
        </Col>
      </Row>
    </div>
  );
}

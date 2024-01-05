import SampleImage from "../../svgs/sampleAvatar.png";
import LinkedInLogo from "../../svgs/linkedin-logo.png";
import "./team.css";
import { Row, Col } from "react-bootstrap";
import { Member } from "../../Data/Schema/teamSchema";

export default function TeamMemberProfile({ member }: { member: Member }) {
  return (
    <div className="profile">
      <Row>
        <Col sm={12}>
          <img id="member-profile" src={SampleImage} alt="Sample" />
        </Col>
        <Col sm={12}>
          <h3>
            <strong>
              {member.firstName} {member.lastName}
            </strong>
          </h3>
          <h4>{member.designation}</h4>
          <a href={member.linkedinLink} target="_blank" rel="noreferrer">
            <img
              src={LinkedInLogo}
              alt={`Link to ${member.firstName}'s LinkedIn profile.`}
            />
          </a>
        </Col>
      </Row>
    </div>
  );
}

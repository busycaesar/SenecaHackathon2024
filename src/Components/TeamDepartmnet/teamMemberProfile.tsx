import SampleImage from "../../svgs/sampleAvatar.png";
import "./team.css";
import { Row, Col } from "react-bootstrap";
import { Member } from "../../Data/Schema/teamSchema";

export default function TeamMemberProfile({ member }: { member: Member }) {
  return (
    <div className="profile">
      <Row>
      <Col sm={12}>
      <div className="grid md:grid-cols-1">
      <div className="container mt-12 mb-24 mx-auto">
          <div className="mb-24 md:mb-0">
            <div className="md:w-full lg:w-full rounded-lg shadow-lg h-full block bg-my-red">
              <div className="flex justify-center">
                <div className="flex justify-center" style={{"margin": "-75px"}}>
                  <img 
                    src={member.image} 
                    className="rounded-full w-[300px] mx-auto border-2 border-solid border-my-red shadow-lg" 
                    alt="" 
                    style={{"width": "150px; "}} />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg text-white font-bold mb-4 mt-16">{member.firstName} {member.lastName}</h5>
                <p className="text-white mb-6">{member.designation}</p>  
                  <a href={member.linkedinLink} target="_blank">
                    <img className="" src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003-2011.png" alt="" style={{"width":"100px; height: 24px"}}/>
                  </a>
              </div>
             </div>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  );
}

import SampleImage from "../../svgs/sampleAvatar.png";
import "./team.css";
import { Row, Col } from "react-bootstrap";
import { Member } from "../../Data/Schema/teamSchema";

export default function TeamMemberProfile({ member }: { member: Member }) {
  return (
    <div className="profile">
      <Row>
      <Col sm={12}>
        <div className="container  justify-stretch mt-12 mb-24 ">
          <section className="mb-25 text-gray-800 text-center">
            <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
              <div className=" md:mb-0">
                <div className="rounded-lg shadow-lg h-full md:w-[300px] block bg-my-red">
                  <div className="flex justify-center">
                    <div className="flex justify-center" style={{"margin": "-75px"}}>
                      <img src={member.image} className="rounded-full w-full h-auto border-solid border-3 border-white  md:w-[300px] mx-auto shadow-lg" alt="" />
                      
                    </div>
                  </div>
                  <div className="p-6 mt-16">
                    <h5 className="text-lg text-white font-gotham font-bold mb-4">{member.firstName} {member.lastName}</h5>
                    <p className="mb-6 text-white text-base font-gotham">{member.designation}</p>
                      <a href={member.linkedinLink} className="">
                        <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003-2011.png" alt="" style={{"width":"120px; height: 24px"}}/>
                      </a>
                  
                  </div>
                </div>
              </div>
          </div>
          </section>
  </div>



  


{/* ORGANTIZATION TEAM */}

{/* IT TEAM */}

{/* IT TEAM */}

{/* PARTNER EXPERIENCE TEAM */}

{/* COLUMN 2 */}

  
{/* PARTNER EXPERIENCE TEAM */}

{/* STUDENT EXPERIENCE TEAM */}




{/* STUDENT EXPERIENCE TEAM */}

{/* OPERATIONS TEAM */}

{/* OPERATIONS TEAM */}

{/* MARKETING TEAM */}



        </Col>
      </Row>
    </div>
  );
}

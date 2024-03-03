import SampleImage from "../../svgs/sampleAvatar.png";
import "./team.css";
import { Row, Col } from "react-bootstrap";
import { Member } from "../../Data/Schema/teamSchema";

export default function TeamMemberProfile({ member }: { member: Member }) {
  return (
    <div className="profile">
      <Row>
      <Col sm={12}>
      {/* <div className="grid md:grid-cols-1">
      <div className="container mt-12 mb-24 mx-auto">
          <div className="mb-2 md:mb-0">
            <div className="md:w-full lg:w-full rounded-lg shadow-lg h-full block bg-my-red">
              <div className="flex justify-center">
                <div className="flex justify-center" style={{"margin": "-75px"}}>
                  <img 
                    src={member.image} 
                    className="rounded-full w-[300px] h-3/4 md:h-auto mx-auto border-3 border-solid border-white shadow-lg" 
                    alt="" 
                     />
                </div>
              </div>
              <div className="p-6">
                <h5 className="text-lg text-white font-bold mb-4 mt-16">{member.firstName} {member.lastName}</h5>
                <p className="text-white text-base  mb-10">{member.designation}</p>  
      
                  <a href={member.linkedinLink} target="_blank">
                    <img className="mt-20 py-2" src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2003-2011.png" alt="" style={{"width":"120px; height: 24px"}}/>
                  </a>
              </div>
             </div>
            </div>
          </div>
        </div> */}
        <div className="container items-center justify-center object-center mt-12 mb-24 ">
  <section className="mb-25 text-gray-800 text-center">
       
    <div className="grid gap-x-6 lg:gap-x-12 md:grid-cols-4">
     
      <div className=" md:mb-0">
        <div className="rounded-lg shadow-lg h-full md:w-[300px] block bg-my-red">
          <div className="flex justify-center">
            <div className="flex justify-center" style={{"margin": "-75px"}}>
              <img src={member.image} className="rounded-full w-full h-3/4 md:h-auto border-solid border-3 border-white  md:w-[300px] mx-auto shadow-lg" alt="" />
              
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

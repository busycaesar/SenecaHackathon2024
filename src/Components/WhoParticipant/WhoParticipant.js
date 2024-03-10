import React from "react";
import { Row, Col } from "react-bootstrap";
import Institute from "./insitute";

export default function WhoCanParticipate() {
  return (
      <section class="page-content py-2 bg-coolGray-50">
  <div class="container-fluid mx-auto ">
    <div class="lg:max-w-none mx-auto">
      <div class="flex flex-wrap -mx-4 items-center">
        <div class="w-full lg:w-5/12 lg:mb-0">
            <div className="">
          <h2 style={{ marginTop: "1em" }} className="pb-2">
            <strong>Who Can Participate</strong>
          </h2>
          <p className="pb-3 md:text-xl font-gotham  marker:text-my-red list-disc space-y-3 md:text-justify">
            All interested students are invited to join, provided that they belong to any of the following groups below:
          </p>
          <ul role="list" class="pb-2 md:text-xl font-gotham marker:text-my-red list-disc pl-5 md:px-10 space-y-3  ">
            <li> Seneca Polytechnic students and/or graduates. </li>
            <li> Students from the partner institutions form their own team without Seneca students or alumni in the team.
              
            </li>
            <li> Full-time students enrolled in other post-secondary institutions grouped with a Seneca Polytechnic student or graduate.</li>
          </ul>

        </div>
        </div>
        <div class="w-full lg:w-7/12">
    <div class="max-w-3xl lg:ml-auto">
        <div class="flex flex-wrap md:pl-20 md:ml-20 py-2 md:pr-5 px-2">
            <div className="text-black flex flex-col  justify-start ">
                <Row className="flex flex-wrap bg-my-red rounded-lg justify-center">
                    {Institute.map((partner) => (
                        <Col key={partner.id} className="p-4" lg={4} md={6} sm={12}>
                            <div className="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out bg-white rounded-lg shadow-slate-950 shadow-lg overflow-hidden">
                                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={partner.path}
                                        className="object-contain w-full h-[150px] p-2 md:p-3 lg:p-8"
                                        alt={partner.title}
                                    />
                                </a>
                               
                            </div>
                            
                        </Col>
                        
                    ))}
                    <div>
                    <h2 style={{ marginTop: "1em" }} className="pb-2 text center text-white">
                                  <strong>Our Partner Institutes</strong>
                                </h2>
                    </div>
                </Row>
                
            </div>
        </div>
    </div>
</div>

      </div>
    </div>
  </div>
</section>
  );
}

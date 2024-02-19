import React from "react";
import { Row, Col } from "react-bootstrap";
import Institute from "./insitute";

export default function WhoCanParticipate() {
  return (
    <div className="page-content">
      <div className="grid grid-cols-1 gap-4">
        <div className="">
          <h1 style={{ marginTop: "1em" }} className="pb-2">
            <strong>Who Can Participate</strong>
          </h1>
          <p className="pb-3 text-2xl font-gotham  marker:text-my-red list-disc space-y-3 md:text-justify">
            All interested students are invited to join, provided that they belong to any of the following groups below:
          </p>
          <ul role="list" class="pb-3 text-2xl font-gotham marker:text-my-red list-disc pl-5 md:px-10 space-y-3  md:text-justify">
            <li> Seneca Polytechnic students and/or graduates. </li>
            <li> Students from the partner institutions form their own team without Seneca students or alumni in the team
              <div className="p-2 text-xl">
                <ul>
                  <li>
                    York University
                  </li>
                  <li>
                    University of Toronto - Faculty of Information
                  </li>
                  <li>
                    Universidad del Rosario (Colombia)
                  </li>
                  <li>
                    Panyapiwat Institute of Management (Thailand)
                  </li>
                  <li>
                    World Citi Colleges (Philippines)
                  </li>
                </ul>
              </div>
            </li>
            <li> Full-time students enrolled in other post-secondary institutions grouped with a Seneca Polytechnic student or graduate.</li>
          </ul>

        </div>
        <div className=" text-black p-4 lg:p-10 flex flex-col justify-start">
          <Row className="justify-center w-full bg-my-red rounded-xl bg-opacity-90 ">
            {Institute.map((partner) => (
              <Col key={partner.id} className="p-4" lg={4}>
                <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl overflow-hidden">
                  <a href={partner.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={partner.path}
                      className="object-contain w-full  h-[250px] flex flex-row p-4"
                      alt={partner.title}
                    />
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

    </div>
  );
}

/*
<h2 >
        <strong>Who Can Participate</strong>
      </h2>
      <p className="pb-3 text-lg font-gotham"> All interested students are invited to join, provided that they belong to any of the following groups below:</p>
      
      <div >
      </div>
*/

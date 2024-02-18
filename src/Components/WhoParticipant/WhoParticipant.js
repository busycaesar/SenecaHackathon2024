import React from "react";
import { Row, Col } from "react-bootstrap";
import Institute from "./insitute";

export default function WhoCanParticipate() {
  return (
    <div className="page-content">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="">
          <h1 style={{ marginTop: "1em" }} className="pb-2">
            <strong>Who Can Participate</strong>
          </h1>
          <p className="text-md font-gotham lg:text-xl leading-normal lg:leading-loose">
            All interested students are invited to join, provided that they belong to any of the following groups below:
          </p>
          <ul role="list" class="pb-3 text-lg font-gotham marker:text-my-red list-disc pl-5 md:px-10 space-y-3 text-black md:text-justify">
            <li> Seneca Polytechnic students and/or graduates. </li>
            <li> Students from the partner institutions form their own team without Seneca students or alumni in the team - York University, Universidad del Rosario (Colombia), Panyapiwat Institute of Management (Thailand), World Citi Colleges (Philippines).</li>
            <li> Full-time students enrolled in other post-secondary institutions grouped with a Seneca Polytechnic student or graduate.</li>
          </ul>

        </div>
        <div className=" text-black p-4 lg:p-10 flex flex-col justify-start">
          <Row className="justify-center w-full bg-my-red rounded-xl bg-opacity-90 ">
            {Institute.map((partner) => (
              <Col key={partner.id} className="p-2" lg={4}>
                <div className="flex items-center justify-center hover:scale-110 transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-xl overflow-hidden">
                  <a href={partner.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={partner.path}
                      className="object-contain md:w-[170px] md:h-[200px] w-[200px] h-[200px] p-2"
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
import React from "react";
import { Row, Col } from "react-bootstrap";
import Institute from "./insitute";

export default function WhoCanParticipate() {
  return (
    <div className="page-content">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" p-4 lg:p-10">
          <Row className="justify-center w-full bg-emerald-800 rounded-xl bg-opacity-90 shadow-2xl">
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
        <div className=" text-gray-600 p-4 lg:p-10 flex flex-col justify-start">
          <h2 className="text-lg lg:text-xl font-bold mb-4">
            Who Can Participate
          </h2>
          <p className="text-md font-gotham lg:text-xl leading-normal lg:leading-loose">
            All interested students are invited to join, provided that they belong to any of the following groups below:
          </p>
          <ul className="list-disc font-gotham text-gray-950  text-[1.2rem] lg:text-[1.4rem] space-y-2 mt-2">
            <li>Seneca Polytechnic students and/or graduates.</li>
            <li>Students from one of our partner institutions - York University, Universidad del Rosario (Colombia), Panyapiwat Institute of Management (Thailand), World Citi Colleges (Philippines).</li>
            <li>Full-time students enrolled in other post-secondary institutions grouped with a Seneca Polytechnic student or graduate.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function WhoCanParticipate() {
  return (
    <>
      <h2 >
        <strong>Who Can Participate</strong>
      </h2>
      <p className="pb-3 text-lg font-gotham"> All interested students are invited to join, provided that they belong to any of the following groups below:</p>
      <ul role="list" class="pb-3 text-lg font-gotham marker:text-my-red list-disc pl-5 md:px-10 space-y-3 text-black md:text-justify">
                <li> Seneca Polytechnic students and/or graduates. </li>
                <li> Students from one of our partner institutions - York University, Universidad del Rosario (Colombia), Panyapiwat Institute of Management (Thailand), World Citi Colleges (Philippines).</li>
                <li> Full-time students enrolled in other post-secondary institutions grouped with a Seneca Polytechnic student or graduate.</li>
              </ul>
      <div >
      </div>
    </>
  );
}
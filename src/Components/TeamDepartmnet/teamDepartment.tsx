import "./team.css";
import { Row, Col } from "react-bootstrap";
import TeamMemberProfile from "./teamMemberProfile";
import { Department, Member } from "../../Data/Schema/teamSchema";

export default function TeamDepartment({
  department,
  member,
}: {
  department: Department;
  member: Member[];
}) {
  return (
    <>
      <div className="items-center object-center justify-center ">
        <h2 className=" text-my-red text-3xl md:text-5xl text-center">
          <strong>{department.title.toUpperCase()}</strong>
        </h2>
        <p className="pb-10 text-center text-white">{department.description}</p>
        <Row>
          {member.map((memb) => (
            <>
              <Col lg={3} sm={6}>
                <TeamMemberProfile member={memb} />
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  );
}

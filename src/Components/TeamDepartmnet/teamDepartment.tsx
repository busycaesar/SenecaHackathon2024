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
      <div className="department">
        <h2>
          <strong>{department.title.toUpperCase()}</strong>
        </h2>
        <p className="pb-10">{department.description}</p>
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

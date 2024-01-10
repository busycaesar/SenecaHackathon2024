import TeamDepartment from "../Components/TeamDepartmnet/teamDepartment";
import { TeamDepartmentData } from "../Data/JSONData";
import { findMemberByDepartmentId } from "../Data/Query/teamQuery";

export default function OurTeam() {
  return (
    <>
      <h1 className="page-title">
        <strong>Meet Our Team</strong>
      </h1>
      {TeamDepartmentData.map((department) => (
        <>
          <TeamDepartment
            department={department}
            member={findMemberByDepartmentId(department._id)}
          />
        </>
      ))}
    </>
  );
}

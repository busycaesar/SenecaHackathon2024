import TeamDepartment from "../Components/TeamDepartmnet/teamDepartment";
import DepartmentData from "../Data/JSONData/teamDepartments.json";
import { findMemberByDepartmentId } from "../Data/Query/teamQuery";

export default function OurTeam() {
  return (
    <>
      <h1 className="page-title">
        <strong>Meet Our Team</strong>
      </h1>
      {DepartmentData.map((department) => (
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

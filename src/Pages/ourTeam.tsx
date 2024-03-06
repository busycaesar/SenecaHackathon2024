import TeamDepartment from "../Components/TeamDepartmnet/teamDepartment";
import { TeamDepartmentData } from "../Data/JSONData";
import { findMemberByDepartmentId } from "../Data/Query/teamQuery";

export default function OurTeam() {
  return (
    <>
    <div className="bg-gray-900 -mx-20 -mt-8 -mb-20 p-8 ">
      <h1 className="text-4xl text-white md:text-6xl text-center pb-4">
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
      </div>
    </>
  );
}

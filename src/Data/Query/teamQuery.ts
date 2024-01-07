import { TeamMemberData } from "../JSONData";
import { Member } from "../Schema/teamSchema";

export const findMemberByDepartmentId = (departmentId: Number): Member[] =>
  TeamMemberData.filter((member: Member) => member.department === departmentId);

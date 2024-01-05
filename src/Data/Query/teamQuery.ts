import MemberData from "../JSONData/teamMember.json";
import { Member } from "../Schema/teamSchema";

export const findMemberByDepartmentId = (departmentId: Number): Member[] =>
  MemberData.filter((member: Member) => member.department === departmentId);

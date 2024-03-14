import { QualifiedTeamsData } from "../JSONData";

export const findQualifiedTeamById = (id: Number) => {
  return QualifiedTeamsData.filter((team) => team.challenge_set === id);
};

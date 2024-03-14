// In your challengeQuery.js or similar file
import challengeSetData from "../Challengesets/challengeSets.json";

export const findChallengeSetById = (id: Number) => {
  return challengeSetData.find((set) => set.id === id);
};

export const findCategoryByName = (categoryName: String) => {
  return challengeSetData.find((challenge) => challenge.name === categoryName);
};

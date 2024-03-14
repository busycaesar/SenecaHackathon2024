// In your challengeQuery.js or similar file
import challengeSetData from '../Challengesets/challengeSets.json';

export const findChallengeSetById = (id) => {
    const allChallengeSets = challengeSetData[0].challengeSets;
    return allChallengeSets.find(set => set.id.toString() === id);
}

export const findCategoryByName = (challenges, categoryName) => {
    return challenges.find(challenge => challenge.categoryName === categoryName);
}
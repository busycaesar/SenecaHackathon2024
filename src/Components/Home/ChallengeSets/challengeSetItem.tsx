import { WordDescription } from "../../../Data/Schema/utilSchema";
import ChallengeSetSVG from "../../../svgs/ClipArts/challengeSet.png";

export default function ChallengeSetItem({
  challengeSetItem,
}: {
  challengeSetItem: WordDescription;
}) {
  return (
    <div id="challenge-set-item">
      <img
        src={ChallengeSetSVG}
        alt="icon"
        width={50}
        style={{ marginBottom: "1em" }}
      />
      <p style={{ color: "red" }}>
        <strong>{challengeSetItem.title}</strong>
      </p>
      <p>{challengeSetItem.description}</p>
    </div>
  );
}

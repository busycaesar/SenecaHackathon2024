import { WordDescription } from "../../../Data/Schema/utilSchema";
import ChallengeSetSVG from "../../../svgs/ClipArts/challengeSet.png";

export default function ChallengeSetItem({
  challengeSetItem,
}: {
  challengeSetItem: WordDescription;
}) {
  return (
    <div>
      <img
        src={challengeSetItem.image}
        alt="icon"
        style={{ marginBottom: "1em" }}
        className="w-1/3"
      />
      <p style={{ color: "red" }}>
        <strong>{challengeSetItem.title}</strong>
      </p>
    </div>
  );
}

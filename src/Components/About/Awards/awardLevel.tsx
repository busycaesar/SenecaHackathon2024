import { Award } from "../../../Data/Schema/awardSchema";
import AwardClip from "../../../svgs/ClipArts/firstPrice.png";

export default function AwardLevel({
  award,
  height,
}: {
  award: Award;
  height: number;
}) {
  const margin = 30 - height + "em";
  console.log(award.level);
  return (
    <div style={{ marginTop: `${margin}` }}>
      <div
        id="level-box"
        style={{
          backgroundColor: `${award.themeColor}`,
          height: `${height}em`,
        }}
      >
        <div id="level-number" style={{ color: `${award.themeColor}` }}>
          {award.level}
        </div>
        <p>{award.awardName}</p>
        <p>{`$${award.price}`}</p>
        <p style={{ fontSize: "small" }}>{award.description}</p>
      </div>
    </div>
  );
}

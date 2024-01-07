import "./challengeSet.css";

export default function ChallengeSet(props: { content: string }) {
  return (
    <>
      <div className="challenge-set">{props.content}</div>
    </>
  );
}

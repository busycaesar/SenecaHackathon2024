import "./challengeSet.css";

export default function ChallengeSet(props: {
  title: string;
  subtitle: string;
  content: string;
}) {
  return (
    <>
      <div className="challenge-set">
        <div className="title">
          <h2>
            <strong>{props.title}</strong>
          </h2>
          <h3>{props.subtitle}</h3>
        </div>
        <p>{props.content}</p>
      </div>
    </>
  );
}

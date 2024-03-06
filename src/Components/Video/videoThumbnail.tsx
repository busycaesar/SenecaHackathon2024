import SampleImage from "../../svgs/Sustainability Hackathon 2022.png";
import { Video } from "../../Data/Schema/videoSchema";
import "./video.css";

export default function videoThumbnail({ news }: { news: Video }) {
  return (
    <div id="thumbnailImage" className="summarize">
      <img src={SampleImage} alt="Sample" />
      <a href={`/video/${news._id}`}>
        <h3 style={{ color: "red", textDecoration: "underline" }}>
          {news.title}
        </h3>
      </a>
      <p>{news.body}</p>
    </div>
  );
}

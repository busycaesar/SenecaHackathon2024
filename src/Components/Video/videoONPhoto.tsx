import SampleImage from "../../svgs/Sustainability Hackathon 2022.png"
import "./video.css";
import { Video } from "../../Data/Schema/videoSchema";
import { dateFormat } from "./utils";

export default function videoOnPhoto({ news }: { news: Video }) {
  return (
    <div id="photo-with-title">
      <a href={`/video/${news._id}`}>
        <img src={SampleImage} alt="Sample" />
        <div className="red-background title-on-photo">
          <h2>{news.title}</h2>
          <p>By {news.author}</p>
          <p>{dateFormat(news.creationDate)}</p>
        </div>
      </a>
    </div>
  );
}
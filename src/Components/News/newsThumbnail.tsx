import SampleImage from "../../svgs/sample.jpg";
import { News } from "../../Data/Schema/newsSchema";
import "./news.css";

export default function NewsThumbnail({ news }: { news: News }) {
  return (
    <div id="thumbnailImage" className="summarize">
      <img src={SampleImage} alt="Sample" />
      <a href={`/news/${news._id}`}>
        <h3 style={{ color: "red", textDecoration: "underline" }}>
          {news.title}
        </h3>
      </a>
      <p>{news.body}</p>
    </div>
  );
}

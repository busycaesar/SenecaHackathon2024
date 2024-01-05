import SampleImage from "../../svgs/sample.jpg";
import "./news.css";
import { News } from "../../Data/Schema/newsSchema";
import { dateFormat } from "./utils";

export default function NewsOnPhoto({ news }: { news: News }) {
  return (
    <div id="photo-with-title">
      <a href={`/news/${news._id}`}>
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

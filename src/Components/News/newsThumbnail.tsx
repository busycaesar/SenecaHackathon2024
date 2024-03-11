import { News } from "../../Data/Schema/newsSchema";
import "./news.css";

export default function NewsThumbnail({ news }: { news: News }) {
  return (
    <a href={`/news/${news._id}`} className="no-underline">
      <div id="thumbnailImage" className="summarize">
        <img src={news.photo} alt="Sample" />
        <span className="text-my-red md:text-xl text-lg font-gotham">
          {news.title}
        </span>
        <p className="text-[0.8rem]">{news.body}</p>
      </div>
    </a>
  );
}

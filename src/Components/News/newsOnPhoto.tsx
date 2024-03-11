import "./news.css";
import { News } from "../../Data/Schema/newsSchema";
import { dateFormat } from "./utils";

export default function NewsOnPhoto({ news }: { news: News }) {
  return (
    <a href={`/news/${news._id}`} className="no-underline">
      <div id="photo-with-title">
        <img src={news.photo} alt="Sample" />
        <div className="red-background flex flex-col items-center justify-center gap-y-2 rounded-lg mb-10 text- max-w-screen w-auto">
          <span className="text-wrap text-center text-xl md:text-2xl">
            {news.title}
          </span>
          <p>By {news.author}</p>
          <p>{dateFormat(news.creationDate)}</p>
        </div>
      </div>
    </a>
  );
}

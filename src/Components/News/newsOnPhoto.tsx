import "./news.css";
import { News } from "../../Data/Schema/newsSchema";
import { dateFormat } from "./utils";

export default function NewsOnPhoto({ news }: { news: News }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <a href={`/news/${news._id}`} className="no-underline">
          <img src={news.photo} alt="news photo" className="w-full h-auto" />
        </a>
        <div className="mx-auto my-10 red-background flex flex-col items-center justify-center gap-y-2 rounded-lg mb-10 p-4 max-w-full">
          <span className="text-wrap text-center text-xl md:text-2xl">
            {news.title}
          </span>
          <p>By {news.author}</p>
          <p>{dateFormat(news.creationDate)}</p>
        </div>
      </div>
    </div>
  );
}

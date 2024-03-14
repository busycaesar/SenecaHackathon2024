import "./news.css";
import { News } from "../../Data/Schema/newsSchema";
import { dateFormat } from "./utils";

export default function NewsOnPhoto({ news }: { news: News }) {
  return (
    <a href={`/news/${news._id}`} className="no-underline">
      <div id="photo-with-title">
        <img src={news.photo} alt="Sample" />
        <div className="mx-auto my-1 red-background flex flex-col items-center justify-center gap-y-2 rounded-lg p-1.5 md:p-4 w-full shadow-xl ">
          <p className="text-wrap text-center text-base md:text-lg xl:text-xl m-0">
            {news.title}
          </p>
          <p className="text-sm md:text-base xl:text-lg m-0 text-center">
            {dateFormat(news.creationDate)} by {news.author}
          </p>
        </div>
      </div>
    </a>
  );
}

import SampleImage from "../../svgs/Sustainability Hackathon 2022.png";
import { News } from "../../Data/Schema/newsSchema";
import "./news.css";

export default function NewsThumbnail({ news }: { news: News }) {
  return (
    <div id="thumbnailImage" className="summarize">
      <img src={news.photo} alt="Sample" />
      <a href={`/news/${news._id}`} className="no-underline">
        <span className="text-my-red md:text-xl text-lg font-gotham">
          {news.title}
        </span>
      </a>
      <p className="text-[0.8rem]">{news.body}</p>
    </div>
  );
}

import DetailNews from "../Components/News/detailNews";
import CategoryNews from "../Components/News/categoryNews";
import { useParams } from "react-router-dom";
import {
  findNewsById,
  findCategoryById,
  findNewsByCategoryId,
  findLatestNews,
} from "../Data/Query/newsQuery";

export default function IndividualNews() {
  const { id } = useParams<{ id: string }>(),
    newsItem = findNewsById(Number(id));
  let category, news;
  if (newsItem) {
    category = findCategoryById(newsItem?.category);
    news = findNewsByCategoryId(newsItem?.category);
    if (news.length >= 3) news = news.slice(0, 3);
  } else {
    category = findCategoryById(0);
    news = findLatestNews();
    if (news.length >= 6) news = news.slice(0, 6);
  }
  return (
    <>
      <div style={{ marginBottom: "5em" }}>
        {newsItem ? (
          <DetailNews newsItem={newsItem} />
        ) : (
          <>
            <h1>
              <strong>No News Found!</strong>
            </h1>
            <p>
              No News found with this id! Please have a look at some other
              latest news!
            </p>
          </>
        )}
      </div>
      {category && <CategoryNews categoryTitle={category.title} news={news} />}
      <div className="button right-side">
        <a href={`/news`}>
          <button>More News</button>
        </a>
      </div>
    </>
  );
}

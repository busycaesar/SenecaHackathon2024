import DetailNews from "../Components/News/detailNews";
import CategoryNews from "../Components/News/categoryNews";
import { useParams } from "react-router-dom";
import {
  findNewsById,
  findCategoryById,
  findNewsByCategoryId,
  findLatestNews,
} from "../Data/Query/newsQuery";
import SocialMediaIcons from "../Components/SocialMedia/socialMedia";

export default function IndividualNews() {
  const { id } = useParams<{ id: string }>(),
    newsItem = findNewsById(Number(id));
  let category, news;
  if (newsItem) {
    category = findCategoryById(newsItem?.category);
    news = findNewsByCategoryId(newsItem?.category);
    if (news.length >= 4) news = news.slice(0, 4);
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
      <div className="flex flex-col pt-5 md:pt-20 text-center content-center">
        <div className="button my-2">
          <a href={`/news-&-media`}>
            <button>More News</button>
          </a>
        </div>
        <div className="red-background mx-auto my-2 curved-border">
          <SocialMediaIcons />
        </div>
      </div>
    </>
  );
}

import CategoryNews from "../Components/News/categoryNews";
import LatestNews from "../Components/News/latestNews";
import LatestVideo from "../Components/News/latestVideo";
import VideoAndPodcast from "../Components/News/VideoAndPodcast";
import { News } from "../Data/Schema/newsSchema";
import {
  findNewsByCategoryId,
  AllCategories,
  findLatestNews,
} from "../Data/Query/newsQuery";

export default function NewsPage() {
  const newsToBeDisplayed = 4;
  let NewsCategories = AllCategories(),
    LatestNewsList = findLatestNews(),
    totalLatestNews = LatestNewsList.length;
  return (
    <>
      {totalLatestNews >= newsToBeDisplayed ? (
        <>
          <CategoryNews
            categoryTitle="Latest News and Updates"
            news={LatestNewsList.slice(
              newsToBeDisplayed,
              newsToBeDisplayed + 2
            )}
          />
          <LatestNews news={LatestNewsList.slice(0, newsToBeDisplayed)} />

          <hr />

          <VideoAndPodcast
            categoryTitle="Lastest Videos and Podcasts"
            news={LatestNewsList.slice(
              newsToBeDisplayed,
              newsToBeDisplayed + 2
            )}
          />
          {/*<LatestVideo video={}/>*/}
        </>
      ) : (
        <LatestNews news={LatestNewsList} />
      )}
      {NewsCategories &&
        NewsCategories.slice(1).map((category) => {
          const newsItems: News[] = findNewsByCategoryId(category._id);
          return (
            <CategoryNews categoryTitle={category.title} news={newsItems} />
          );
        })}
    </>
  );
}

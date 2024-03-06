// import CategoryNews from "../Components/News/categoryNews";
import Categoryvideo from "../Components/Video/categoryVideo";
// import LatestNews from "../Components/News/latestNews";
import Latestvideo from "../Components/Video/NewsOnPhoto1";
import { Video } from "../Data/Schema/videoSchema";
import {
  findNewsByCategoryId,
  AllCategories,
  findLatestNews,
} from "../Data/Query/newsQuery";

export default function video() {
  const newsToBeDisplayed = 4;
  let NewsCategories = AllCategories(),
    LatestNewsList = findLatestNews(),
    totalLatestNews = LatestNewsList.length;
  return (
    <>
      {totalLatestNews >= newsToBeDisplayed ? (
        <>
          <Latestvideo news={LatestNewsList.slice(0, newsToBeDisplayed)} />
          <Categoryvideo
            categoryTitle="Latest News and Updates"
            news={LatestNewsList.slice(
              newsToBeDisplayed,
              newsToBeDisplayed + 2
            )}
          />
        </>
      ) : (
        <Latestvideo news={LatestNewsList} />
      )}
      {NewsCategories &&
        NewsCategories.slice(1).map((category) => {
          const newsItems: Video[] = findNewsByCategoryId(category._id);
          return (
            <Categoryvideo categoryTitle={category.title} news={newsItems} />
          );
        })}
    </>
  );
}

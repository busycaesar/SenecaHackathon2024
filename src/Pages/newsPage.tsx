import LatestNews from "../Components/News/latestNews";
import LatestVideo from "../Components/News/latestVideo";
import { News } from "../Data/Schema/newsSchema";
import CategoryNews from "../Components/News/categoryNews";
import {
  findNewsByCategoryId,
  AllCategories,
  findLatestNews,
} from "../Data/Query/newsQuery";

import ytVideo from "../Data/JSONData/video";

export default function NewsPage() {
  const newsToBeDisplayed = 4;
  let NewsCategories = AllCategories(),
    LatestNewsList = findLatestNews(),
    totalLatestNews = LatestNewsList.length;
  return (
    <>
      {totalLatestNews >= newsToBeDisplayed ? (
        <>
          <h2>
            <strong>Latest News and Updates</strong>
          </h2>
          <LatestNews news={LatestNewsList.slice(0, newsToBeDisplayed)} />

          <hr />

          <h2>
            <strong>Latest Videos and Podcasts</strong>
          </h2>
          <LatestVideo video={ytVideo} />
        </>
      ) : (
        <LatestNews news={LatestNewsList} />
      )}
    </>
  );
}

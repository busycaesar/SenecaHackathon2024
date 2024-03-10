import { Row, Col } from "react-bootstrap";
import NewsThumbnail from "./newsThumbnail";
import { News } from "../../Data/Schema/newsSchema";

export default function VideoAndPodcast({
  categoryTitle,
  news,
}: {
  categoryTitle: string;
  news: News[];
}) {
  return (
    <div id="">
      <h2>
        <strong>{categoryTitle}</strong>
      </h2>
    </div>
  );
}

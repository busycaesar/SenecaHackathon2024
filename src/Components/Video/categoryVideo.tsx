import { Row, Col } from "react-bootstrap";
import NewsThumbnail from "./videoThumbnail";
import { Video } from "../../Data/Schema/videoSchema"; 
import './video.css'; // Import your updated CSS here

const Categoryvideo = ({
  categoryTitle,
  news,
}: {
  categoryTitle: string;
  news: Video[];
}) => {
  return (
    <div className="main-content category-news"> {/* Use 'main-content' for general styling */}
      <h2 className="category-header">{categoryTitle}</h2> {/* Use a specific class for category titles */}
      <Row>
        {news.map((newsItem, index) => (
          // React Fragment to wrap Col if you have multiple sibling elements
          <Col md={4} key={newsItem._id} className="my-3"> {/* 'my-3' for margin top & bottom */}
            <NewsThumbnail news={newsItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Categoryvideo;



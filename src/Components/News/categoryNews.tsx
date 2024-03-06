// import { Row, Col } from "react-bootstrap";
// import NewsThumbnail from "./newsThumbnail";
// import { News } from "../../Data/Schema/newsSchema";

// export default function CategoryNews({
//   categoryTitle,
//   news,
// }: {
//   categoryTitle: string;
//   news: News[];
// }) {
//   return (
//     <div id="category-news">
//       <h2>
//         <strong>{categoryTitle}</strong>
//       </h2>
//       <hr />
//       <Row>
//         {news.map((newsItem) => (
//           <>
//             <Col md={4}>
//               <NewsThumbnail news={newsItem} />
//             </Col>
//           </>
//         ))}
//       </Row>
//     </div>
//   );
// }



import { Row, Col } from "react-bootstrap";
import NewsThumbnail from "./newsThumbnail";
import { News } from "../../Data/Schema/newsSchema";
import './news.css'; // Import your updated CSS here

const CategoryNews = ({
  categoryTitle,
  news,
}: {
  categoryTitle: string;
  news: News[];
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

export default CategoryNews;



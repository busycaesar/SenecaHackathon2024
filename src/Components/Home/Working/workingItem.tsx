import { WordDescription } from "../../../Data/Schema/utilSchema";
import { Row, Col } from "react-bootstrap";
import "../about.css";

export default function WorkingItem({ work }: { work: WordDescription }) {
  return (
    <div id="work-item">
      {/* <Row>
        <Col sm={2} className="items-center mb-4 justify-center">
          <div className="md:w-1/4 pb-3 m-2">
            <img src={work.image} alt="icon" className="w-28 md:w-28 md:h-1/2" />
          </div>
        </Col>

        <Col sm={10} className=" m-2 mb-4 justify-center" >
          <p >
            <strong>{work.title}</strong>
          </p>
          <p>{work.description}</p>
        </Col>
      </Row> */}
      <div className="flex flex-col md:flex-row items-center mb-4 justify-center ">
        <div className="md:w-1/4 pb-3 m-2">
          <img src={work.image} alt="why participate image" className="w-28  md:w-full md:h-1/2"></img>
        </div>
        <div className="md:w-3/4 mb-4 md:mx-3">
          <h2 className="text-xl md:text-2xl font-bold mb-4">{work.title}</h2>
          <p className="text-base mb-4">{work.description}.</p>
        </div>
      </div>
    </div>
  );
}

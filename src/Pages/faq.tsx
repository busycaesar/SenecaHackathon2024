import Accordion from "../Components/Accordion/accordion";
import { FAQData } from "../Data/JSONData";

export default function Faq() {
  return (
    <>
      <h1 className="page-title">
        <strong>Frequently Asked Questions</strong>
      </h1>
      {FAQData.map((accordionContent, index) => (
        <>
          <Accordion
            title={`${index + 1}. ${accordionContent.title}`}
            body={accordionContent.body}
          />
        </>
      ))}
    </>
  );
}

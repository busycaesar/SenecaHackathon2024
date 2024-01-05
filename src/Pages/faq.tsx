import Accordion from "../Components/Accordion/accordion";
import faqData from "../Data/JSONData/faqData.json";

export default function Faq() {
  return (
    <>
      <h1 className="page-title">
        <strong>Frequently Asked Questions</strong>
      </h1>
      {faqData.map((accordionContent, index) => (
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

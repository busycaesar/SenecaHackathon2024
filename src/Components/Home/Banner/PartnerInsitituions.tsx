import { Row, Col } from "react-bootstrap";

interface Partner {
  id: string | number; // Allow both string and number types for id
  link: string;
  path: string;
  title: string;
}

export default function PartnersBanner(props: { partners: Partner[] }) {
  return (
    <>
      <div className="text-left py-10 px-5 lg:px-0 ">
        <h1 style={{ marginTop: "1em" }}>
          <strong>Our Partner Institutions</strong>
        </h1>
        <Row className="justify-center w-full">
          {props.partners.map((partner) => (
            <Col key={partner.id} className="p-4" lg={4}>
              <div className="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out bg-white  rounded-lg shadow-slate-950 shadow-lg overflow-hidden">
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.path}
                    className="object-contain md:w-[350px] md:h-[350px] bg-transparent w-[260px] h-[260px] flex flex-row p-1"
                    alt={partner.title}
                  />
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

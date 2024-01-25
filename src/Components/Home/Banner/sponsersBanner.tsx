import { Row, Col } from "react-bootstrap";
import SenecaAppliedResearch from "../../../svgs/seneca-applied-research.png";
import SenecaPolytechnic from "../../../svgs/seneca-polytechnic.png";
import "./banner.css";
import { Sponsers } from "../../../Data/Schema/sponsers";

export default function SponsersBanner(props: { sponsers: Sponsers[] }) {
  return (
    <>
      <h2 style={{ marginTop: "2em" }}>
        <strong>Our Sponsors</strong>
      </h2>
      {/* <div className="grid md:grid-cols-3 gap-5 grid-cols-2 w-fit h-fit">
        {props.sponsers.map((sponser) => (
          <Col
            key={sponser.id}
            classNameName="center-hv"
            style={{ margin: "1em 0" }}
            sm={4}
          >
            <img
              className=" shadow-2xl"
              src={sponser.path}
              style={{ width: sponser.width }}
              alt={sponser.title}
            />
          </Col>
        ))}
      </div> */}

      {/* <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
          <div className="py-12 lg:py-20 px-8">
            <a href="https://www.yorku.ca/" target="_blank">
              <img className="mx-auto" src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/yu-logo-header-1.png" width="300px" alt="">
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 border-b border-gray-50">
          <div className="py-12 lg:py-20 px-8">
            <a href="https://thinkingnorth.com/" target="_blank">
              <img className="mx-auto" src="assets/thinkingnorthlogo.png" width="300px" alt="">
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
          <div className="py-12 lg:py-20 px-8"><a href="https://mircom.com/" target="_blank">
            <img className="mx-auto" src="https://mircom.com/wp-content/uploads/logo.png" width="300px" alt="" />
          </a></div></div><div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50">
          <div className="py-12 lg:py-20 px-8"><a href="https://www.senecacollege.ca/alumni.html" target="_blank">
            <img className="mx-auto" src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/file-img-Alumni-logo-RGB-Primary-1.png" width="300px" alt="" />
          </a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
          <div className="py-12 lg:py-20 px-8">
            <a href="https://cpos.com/" target="_blank">
              <img className="mx-auto" src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Logo-1.svg" width="300px" alt="" />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50">
          <div className="py-12 lg:py-20 px-8">
            <a href="https://getoppos.com/" target="_blank"><img className="mx-auto" src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Oppos20Logo20-20actual20black-1-at-2x.png" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3"><div className="py-12 lg:py-20 px-8"><a href="https://www.ridealike.com/" target="_blank"><img className="mx-auto" src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/RideAlike.png" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://raceatlas.com/" target="_blank"><img className="mx-auto" src="assets/raceAtlasLogo.png" width="400px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://inheritchain.com/" target="_blank"><img className="mx-auto" src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/inheritchainDK-web.png" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b border-gray-50"><div className="py-12 lg:py-20 px-8 bg-purple-900"><a href="https://trinetra.ca/" target="_blank"><img className="mx-auto" src="https://static.shuffle.dev/uploads/files/32/32cc320452c9e2effc7f8e2f8a8bbd93f7d6bf5d/Trinetra-Logo-White-1536x477.png" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://innovatecities.com/" target="_blank"><img className="mx-auto" src="/assets/innovatecitiesj.png" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://simplystech.com/" target="_blank"><img className="mx-auto" src="/assets/simplystech-logo.svg" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://www.vaughan.ca/" target="_blank"><img className="mx-auto" src="https://www.vaughan.ca/themes/custom/city_of_vaughan/images/logo.svg" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://www.rochecanada.com" target="_blank"><img className="mx-auto" src="/assets/Roche_Canada.png" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://www.camh.ca/" target="_blank"><img className="mx-auto" src="https://www.camh.ca/-/media/images/camh-logos/camh-logo-for-small-open-graph.jpg" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://www.microsoft.com/en-ca/" target="_blank"><img className="mx-auto" src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://wasauksing.ca/" target="_blank"><img className="mx-auto" src="https://www.crwflags.com/fotw/images/x/xa-wasau.gif" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://www.torontomu.ca/" target="_blank"><img className="mx-auto" src="https://www.therecord.com/content/dam/thestar/news/gta/2022/04/26/ryerson-university-changes-its-name-to-toronto-metropolitan-university/20220426150440-36db04cbc72a6f28d8ac195d48eefcfd84c276efe8730d6622a82cac9910c53d.jpg" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://www.ccab.com/" target="_blank"><img className="mx-auto" src="https://www.ccab.com/wp-content/uploads/2022/07/banner.png" width="300px" alt="" /></a></div></div><div className="w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-50"><div className="py-12 lg:py-20 px-8"><a href="https://scamblox.io/" target="_blank"><img className="mx-auto" src="/assets/Scamblox.png" width="300px" alt="" /></a></div></div></div> */}
      <Row>
        {props.sponsers.map((sponser) => (
          <Col
            key={sponser.id}
            className="center-hv"
            style={{ margin: "1em 0" }}
            sm={3}
          >
            <img
            className=""
              src={sponser.path}
              style={{ width: sponser.width }}
              alt={sponser.title}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

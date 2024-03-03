import "./App.css";
import NavBar from "./Components/NavBar/navBar";
import Footer from "./Components/Footer/footer";
import Home from "./Pages/home";
import ChallengeSets from "./Pages/challengeSets";
import OurTeam from "./Pages/ourTeam";
import Faq from "./Pages/faq";
import NewsPage from "./Pages/newsPage";
//import Gallery from "./Pages/gallery";

import StaticNews from "./Components/News/staticNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndividualNews from "./Pages/individualNews";
import AboutUs from "./Pages/aboutUs";
//import Login from "./Components/User/Login";
//import useToggle from "./Components/CustomHooks/useToggle";
import Roadmap from "./Pages/Roadmap";
//import ChallengeSet from "./Components/ChallengeSet/challengeSet";

function App() {
  return (
    <div className="">
      <Router>
        <NavBar
          mainNavItems={[
            "About",
            "Challenge Sets",
            "Our Team",
            "News & Media",
            // "Gallery",
            "FAQ",
          ]}
          otherNavItems={[]}
        />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="page-content">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/challenge-sets" element={<ChallengeSets />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/News-&-Media" element={<StaticNews />} />
            <Route path="/news/:id" element={<IndividualNews />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

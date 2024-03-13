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
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndividualNews from "./Pages/individualNews";
import AboutUs from "./Pages/aboutUs";
//import Login from "./Components/User/Login";
//import useToggle from "./Components/CustomHooks/useToggle";
import Roadmap from "./Pages/Roadmap";
import SubChallengeSet from "./Pages/subChallengeset/subChallengeSets";
import CategorySubChallengeSet from "./Pages/subChallengeset/subsubChallengeSet";
import { ToastContainer } from "react-toastify";
import ImageGallery from "./Components/PhotoGallery/ImageGallery";
import QualifiedTeams from "./Pages/QualifiedTeams";
//import ChallengeSet from "./Components/ChallengeSet/challengeSet";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <NavBar
          mainNavItems={[
            "About",
            "Challenge Sets",
            "Our Team",
            "News & Media",
            "Gallery",
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
            <Route path="/challenge-sets/:id" element={<SubChallengeSet />} />
            <Route
              path="/challenge-sets/:id/:categoryName"
              element={<CategorySubChallengeSet />}
            />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/News-&-Media" element={<NewsPage />} />
            <Route path="/news/:id" element={<IndividualNews />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/gallery" element={<ImageGallery />} />
            <Route path="/qualified-teams" element={<QualifiedTeams />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

//<Route path="/News-&-Media" element={<StaticNews />} />
//

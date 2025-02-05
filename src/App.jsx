import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Desktop/Navbar";
import Footer from "./component/Desktop/Footer";
import NavbarMobile from "./component/Mobile/NavbarMobile";
import FooterMobile from "./component/Mobile/FooterMobile";

import HomeDesktop from "./component/Desktop/Home";
import HomeMobile from "./component/Mobile/Home";
import AboutDesktop from "./component/Desktop/About";
import AboutMobile from "./component/Mobile/About";
import PodcastsMobile from "./component/Mobile/Podcasts";
import PodcastsDesktop from "./component/Desktop/Podcasts";
import ContactUsDesktop from "./component/Desktop/ContactUs";
import ContactUsMobile from "./component/Mobile/ContactUs";
import GlimpseDesktop from "./component/Desktop/Glimpse";
import GlimpseMobile from "./component/Mobile/Glimpse";

function App() {
  return (
    <Router>
      <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
        <Navbar />
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
        <NavbarMobile />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
                <HomeDesktop />
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
                <HomeMobile />
              </div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
                <AboutDesktop />
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
                <AboutMobile />
              </div>
            </>
          }
        />
         <Route
          path="/podcast"
          element={
            <>
              <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
                <PodcastsDesktop />
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
                <PodcastsMobile />
              </div>
            </>
          }
        />
          <Route
          path="/contact-us"
          element={
            <>
              <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
                <ContactUsDesktop />
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
                <ContactUsMobile />
              </div>
            </>
          }
        />
         <Route
          path="/glimpse"
          element={
            <>
              <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
                <GlimpseDesktop />
              </div>
              <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
                <GlimpseMobile />
              </div>
            </>
          }
        />
      </Routes>

      <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
        <Footer />
      </div>
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
        <FooterMobile />
      </div>
    </Router>
  );
}

export default App;

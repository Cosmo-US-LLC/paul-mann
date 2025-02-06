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
      <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
        <Navbar />
      </div>
      <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
        <NavbarMobile />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
                <HomeDesktop />
              </div>
              <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
                <HomeMobile />
              </div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
                <AboutDesktop />
              </div>
              <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
                <AboutMobile />
              </div>
            </>
          }
        />
        <Route
          path="/podcast"
          element={
            <>
              <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
                <PodcastsDesktop />
              </div>
              <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
                <PodcastsMobile />
              </div>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
                <ContactUsDesktop />
              </div>
              <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
                <ContactUsMobile />
              </div>
            </>
          }
        />
        <Route
          path="/glimpse"
          element={
            <>
              <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
                <GlimpseDesktop />
              </div>
              <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
                <GlimpseMobile />
              </div>
            </>
          }
        />
      </Routes>

      <div className="hidden 2xl:block xl:block lg:block md:block sm:hidden">
        <Footer />
      </div>
      <div className="block 2xl:hidden xl:hidden lg:hidden md:hidden sm:block">
        <FooterMobile />
      </div>
    </Router>
  );
}

export default App;

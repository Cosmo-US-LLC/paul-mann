import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Desktop/Navbar";
import Footer from "./component/Desktop/Footer";
import NavbarMobile from "./component/Mobile/NavbarMobile";
import FooterMobile from "./component/Mobile/FooterMobile";

import HomeDesktop from "./component/Desktop/Home";
import HomeMobile from "./component/Mobile/Home";
import AboutDesktop from "./component/Desktop/About";
import AboutMobile from "./component/Mobile/About";

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

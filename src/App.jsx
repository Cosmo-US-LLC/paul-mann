
import Navbar from "./component/Desktop/Navbar";
import Footer from "./component/Desktop/Footer";
import NavbarMobile from "./component/Mobile/NavbarMobile";
import FooterMobile from "./component/Mobile/FooterMobile";

import HomeDesktop from "./component/Desktop/Home"
import HomeMobile from "./component/Mobile/Home"
import AboutDesktop from "./component/Desktop/About";
import AboutMobile from "./component/Mobile/About";

function App() {
  return (
    <>
      {/* Desktop */}
      <div className="2xl:block xl:block lg:block md:block sm:hidden hidden ">
        <Navbar />
      </div>
      {/* Mobile */}
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
        <NavbarMobile />
      </div>


      {/* Desktop */}
      {/* <div className="2xl:block xl:block lg:block md:block sm:hidden hidden"><HomeDesktop /></div> */}
      {/* Mobile */}
      {/* <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block"><HomeMobile /></div> */}

        <div  className="2xl:block xl:block lg:block md:block sm:hidden hidden">
          <AboutDesktop />
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
          <AboutMobile />
        </div>

      {/* Desktop */}
      <div className="2xl:block xl:block lg:block md:block sm:hidden hidden">
        <Footer />
      </div>
      {/* Mobile */}
      <div className="2xl:hidden xl:hidden lg:hidden md:hidden sm:block block">
        <FooterMobile />
      </div>
    </>
  );
}

export default App;

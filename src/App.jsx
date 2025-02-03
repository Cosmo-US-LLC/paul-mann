
import Navbar from "./component/Desktop/Navbar";
import Footer from "./component/Desktop/Footer";
import NavbarMobile from "./component/Mobile/NavbarMobile";
import FooterMobile from "./component/Mobile/FooterMobile";

import HomeDesktop from "./component/Desktop/Home"
import HomeMobile from "./component/Mobile/Home"

function App() {
  return (
    <>
      {/* Desktop */}
      <div className="max-lg:hidden">
        <Navbar />
      </div>
      {/* Mobile */}
      {/* <div className="lg:hidden">
        <NavbarMobile />
      </div> */}


      {/* Desktop */}
      <div className="max-lg:hidden"><HomeDesktop /></div>
      {/* Mobile */}
      {/* <div className="lg:hidden"><HomeMobile /></div> */}


      {/* Desktop */}
      <div className="max-lg:hidden">
        <Footer />
      </div>
      {/* Mobile */}
      {/* <div className="lg:hidden">
        <FooterMobile />
      </div> */}
    </>
  );
}

export default App;

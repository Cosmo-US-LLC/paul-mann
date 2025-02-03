import React, { useEffect, useState } from "react";
import Home from "./Page/Home/Home";
import MobileHome from "./Page/MobileHome/MobileHome";
import ConnectWalletModal from "./component/ConnectWalletModal"
import { Toaster } from "react-hot-toast";
import { loadStoredConnection } from "./presale-gg/web3/connections";
// import Home from "./Page/Home/Home";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
	if (localStorage.getItem("connect-wallet-id-v2")) {
		loadStoredConnection()
	}
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="bg-[black] w-[100%]">
      <div>
        <div>{isMobile ? <MobileHome /> : <Home />}</div>
        <Toaster position="bottom-center" />
        <ConnectWalletModal />
      </div>
    </div>
  );
}

export default App;

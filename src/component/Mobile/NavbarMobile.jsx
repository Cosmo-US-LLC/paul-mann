import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleScroll = (e, id, offset = 0) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsOpen(false); // Close menu after clicking
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#fff]">
      <div className="flex justify-between h-[48px] items-center px-[20px]">
        <div
          className="relative flex flex-col items-center cursor-pointer"
          onClick={() => location.reload()}
        >
          <img
            src="/desktop-assets/navbar/faul-mann-logo.webp"
            alt="Faul-mann-logo"
            className="cursor-pointer object-cover w-[186.138px]"
          />
        </div>
        <div className="w-[100px] flex justify-end items-center">
          <img
            ref={menuRef}
            onClick={toggleMenu}
            src="/desktop-assets/navbar/menu-03.svg"
            className="cursor-pointer"
            alt=""
          />
        </div>
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-12 z-[999] left-0 w-[100%] bg-white shadow-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/about">
                <p
                  onClick={() => setIsOpen(false)}
                  className="text-black font-[RFDewiExtended] px-2 text-[14px] hover:text-gray-900"
                >
                  About
                </p>
              </Link>

              <Link to="/podcast" onClick={() => setIsOpen(false)}>
                <p className="text-black font-[RFDewiExtended] px-2 text-[14px] hover:text-gray-900">
                  Podcast
                </p>
              </Link>
              <Link to="/glimpse" onClick={() => setIsOpen(false)}>
                <p
                onClick={() => setIsOpen(false)}
                className="text-black font-[RFDewiExtended] px-2 text-[14px] hover:text-gray-900"
              >
                Press
              </p>
              </Link>
              <a
                href="https://www.renovaacademy.com/"
                onClick={() => setIsOpen(false)}
                className="flex flex-col justify-center px-2 text-black font-[RFDewiExtended] text-[14px]   capitalize   flex-shrink-0 hover:text-gray-900"
              >
                Coaching
              </a>
              <Link to="/contact"
              onClick={() => setIsOpen(false)}
              >
              <p
                className="flex flex-col justify-center px-2 text-black font-[RFDewiExtended] text-[14px]   capitalize  flex-shrink-0 hover:text-gray-900"
              >
                Connect
              </p>
              </Link>
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarMobile;

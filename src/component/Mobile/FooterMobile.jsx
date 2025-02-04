import React, { useState } from "react";
 

function FooterMobile() {
  const [sideOpen, setSideOpen] = useState(false);
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };
  return (
    <div className="relative min-h-[738px] overflow-hidden bg-[#E5DDD4] px-5 py-[30px]">
      footer
    </div>
  );
}

export default FooterMobile;

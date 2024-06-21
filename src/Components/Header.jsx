import { useLocation } from "react-router-dom";
import { navigation } from "../Constants";
import { useState } from "react";
import Logo from "../assets/ArexaLogo.svg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/MenuSvg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
    } else {
      disablePageScroll();
    }
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="relative z-50">
      {/* Full-screen overlay when navigation is open */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-100 transition-opacity ${
          openNavigation ? 'opacity-90 z-40' : 'opacity-0 z-0 pointer-events-none'
        }`}
      ></div>
      
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 lg:bg-n-8 ${
          openNavigation ? "bg-n-8" : "bg-n-8/90"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#">
            <img src={Logo} width={100} height={40} alt="Arexa" />
          </a>

          {/* Navigation Links */}
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:ml-auto lg:bg-transparent `}
          >
            <div className="relative z-50 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase transition-colors ${
                    openNavigation ? "text-white" : "text-gray-300" 
                  } hover:text-white ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1"
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Hamburger Menu Icon */}
          <div className="ml-auto lg:hidden" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

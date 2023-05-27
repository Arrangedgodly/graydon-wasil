import HeaderLogo from "../assets/graydonwasil.png";
import { hackerEffect } from "../scripts/hackerEffect";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.header_button');
    const handler = (e) => {
      hackerEffect(e);
    };

    elements.forEach(element => {
      element.addEventListener('mouseover', handler);
    });

    return () => {
      elements.forEach(element => {
        element.removeEventListener('mouseover', handler);
      });
    };
  }, []); 
  return (
    <div className="navbar bg-base-300 fixed top-0 left-0 z-50">
      <div className="navbar-start"></div>
      <div className="navbar-center flex-col">
        <a
          className="btn btn-ghost btn-lg rounded-box min-h-[6rem] italic font-bold"
          href="/"
        >
          <img
            src={HeaderLogo}
            alt="GraydonWasil.com logo"
            className="max-w-[10rem]"
          />
          .com
        </a>
        <div className="menu menu-horizontal">
          <a
            className="btn btn-ghost btn-md rounded-box m-2 hover:scale-125 hover:text-lg header_button"
            href="#projects"
            data-value="Projects"
          >
            Projects
          </a>
          <a
            className="btn btn-ghost btn-md rounded-box m-2 hover:scale-125 hover:text-lg header_button"
            href="#about"
            data-value="About"
          >
            About
          </a>
          <a
            className="btn btn-ghost btn-md rounded-box m-2 hover:scale-125 hover:text-lg header_button"
            href="#tools"
            data-value="Tools"
          >
            Tools
          </a>
          <a
            className="btn btn-ghost btn-md rounded-box m-2 hover:scale-125 hover:text-lg header_button"
            href="#contact"
            data-value="Contact"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Header;

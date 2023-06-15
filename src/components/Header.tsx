import BusinessLogo from "../assets/gw-logo-business.png";
import CoffeeLogo from "../assets/gw-logo-coffee.png";
import DarkLogo from "../assets/gw-logo-dark.png";
import DraculaLogo from "../assets/gw-logo-dracula.png";
import LuxuryLogo from "../assets/gw-logo-luxury.png";
import NightLogo from "../assets/gw-logo-night.png";
import { hackerEffect } from "../scripts/hackerEffect";
import { useEffect } from "react";

interface HeaderProps {
  theme: string;
}

const Header = ({ theme }: HeaderProps) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".header_button");

    const handler = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const target = mouseEvent.target as HTMLButtonElement & {
        dataset: { value: string };
      };
      hackerEffect({ ...mouseEvent, target });
    };

    elements.forEach((element) => {
      element.addEventListener("mouseover", handler);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseover", handler);
      });
    };
  }, []);
  return (
    <div className="navbar bg-base-300 fixed top-0 left-0 z-50">
      <div className="navbar-center flex-col flex-grow">
        <a
          className="btn btn-ghost btn-lg rounded-box h-[6rem] font-bold"
          href="/"
        >
          <img
            src={
              theme === "business"
                ? BusinessLogo
                : theme === "coffee"
                ? CoffeeLogo
                : theme === "dark"
                ? DarkLogo
                : theme === "dracula"
                ? DraculaLogo
                : theme === "luxury"
                ? LuxuryLogo
                : theme === "night"
                ? NightLogo
                : BusinessLogo
            }
            alt="GraydonWasil.com logo"
            className="md:max-w-[10rem] max-w-[8rem]"
          />
          .com
        </a>
        <div className="flex flex-row">
          <a
            className="btn btn-ghost md:btn-md btn-sm rounded-box m-2 md:hover:scale-125 hover:scale-150 hover:text-lg header_button"
            href="#projects"
            data-value="Projects"
          >
            Projects
          </a>
          <a
            className="btn btn-ghost md:btn-md btn-sm rounded-box m-2 md:hover:scale-125 hover:scale-150 hover:text-lg header_button"
            href="#about"
            data-value="About"
          >
            About
          </a>
          <a
            className="btn btn-ghost md:btn-md btn-sm rounded-box m-2 md:hover:scale-125 hover:scale-150 hover:text-lg header_button"
            href="#tools"
            data-value="Tools"
          >
            Tools
          </a>
          <a
            className="btn btn-ghost md:btn-md btn-sm rounded-box m-2 md:hover:scale-125 hover:scale-150 hover:text-lg header_button"
            href="#contact"
            data-value="Contact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

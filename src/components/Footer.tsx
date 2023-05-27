import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

interface FooterProps {
  setTheme: (theme: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setTheme }) => {
  return (
    <footer className="footer grid grid-cols-3 items-center p-4 bg-base-300 fixed bottom-0 left-0 z-50">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 Graydon Wasil - All right reserved</p>
      </div>
      <div className="items-center grid-flow-col flex flex-col md:justify-self-center">
        <h3 className="text-lg font-bold">Themes</h3>
        <div className="menu menu-horizontal">
          <button
            className="btn btn-xs btn-ghost rounded-box"
            onClick={() => setTheme("business")}
          >
            Business
          </button>
          <button
            className="btn btn-xs btn-ghost rounded-box"
            onClick={() => setTheme("coffee")}
          >
            Coffee
          </button>
          <button
            className="btn btn-xs btn-ghost rounded-box"
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
          <button
            className="btn btn-xs btn-ghost rounded-box"
            onClick={() => setTheme("dracula")}
          >
            Dracula
          </button>
          <button
            className="btn btn-xs btn-ghost rounded-box"
            onClick={() => setTheme("luxury")}
          >
            Luxury
          </button>
          <button
            className="btn btn-xs btn-ghost rounded-box"
            onClick={() => setTheme("night")}
          >
            Night
          </button>
        </div>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/Arrangedgodly/" target="_blank">
          <button className="btn btn-ghost rounded-box">
            <VscGithub size="2rem" />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/graydon-wasil/" target="_blank">
          <button className="btn btn-ghost rounded-box">
            <AiOutlineLinkedin size="2rem" />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

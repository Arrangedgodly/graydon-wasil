import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

interface FooterProps {
  setTheme: (theme: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setTheme }) => {
  return (
    <footer className="footer grid grid-cols-3 items-end content-center p-4 bg-base-300 fixed bottom-0 left-0 z-50">
      <div className="grid-flow-col flex flex-col">
        <p className="text-sm text-center overflow-auto whitespace-normal break-after-all max-w-3/4">
          Copyright © 2023 Graydon Wasil - All right reserved
        </p>
      </div>
      <div className="items-center grid-flow-col flex flex-col justify-self-center">
        <h3 className="text-lg font-bold">Themes</h3>
        <div className="flex flex-wrap justify-center">
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
      <div className="grid-flow-col flex justify-center gap-2 justify-self-end">
        <a
          href="https://github.com/Arrangedgodly/"
          target="_blank"
          className="btn btn-sm btn-ghost rounded-box"
        >
          <VscGithub size="2rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/graydon-wasil/"
          target="_blank"
          className="btn btn-sm btn-ghost rounded-box"
        >
          <AiOutlineLinkedin size="2rem" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

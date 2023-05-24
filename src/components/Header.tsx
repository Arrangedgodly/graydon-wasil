import HeaderLogo from "../assets/graydonwasil.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 z-50">
      <div className="navbar-start"></div>
      <div className="navbar-center flex-col">
        <a className="btn btn-ghost btn-lg rounded-box min-h-[6rem]" href="/">
          <img
            src={HeaderLogo}
            alt="GraydonWasil.com logo"
            className="max-w-[10rem]"
          />
          .com
        </a>
        <div className="menu menu-horizontal">
          <a className="btn btn-ghost btn-md rounded-box" href="#projects">
            Projects
          </a>
          <a className="btn btn-ghost btn-md rounded-box" href="#about">
            About
          </a>
          <a className="btn btn-ghost btn-md rounded-box" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Header;

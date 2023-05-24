import Rhymebook from "../assets/rhymebook.png";
import VaultCounter from "../assets/vault-counter.png";
import AOLogo from "../assets/ao-logo.png";

const Projects = () => {
  return (
    <div className="flex flex-grow flex-col items-center justify-center max-w-xl">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={Rhymebook}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={VaultCounter}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={AOLogo}
            className="w-full rounded-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import Rhymebook from "../assets/rhymebook.png";
import VaultCounter from "../assets/vault-counter.png";
import AOLogo from "../assets/ao-logo.png";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      className="flex flex-grow flex-col items-center justify-center w-screen segment"
      id="projects"
    >
      <div className="carousel w-full max-w-[95vw]">
        <div
          id="slide1"
          className="carousel-item relative w-full items-center justify-center h-screen"
        >
          <Project
            image={Rhymebook}
            name="Rhymebook"
            desc="An API powered lyric writing application that writes your bars with you!"
            live="https://rhymebook.graydonwasil.com/"
            code="https://github.com/Arrangedgodly/rhymebook-chakra"
          />
          <div
            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
            data-aos="fade-up"
          >
            <a href="#slide3" className="btn btn-circle btn-nuetral drop-shadow-xl">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-nuetral drop-shadow-xl">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full items-center justify-center h-screen"
        >
          <Project
            image={VaultCounter}
            name="Vault Counter"
            desc="An application to make counting vaulted cash a breeze."
            live="https://vault.graydonwasil.com/"
            code="https://github.com/Arrangedgodly/vault-vite"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle btn-nuetral drop-shadow-xl">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-nuetral drop-shadow-xl">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full items-center justify-center h-screen"
        >
          <Project
            image={AOLogo}
            name="ArtOffishal"
            desc="An art gallery and merch shop for ArtOffishal"
            live="https://artoffishal.com/"
            code="https://github.com/orgs/ArtofFish/repositories"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle btn-nuetral drop-shadow-xl">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-nuetral drop-shadow-xl">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

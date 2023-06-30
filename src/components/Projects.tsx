import Rhymepage from "../assets/rhymepage.png";
import Rhymebook from "../assets/rhymebook.png";
import VaultCounter from "../assets/vault-counter.png";
import FreeCodeCamp from "../assets/freecodecamp.png";
// import AOLogo from "../assets/ao-logo.png";
import Project from "./Project";

const ProjectData = [
  {
    image: Rhymepage,
    name: "Rhymepage",
    desc: "Version 2.0 of Rhymebook, a lyric writing application that writes your bars with you! Rebuilt with Vite, TailwindCSS, DaisyUI and hosted via Google Firebase",
    live: "https://rhymepage.com",
    code: "https://github.com/Arrangedgodly/rhymebook-vite"
  },
  {
    image: Rhymebook,
    name: "Rhymebook",
    desc: "The original iteration of an API powered lyric writing application that writes your bars with you! Built with React, ChakraUI, MongoDB, and hosted via Google Cloud",
    live: "https://rhymebook.graydonwasil.com/",
    code: "https://github.com/Arrangedgodly/rhymebook-chakra",
  },
  {
    image: VaultCounter,
    name: "Vault Counter",
    desc: "An application to make counting vaulted cash a breeze. Built with React, MongoDB, and hosted via AWS",
    live: "https://vault.graydonwasil.com/",
    code: "https://github.com/Arrangedgodly/vault-vite",
  },
  {
    image: FreeCodeCamp,
    name: "Front End Libraries Projects",
    desc: "A series of 5 projects done for the FreeCodeCamp Front End Libraries Certification. Built with Vite, React, and TailwindCSS",
    live: "https://fcc.graydonwasil.com/",
    code: "https://github.com/Arrangedgodly/fcc-portfolio"
  }
];

/*
{
  image: ,
  name: "",
  desc: "",
  live: "",
  code: ""
},
{
    image: AOLogo,
    name: "ArtOffishal",
    desc: "An art gallery and merch shop for ArtOffishal",
    live: "https://artoffishal.com/",
    code: "https://github.com/orgs/ArtofFish/repositories",
  },
*/

const Projects = () => {
  return (
    <div
      className="flex flex-grow flex-col items-center justify-center w-screen segment"
      id="projects"
    >
      <div className="carousel w-full max-w-[95vw]">
        {ProjectData.map((project, index) => {
          const previousIndex =
            index !== 0 ? index - 1 : ProjectData.length - 1;
          const nextIndex = index !== ProjectData.length - 1 ? index + 1 : 0;

          return (
            <div
              key={`Project-${project.name}`}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full items-center justify-center h-screen"
            >
              <Project
                image={project.image}
                name={project.name}
                desc={project.desc}
                live={project.live}
                code={project.code}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={`#slide${previousIndex + 1}`}
                  className="btn btn-circle btn-nuetral drop-shadow-xl"
                >
                  {`<`}
                </a>
                <a
                  href={`#slide${nextIndex + 1}`}
                  className="btn btn-circle btn-nuetral drop-shadow-xl"
                >
                  {`>`}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

import { TxtAnime } from "txtanime.js";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    new TxtAnime(".roles", {
      effect: "txt-an-8",
      text: [
        "Full Stack Developer",
        "Software Engineer",
        "UI/UX Designer",
        "RESTful API Developer",
        "Graphic Designer",
        "TailwindCSS Specialist",
        "Web Developer",
        "Database Administrator",
        "React Developer",
        "JavaScript Engineer",
        "Node.js Developer",
      ],
      delayStart: 0,
      delay: 0.05,
      duration: 0.05,
      repeat: true,
    });
  }, []);

  return (
    <div
      className="flex flex-grow flex-col items-center justify-center h-screen segment"
      id="about"
    >
      <h1 className="md:text-5xl text-3xl font-bold p-4" data-aos="fade-left">
        About Me
      </h1>
      <h2 className="md:text-2xl text-xl font-bold p-4" data-aos="fade-right">
        I am a
        <span className="roles md:text-4xl text-2xl font-bold text-primary alt-text ml-2"></span>
      </h2>
      <p className="md:text-xl text-lg md:max-w-[55%] max-w-[80%] text-center p-4" data-aos="fade-right">
        I have a passion for learning and problem solving. I love to take an
        everyday struggle and convert it into a simple solution utilizing the
        coding methods and technologies I have learned.
      </p>
      <div className="flex flex-col items-center" data-aos="fade-up">
        <a
          href="https://github-readme-stats.vercel.app/api/top-langs/?username=arrangedgodly&layout=compact&theme=dark"
          target="_blank"
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=arrangedgodly&layout=compact&theme=dark"
            alt="arrangedgodly"
            className='w-[90%] mx-auto my-5'
          />
        </a>
        <a
          href="https://github-readme-streak-stats.herokuapp.com/?user=arrangedgodly&theme=dark"
          target="_blank"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=arrangedgodly&theme=dark"
            alt="arrangedgodly"
            className='w-[90%] mx-auto my-5'
          />
        </a>
      </div>
    </div>
  );
};

export default About;

/*
<a href="https://github-readme-stats.vercel.app/api/wakatime?username=arrangedgodly&theme=dark">
        <img
          src="https://github-readme-stats.vercel.app/api/wakatime?username=arrangedgodly&theme=dark"
          alt="arrangedgodly"
        />
        </a>
*/

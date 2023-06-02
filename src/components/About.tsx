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
      <h1 className="text-5xl font-bold p-4" data-aos="fade-left">
        About Me
      </h1>
      <h2 className="text-2xl font-bold p-4" data-aos="fade-right">
        I am a
        <span className="roles text-4xl font-bold text-primary alt-text ml-2"></span>
      </h2>
      <p className="text-xl max-w-[50%] text-center p-4" data-aos="fade-right">
        I have a passion for learning and problem solving. I love to take an
        everyday struggle and convert it into a simple solution utilizing the
        coding methods and technologies I have learned.
      </p>
      <h3 className="text-2xl font-bold p-4" data-aos="fade-up">
        Github Stats
      </h3>
      <p data-aos="fade-up">
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=arrangedgodly&"
          alt="arrangedgodly"
        />
      </p>
    </div>
  );
};

export default About;

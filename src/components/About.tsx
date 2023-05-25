const About = () => {
  return (
    <div
      className="flex flex-grow flex-col items-center justify-center h-screen"
      data-aos="fade-up"
      id="about"
    >
      <h1 className="text-4xl font-bold p-4" data-aos='fade-left'>About Me</h1>
      <p className="text-xl max-w-[50%] text-center p-4" data-aos='fade-right'>
        I am a full stack software engineer with a passion for learning and
        problem solving. I love to take an everyday struggle and convert it into
        a simple solution utilizing the coding methods I have learned.
      </p>
      <h3 className="text-2xl font-bold p-4" data-aos='fade-up'>Github Stats</h3>
      <p data-aos='fade-up'>
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=arrangedgodly&"
          alt="arrangedgodly"
        />
      </p>
    </div>
  );
};

export default About;

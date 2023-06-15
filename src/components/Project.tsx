interface ProjectProps {
  image: string;
  name: string;
  desc: string;
  live: string;
  code: string;
}

const Project = ({ image, name, desc, live, code }: ProjectProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center md:w-96 w-3/4 m-2 drop-shadow-xl bg-neutral text-neutral-content rounded-2xl"
      data-aos="fade-up"
    >
      <figure data-aos='fade-right'>
        <img src={image} alt={name} className="md:w-3/4 w-full m-auto mt-4 rounded-2xl drop-shadow-xl" />
      </figure>
      <div className="flex-col items-center justify-center p-2 mb-2">
        <h2 className="text-lg text-center font-bold m-2" data-aos='fade-down' data-aos-delay='1000'>{name}</h2>
        <p className="text-sm text-center m-2 mb-4" data-aos='fade-right' data-aos-delay='1000'>{desc}</p>
        <div className="flex gap-2 items-center justify-center" data-aos='fade-up' data-aos-delay='1000'>
          <a
            className="btn bg-base-100 rounded-xl hover:bg-secondary hover:text-secondary-content"
            href={live}
            target="_blank"
          >
            View
          </a>
          <a
            className="btn bg-base-content text-base-200 rounded-xl hover:bg-accent hover:text-accent-content"
            href={code}
            target="_blank"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

interface ProjectProps {
  image: string;
  name: string;
  desc: string;
  live: string;
  code: string;
}

const Project: React.FC<ProjectProps> = ({ image, name, desc, live, code }) => {
  return (
    <div
      className="card w-96 drop-shadow-xl bg-secondary text-secondary-content rounded-lg"
      data-aos="fade-up"
    >
      <figure data-aos='fade-right'>
        <img src={image} alt={name} className="w-3/4 m-5 rounded-xl drop-shadow-xl" />
      </figure>
      <div className="justify-between card-body items-center">
        <h2 className="card-title" data-aos='fade-down' data-aos-delay='1000'>{name}</h2>
        <p className="text-sm text-center" data-aos='fade-right' data-aos-delay='1000'>{desc}</p>
        <div className="justify-between card-actions" data-aos='fade-up' data-aos-delay='1000'>
          <a
            className="btn btn-primary rounded-xl"
            href={live}
            target="_blank"
          >
            View
          </a>
          <a
            className="btn btn-accent rounded-xl"
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

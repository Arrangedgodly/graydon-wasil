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
      className="card w-96 drop-shadow-xl bg-neutral text-neutral-content rounded-2xl"
      data-aos="fade-up"
    >
      <figure data-aos='fade-right'>
        <img src={image} alt={name} className="w-3/4 m-5 rounded-2xl drop-shadow-xl" />
      </figure>
      <div className="justify-between card-body items-center">
        <h2 className="card-title" data-aos='fade-down' data-aos-delay='1000'>{name}</h2>
        <p className="text-sm text-center" data-aos='fade-right' data-aos-delay='1000'>{desc}</p>
        <div className="justify-between card-actions" data-aos='fade-up' data-aos-delay='1000'>
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

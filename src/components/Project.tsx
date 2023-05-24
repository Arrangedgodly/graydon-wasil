interface ProjectProps {
  image: string;
  name: string;
  desc: string;
  live: string;
  code: string;
}

const Project: React.FC<ProjectProps> = ({ image, name, desc, live, code }) => {
  return (
    <div className="card w-96 shadow-xl bg-base-100 rounded-box rounded-lg" data-aos='fade-up'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="justify-between card-body items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-center">{desc}</p>
        <div className="justify-between card-actions">
          <a className="btn btn-primary" href={live} target="_blank">View</a>
          <a className="btn btn-secondary" href={code} target="_blank">Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project;
interface ToolProps {
  link: string;
  icon: React.ReactNode;
  animation: string;
  name: string;
}

const Tool: React.FC<ToolProps> = ({ link, icon, animation, name }) => {
  return (
    <a
      className="btn btn-ghost btn-lg m-2 p-2 flex flex-col items-center justify-center rounded-box drop-shadow-xl hover:bg-neutral-focus hover:scale-150"
      href={link}
      target="_blank"
      rel="noreferrer"
      data-aos={animation}
      data-aos-delay="750"
    >
      <div className="tool flex flex-col items-center z-40">
        {icon}
        <p className="tool-text text-sm bg-neutral text-neutral-content">{name}</p>
      </div>
    </a>
  );
};

export default Tool;

interface ToolProps {
  link: string;
  icon: React.ReactNode;
  animation: string;
  name: string;
}

const Tool: React.FC<ToolProps> = ({ link, icon, animation, name }) => {
  return (
    <a
      className="card m-2 p-2 flex flex-col items-center justify-center rounded-box drop-shadow-xl hover:scale-150"
      href={link}
      target="_blank"
      rel="noreferrer"
      data-aos={animation}
      data-aos-delay="750"
    >
      <div className="tool flex flex-col items-center z-40 text-neutral">
        {icon}
        <p className="tool-text md:text-md text-xs bg-neutral text-neutral-content text-center whitespace-nowrap">
          {name}
        </p>
      </div>
    </a>
  );
};

export default Tool;

interface ToolProps {
  link: string;
  icon: React.ReactNode;
  animation: string;
}

const Tool: React.FC<ToolProps> = ({link, icon, animation}) => {
  return (
    <a
      className="btn btn-ghost btn-lg m-2 p-2 flex flex-col items-center justify-center rounded-box"
      href={link}
      target="_blank"
      rel="noreferrer"
      data-aos={animation}
      data-aos-delay='750'
    >
      {icon}
    </a>
  );
};

export default Tool;

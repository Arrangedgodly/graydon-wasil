import {
  SiTailwindcss,
  SiVite,
  SiReact,
  SiDaisyui,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiAmazonaws,
  SiBabel,
  SiCloudflare,
  SiEslint,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiMongodb,
  SiNpm,
  SiPostman,
  SiReactrouter,
  SiTypescript,
  SiTrello,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiAffinitypublisher,
  SiUbuntu
} from "react-icons/si";
import Tool from "./Tool";

const Tools = () => {
  return (
    <div
      className="flex flex-grow flex-col items-center justify-center h-screen"
      id="tools"
    >
      <h1 className="text-4xl font-bold p-4" data-aos="flip-right">
        Tools
      </h1>
      <div className="grid grid-cols-5 gap-7">
        <Tool
          icon={<SiTailwindcss size='5rem' />}
          link="https://tailwindcss.com/"
          animation="fade-up"
        />
        <Tool
          icon={<SiVite size='5rem' />}
          link="https://vitejs.dev/"
          animation="fade-down"
        />
        <Tool
          icon={<SiReact size='5rem' />}
          link="https://reactjs.org/"
          animation="fade-left"
        />
        <Tool
          icon={<SiDaisyui size='5rem' />}
          link="https://daisyui.com/"
          animation="fade-right"
        />
        <Tool
          icon={<SiFirebase size='5rem' />}
          link="https://firebase.google.com/"
          animation="fade-up"
        />
        <Tool
          icon={<SiNodedotjs size='5rem' />}
          link="https://nodejs.org/en/"
          animation="fade-down"
        />
        <Tool
          icon={<SiExpress size='5rem' />}
          link="https://expressjs.com/"
          animation="fade-left"
        />
        <Tool
          icon={<SiAmazonaws size='5rem' />}
          link="https://aws.amazon.com/"
          animation="fade-right"
        />
        <Tool
          icon={<SiBabel size='5rem' />}
          link="https://babeljs.io/"
          animation="fade-up"
        />
        <Tool
          icon={<SiCloudflare size='5rem' />}
          link="https://www.cloudflare.com/"
          animation="fade-down"
        />
        <Tool
          icon={<SiEslint size='5rem' />}
          link="https://eslint.org/"
          animation="fade-left"
        />
        <Tool
          icon={<SiFigma size='5rem' />}
          link="https://www.figma.com/"
          animation="fade-right"
        />
        <Tool
          icon={<SiGit size='5rem' />}
          link="https://git-scm.com/"
          animation="fade-up"
        />
        <Tool
          icon={<SiGithub size='5rem' />}
          link=''
          animation='fade-down'
        />
        <Tool
          icon={<SiGooglecloud size='5rem' />}
          link="https://cloud.google.com/"
          animation="fade-left"
        />
        <Tool
          icon={<SiMongodb size='5rem' />}
          link="https://www.mongodb.com/"
          animation="fade-right"
        />
        <Tool
          icon={<SiNpm size='5rem' />}
          link="https://www.npmjs.com/"
          animation="fade-up"
        />
        <Tool
          icon={<SiPostman size='5rem' />}
          link="https://www.postman.com/"
          animation="fade-down"
        />
        <Tool
          icon={<SiReactrouter size='5rem' />}
          link="https://reactrouter.com/"
          animation="fade-left"
        />
        <Tool
          icon={<SiTypescript size='5rem' />}
          link="https://www.typescriptlang.org/"
          animation="fade-right"
        />
        <Tool
          icon={<SiTrello size='5rem' />}
          link="https://trello.com/"
          animation="fade-up"
        />
        <Tool
          icon={<SiAffinitydesigner size='5rem' />}
          link="https://affinity.serif.com/en-us/designer/"
          animation="fade-down"
        />
        <Tool
          icon={<SiAffinityphoto size='5rem' />}
          link="https://affinity.serif.com/en-us/photo/"
          animation="fade-left"
        />
        <Tool
          icon={<SiAffinitypublisher size='5rem' />}
          link="https://affinity.serif.com/en-us/publisher/"
          animation="fade-right"
        />
        <Tool
          icon={<SiUbuntu size='5rem' />}
          link="https://ubuntu.com/"
          animation="fade-up"
        />
      </div>
    </div>
  );
};

export default Tools;

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
          icon={<SiTailwindcss size='3rem' />}
          link="https://tailwindcss.com/"
          animation="fade-up"
          name='Tailwind CSS'
        />
        <Tool
          icon={<SiVite size='3rem' />}
          link="https://vitejs.dev/"
          animation="fade-down"
          name='Vite'
        />
        <Tool
          icon={<SiReact size='3rem' />}
          link="https://reactjs.org/"
          animation="fade-left"
          name='React'
        />
        <Tool
          icon={<SiDaisyui size='3rem' />}
          link="https://daisyui.com/"
          animation="fade-right"
          name='DaisyUI'
        />
        <Tool
          icon={<SiFirebase size='3rem' />}
          link="https://firebase.google.com/"
          animation="fade-up"
          name='Firebase'
        />
        <Tool
          icon={<SiNodedotjs size='3rem' />}
          link="https://nodejs.org/en/"
          animation="fade-down"
          name='Node.js'
        />
        <Tool
          icon={<SiExpress size='3rem' />}
          link="https://expressjs.com/"
          animation="fade-left"
          name='Express.js'
        />
        <Tool
          icon={<SiAmazonaws size='3rem' />}
          link="https://aws.amazon.com/"
          animation="fade-right"
          name='AWS'
        />
        <Tool
          icon={<SiBabel size='3rem' />}
          link="https://babeljs.io/"
          animation="fade-up"
          name='Babel'
        />
        <Tool
          icon={<SiCloudflare size='3rem' />}
          link="https://www.cloudflare.com/"
          animation="fade-down"
          name='Cloudflare'
        />
        <Tool
          icon={<SiEslint size='3rem' />}
          link="https://eslint.org/"
          animation="fade-left"
          name='ESLint'
        />
        <Tool
          icon={<SiFigma size='3rem' />}
          link="https://www.figma.com/"
          animation="fade-right"
          name='Figma'
        />
        <Tool
          icon={<SiGit size='3rem' />}
          link="https://git-scm.com/"
          animation="fade-up"
          name='Git'
        />
        <Tool
          icon={<SiGithub size='3rem' />}
          link=''
          animation='fade-down'
          name='GitHub'
        />
        <Tool
          icon={<SiGooglecloud size='3rem' />}
          link="https://cloud.google.com/"
          animation="fade-left"
          name='Google Cloud'
        />
        <Tool
          icon={<SiMongodb size='3rem' />}
          link="https://www.mongodb.com/"
          animation="fade-right"
          name='MongoDB'
        />
        <Tool
          icon={<SiNpm size='3rem' />}
          link="https://www.npmjs.com/"
          animation="fade-up"
          name='npm'
        />
        <Tool
          icon={<SiPostman size='3rem' />}
          link="https://www.postman.com/"
          animation="fade-down"
          name='Postman'
        />
        <Tool
          icon={<SiReactrouter size='3rem' />}
          link="https://reactrouter.com/"
          animation="fade-left"
          name='React Router'
        />
        <Tool
          icon={<SiTypescript size='3rem' />}
          link="https://www.typescriptlang.org/"
          animation="fade-right"
          name='TypeScript'
        />
        <Tool
          icon={<SiTrello size='3rem' />}
          link="https://trello.com/"
          animation="fade-up"
          name='Trello'
        />
        <Tool
          icon={<SiAffinitydesigner size='3rem' />}
          link="https://affinity.serif.com/en-us/designer/"
          animation="fade-down"
          name='Affinity Designer'
        />
        <Tool
          icon={<SiAffinityphoto size='3rem' />}
          link="https://affinity.serif.com/en-us/photo/"
          animation="fade-left"
          name='Affinity Photo'
        />
        <Tool
          icon={<SiAffinitypublisher size='3rem' />}
          link="https://affinity.serif.com/en-us/publisher/"
          animation="fade-right"
          name='Affinity Publisher'
        />
        <Tool
          icon={<SiUbuntu size='3rem' />}
          link="https://ubuntu.com/"
          animation="fade-up"
          name='Ubuntu'
        />
      </div>
    </div>
  );
};

export default Tools;

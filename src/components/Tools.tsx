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
import { useEffect } from "react";

const Tools = () => {
  useEffect(() => {
    const icons = document.querySelectorAll('.tool');
    let index = 0;
    setInterval(() => {
      icons.forEach(icon => {
        icon.classList.remove('scale-150', 'text-neutral-content');
        const toolText = icon.querySelector('.tool-text');
        if (toolText) {
          toolText.classList.remove('tool-text-active');
        }
      });

      icons[index].classList.add('scale-150', 'text-neutral-content');
      const toolText = icons[index].querySelector('.tool-text');
      if (toolText) {
        toolText.classList.add('tool-text-active');
      }
      index++;
      if (index >= icons.length) index = 0;
    }, 1000);
  }, []);
  return (
    <div
      className="section flex flex-grow flex-col items-center justify-center h-screen segment w-screen"
      id="tools"
    >
      <h1 className="md:text-5xl text-3xl font-bold p-4" data-aos="flip-right">
        Tools
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-3 md:gap-7 gap-4 max-w-[80vw]">
        <Tool
          icon={<SiTailwindcss size='2.5rem' className='hover:text-neutral-content' />}
          link="https://tailwindcss.com/"
          animation="fade-up"
          name='Tailwind CSS'
        />
        <Tool
          icon={<SiVite size='2.5rem' className='hover:text-neutral-content' />}
          link="https://vitejs.dev/"
          animation="fade-down"
          name='Vite'
        />
        <Tool
          icon={<SiReact size='2.5rem' className='hover:text-neutral-content' />}
          link="https://reactjs.org/"
          animation="fade-left"
          name='React'
        />
        <Tool
          icon={<SiDaisyui size='2.5rem' className='hover:text-neutral-content' />}
          link="https://daisyui.com/"
          animation="fade-right"
          name='DaisyUI'
        />
        <Tool
          icon={<SiFirebase size='2.5rem' className='hover:text-neutral-content' />}
          link="https://firebase.google.com/"
          animation="fade-up"
          name='Firebase'
        />
        <Tool
          icon={<SiNodedotjs size='2.5rem' className='hover:text-neutral-content' />}
          link="https://nodejs.org/en/"
          animation="fade-down"
          name='Node.js'
        />
        <Tool
          icon={<SiExpress size='2.5rem' className='hover:text-neutral-content' />}
          link="https://expressjs.com/"
          animation="fade-left"
          name='Express.js'
        />
        <Tool
          icon={<SiAmazonaws size='2.5rem' className='hover:text-neutral-content' />}
          link="https://aws.amazon.com/"
          animation="fade-right"
          name='AWS'
        />
        <Tool
          icon={<SiBabel size='2.5rem' className='hover:text-neutral-content' />}
          link="https://babeljs.io/"
          animation="fade-up"
          name='Babel'
        />
        <Tool
          icon={<SiCloudflare size='2.5rem' className='hover:text-neutral-content' />}
          link="https://www.cloudflare.com/"
          animation="fade-down"
          name='Cloudflare'
        />
        <Tool
          icon={<SiEslint size='2.5rem' className='hover:text-neutral-content' />}
          link="https://eslint.org/"
          animation="fade-left"
          name='ESLint'
        />
        <Tool
          icon={<SiFigma size='2.5rem' className='hover:text-neutral-content' />}
          link="https://www.figma.com/"
          animation="fade-right"
          name='Figma'
        />
        <Tool
          icon={<SiGit size='2.5rem' className='hover:text-neutral-content' />}
          link="https://git-scm.com/"
          animation="fade-up"
          name='Git'
        />
        <Tool
          icon={<SiGithub size='2.5rem' className='hover:text-neutral-content' />}
          link=''
          animation='fade-down'
          name='GitHub'
        />
        <Tool
          icon={<SiGooglecloud size='2.5rem' className='hover:text-neutral-content' />}
          link="https://cloud.google.com/"
          animation="fade-left"
          name='Google Cloud'
        />
        <Tool
          icon={<SiMongodb size='2.5rem' className='hover:text-neutral-content' />}
          link="https://www.mongodb.com/"
          animation="fade-right"
          name='MongoDB'
        />
        <Tool
          icon={<SiNpm size='2.5rem' className='hover:text-neutral-content' />}
          link="https://www.npmjs.com/"
          animation="fade-up"
          name='npm'
        />
        <Tool
          icon={<SiPostman size='2.5rem' className='hover:text-neutral-content' />}
          link="https://www.postman.com/"
          animation="fade-down"
          name='Postman'
        />
        <Tool
          icon={<SiReactrouter size='2.5rem' className='hover:text-neutral-content' />}
          link="https://reactrouter.com/"
          animation="fade-left"
          name='React Router'
        />
        <Tool
          icon={<SiTypescript size='2.5rem' className='hover:text-neutral-content' />}
          link="https://www.typescriptlang.org/"
          animation="fade-right"
          name='TypeScript'
        />
        <Tool
          icon={<SiTrello size='2.5rem' className='hover:text-neutral-content' />}
          link="https://trello.com/"
          animation="fade-up"
          name='Trello'
        />
        <Tool
          icon={<SiAffinitydesigner size='2.5rem' className='hover:text-neutral-content' />}
          link="https://affinity.serif.com/en-us/designer/"
          animation="fade-down"
          name='Affinity Designer'
        />
        <Tool
          icon={<SiAffinityphoto size='2.5rem' className='hover:text-neutral-content' />}
          link="https://affinity.serif.com/en-us/photo/"
          animation="fade-left"
          name='Affinity Photo'
        />
        <Tool
          icon={<SiAffinitypublisher size='2.5rem' className='hover:text-neutral-content' />}
          link="https://affinity.serif.com/en-us/publisher/"
          animation="fade-right"
          name='Affinity Publisher'
        />
        <Tool
          icon={<SiUbuntu size='2.5rem' className='hover:text-neutral-content' />}
          link="https://ubuntu.com/"
          animation="fade-up"
          name='Ubuntu'
        />
      </div>
    </div>
  );
};

export default Tools;

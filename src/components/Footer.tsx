import {VscGithub} from 'react-icons/vsc'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="footer items-center p-4 text-neutral-content fixed bottom-0 left-0 z-50">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 Graydon Wasil - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href='https://github.com/Arrangedgodly/' target='_blank'>
        <button className='btn btn-ghost rounded-box'>
          <VscGithub size='2rem' />
        </button>
        </a>
        <a href='https://www.linkedin.com/in/graydon-wasil/' target='_blank'>
        <button className='btn btn-ghost rounded-box'>
          <AiOutlineLinkedin size='2rem' />
        </button>
        </a>
        <button className='btn btn-ghost rounded-box'>
          
        </button>
      </div>
    </footer>
  );
};

export default Footer;
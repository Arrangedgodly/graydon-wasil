import HeaderLogo from '../assets/graydonwasil.png';

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost btn-lg rounded-box min-h-[6rem]">
          <img src={HeaderLogo} alt='GraydonWasil.com logo' className='max-w-[10rem]'/>
          .com
        </a>
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  );
};

export default Header;

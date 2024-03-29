import logo from "./logo.svg"
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center flex-col'>
        <img src={logo} alt="sumz_logo" className='w-27 object-cointain' />
      </nav>
    </header>
  );
};

export default Hero;

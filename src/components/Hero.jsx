import logo from "./logo.svg";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-27 object-cointain" />
        <button
          type="button"
          onClick={() => window.open("https://www.github.com/FakeGods")}
          className="black_btn"
        >
          GitHub{" "}
        </button>
        <h1 className="head_text">
          Summ Articles with <br />
          <span className="red_gradient">OpenAi GPT-4</span>
        </h1>
      </nav>
    </header>
  );
};

export default Hero;

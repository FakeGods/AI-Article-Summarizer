import { useState } from "react";

import logo from "../assets/logo.svg";
import { Switch } from "@headlessui/react";

const Hero = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex justify-between items-center">
          <img src={logo} alt="summi_logo" className="w-10  " />
          <p className="text-xl text-bold font-bold">MINIMIZE</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => window.open("https://github.com/FakeGods", "_blank")}
            className="black_btn mr-6"
          >
            GitHub
          </button>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-gray-800 " : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition `}
            />
          </Switch>
        </div>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;

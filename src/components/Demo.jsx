import { useState, useEffect } from "react";
import { linkIcon } from "../assets/";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          action=""
          className="relative flex justify-center items-center"
          onSubmit={() => {}}
        ></form>
        <img
          src="{linkIcon}"
          alt="linkicon"
          className="absoulte left-0 my-2 ml-3 w-5"
        />
        <input
          type="url"
          placeholder="Enter a URL"
          value=""
          onChange={() => {}}
          required
          className="url_input peer"
        />
        <button
          type="submit"
          className="submit_bt peer-focus:border-gray-700
        peer-focus:text-gray-700"
        >
          ↵
        </button>
      </div>
    </section>
  );
};

export default Demo;

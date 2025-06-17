import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import lock from "../assets/hugeicon.svg";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-white min-h-screen text-center">
      {/* Tagline */}
      <div className=" flex justify-center w-full">
        <div className="w-[70%] text-blue-900 px-6 py-2 rounded-xl  border-2 border-white text-2xl  md:text-3xl mt-[25px] flex flex-col md:flex-row items-center gap-0 md:gap-4">
          <img src={lock} alt="hugeicon" className="h-12 mb-0 md:mb-8" />
          <p>
            No.#1 Internship Platform for Showcasing your Skill on <br /> real
            projects
          </p>
        </div>
      </div>
      {/* Main Heading */}
      <div className="mt-10 md:mt-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#002B6B]">
          Showcase Your Mastery.
          <br />
          Get Connected
        </h1>
        <p className="mt-6 md:mt-12 text-gray-500 text-[16px]">
          Create your profile, showcase your skills, <br />
          and let Your Skill grow.
        </p>
      </div>

      {/* Search Box */}
       
      <div className="mt-12 w-full flex flex-col md:flex-row justify-center items-center gap-4 px-4">
        {/* Input Field */}
        <div className="w-[80%] md:w-[30%] flex gap-2 items-center bg-white px-4 py-4 md:py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          <IoSearchSharp size={20} />
          <input
            type="text"
            placeholder="e.g. UX Designer Internship"
            className="flex-grow outline-none text-sm text-gray-700 placeholder:text-[16px] font-medium"
          />
        </div>

        {/* Search Button */}
        <button className="w-[60%] md:w-auto bg-blue-600 text-white px-5 py-4 md:py-2 rounded-full text-2xl md:text-[16px] hover:bg-blue-700 font-medium cursor-pointer transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

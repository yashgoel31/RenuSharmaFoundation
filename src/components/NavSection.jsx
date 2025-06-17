import React from "react";
import { MdArrowOutward } from "react-icons/md";
import logo from "../assets/logo.svg";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const NavSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      {/* Top Nav */}
      <div className="bg-blue-950 text-white flex justify-between items-center px-8 py-1">
        <div className="flex items-center space-x-4 ">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <nav className="hidden md:flex gap-6 text-lg font-[18px] bg-transparent text-slate-300 ">
          <a href="#" className="hover:underline">
            Create Resume
          </a>
          <a href="#" className="hover:underline">
            Training Enrollment
          </a>
          <a href="#" className="hover:underline">
            Partner with us
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </nav>
        
        <button
          className="hidden text-sky-700 pl-4 pr-2 py-1 rounded-full border-2 border-sky-700 font-medium md:flex items-center gap-3 hover:bg-sky-50 transition cursor-pointer"
          aria-label="Register Now"
        >
          <span>Register Now</span>
          <div className="bg-white rounded-full p-2 shadow-sm ">
            <MdArrowOutward size={18} />
          </div>
        </button>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={35} /> : <RxHamburgerMenu size={35} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden w-full h-[2px] bg-white"></div>
      )}
      {isOpen && (
        <div className="bg-blue-950 text-white px-6 py-4 flex flex-col items-end gap-4 md:hidden text-[25px] font-medium ">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Create Resume
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:underline  text-white"
          >
            Training Enrollment
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Partner with us
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Contact Us
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center gap-3 border-2 border-sky-700 text-sky-700 font-medium px-4 py-1 rounded-full hover:bg-sky-50 transition"
          >
            <span>Register Now</span>
            <div className="bg-white rounded-full p-2 shadow-sm">
              <MdArrowOutward size={18} />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default NavSection;

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className=" h-[96px] glass-nav md:backdrop-blur-xl px-8 text-gray-300 max-w-[1200px] flex justify-between items-center mx-auto md:mx-auto mt-1 md:mt-5 "
      id="navbar"
    >
      <h1 className="text-xl font-bold">Atul kumar kashyap</h1>
      <ul className="hidden md:flex gap-6 text-xl ">
        <li onClick={() => {
          handleNav();
        }}  className="cursor-pointer hover:bg-black hover:text-yellow-400 transition-all duration-300 px-4 py-2 rounded-3xl">
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer  hover:bg-black hover:text-yellow-400 transition-all duration-300 px-4 py-2 rounded-3xl">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer  hover:bg-black hover:text-yellow-400 transition-all duration-300 px-4 py-2 rounded-3xl">
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            Work
          </Link>
        </li>
        <li className="cursor-pointer  hover:bg-black hover:text-yellow-400 transition-all duration-300 px-4 py-2 rounded-3xl">
          <Link to="skill" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer  hover:bg-black hover:text-yellow-400 transition-all duration-300 px-4 py-2 rounded-3xl">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            contact
          </Link>
        </li>
      </ul>

      <div
        className="block md:hidden text-gray-300  right-10 top-10 z-40"
        onClick={() => {
          handleNav();
        }}
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-gray-300 z-30 absolute  left-0 top-0  w-full bg-[#232323] rounded-xl ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-8 text-4xl ml-20 z-10">
          <li className="p-2">
            <Link to="home" spy={true} smooth={true} offset={5} duration={500}>
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="p-2">
            <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
              Work
            </Link>
          </li>
          <li className="p-2">
            <Link to="skill" spy={true} smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li className="p-2">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

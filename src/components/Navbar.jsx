import React, { useState } from "react";

import { FaCampground } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNavbar = () => {
    setNav(!nav);
  };

  return (
    <div
      className=" fixed w-full min-h-[50px] flex justify-between items-center  z-10 text-white  bg-gray-800"
      id="navbar"
    >
      <ul className="hidden sm:flex px-4">
        <li className="hover:cursor-pointer">
          <Link
            activeClass="active"
            to="navbar"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link
            activeClass="active"
            to="landing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link
            activeClass="active"
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Gallery
          </Link>
        </li>
        <li className="hover:cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-between font-bold text-md">
        <FaCampground className="mt-2.5 mx-3" />
        <p className="lg:mr-4 mt-2">CampGrounds</p>
        <button className="py-1 px-3 mt-2 border bg-transparent hover:bg-gray-700 text-white rounded-lg ml-3 text-xs lg:md lg:mr-3">signin</button>
      </div>
      <div className="sm:hidden z-10">
        <VscThreeBars
          className="mr-4 cursor-pointer"
          size={20}
          onClick={handleNavbar}
        />
      </div>

      {/* mobile view */}
      <div
        onClick={handleNavbar}
        className={
          nav
            ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black w-full`
            : ` absolute top-0 left-[-100%] ease-in duration-500 `
        }
      >
        <ul className="w-full h-full text-center  ">
          <li
            className="text-2xl py-8 hover:cursor-pointer"
            onClick={handleNavbar}
          >
            <Link
              activeClass="active"
              to="navbar"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p onClick={handleNavbar}>Home</p>
            </Link>
          </li>
          <li className="text-2xl py-8 hover:cursor-pointer">
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p onClick={handleNavbar}>Gallery</p>
            </Link>
          </li>
          <li
            className="text-2xl py-8 hover:cursor-pointer"
            onClick={handleNavbar}
          >
            <Link
              activeClass="gallery"
              to="landing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p onClick={handleNavbar}>About</p>
            </Link>
          </li>
          <li
            className="text-2xl py-8 hover:cursor-pointer"
            onClick={handleNavbar}
          >
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <p onClick={handleNavbar}>Conact</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

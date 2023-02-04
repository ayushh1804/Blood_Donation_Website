import React from "react";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div
      className=" flex items-center justify-around w-max-[1140px] m-auto w-full bg-blue-400 p-8 bottom-0 text-gray-700"
      id="footer"
    >
      <div className="text-sm font-bold ">
        <p className="my-4 hover:cursor-pointer">
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
        </p>
        <p className="hover:cursor-pointer">
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
        </p>
      </div>
      <div className="text-sm font-bold">
        <p className="text-black">&copy; Copyright 2023</p>
      </div>
      <div className="text-sm font-bold">
        <p className="my-4 hover:cursor-pointer">
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
        </p>
        <p className="hover:cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contacts
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;

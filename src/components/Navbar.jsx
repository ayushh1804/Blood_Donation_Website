import React,{useState} from "react";
import {AiOutlineInstagram} from "react-icons/ai"
import {FaCampground} from "react-icons/fa";
import {VscThreeBars} from "react-icons/vsc"
import navbarimg from "./assets/navbar.jpg"
import { Link, animateScroll as scroll } from "react-scroll"
const Navbar = () => {

  const [nav,setNav] = useState(false);

const handleNavbar = () => {
  setNav(!nav);
}


  return (
    <div className=" fixed w-full min-h-[50px] flex justify-between items-center  z-10 text-white bg-[#7ab9d6]  " id="navbar" >
      <ul className="hidden sm:flex px-4">
        <li  className="hover:cursor-pointer"><Link activeClass="active"
    to="navbar"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Home</Link></li>
        <li className="hover:cursor-pointer"><Link activeClass="active"
    to="landing"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>About</Link></li>
        <li className="hover:cursor-pointer"><Link activeClass="active"
    to="gallery"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}>Gallery</Link></li>
        <li className="hover:cursor-pointer"><Link to="contact">Contact</Link></li>
      </ul>
      <div className="flex justify-between font-bold text-md">
      <FaCampground className="mt-1 mx-3" />
      <p className="lg:mr-4">CampGrounds</p>
      </div>
      <div className="sm:hidden z-10"><VscThreeBars className="mr-4 cursor-pointer" size={20} onClick={handleNavbar}/></div>

    {/* mobile view */}
    <div onClick={handleNavbar} className={nav? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen bg-black w-full` : ` absolute top-0 left-[-100%] ease-in duration-500 `}>
      <ul className="w-full h-full text-center pt-12 ">
        <li className="text-2xl py-8"><a href="">Home</a></li>
        <li className="text-2xl py-8"><a href="">Gallery</a></li>
        <li className="text-2xl py-8"><a href="">Deals</a></li>
        <li className="text-2xl py-8"><a href="">Comtact</a></li>
      </ul>
    </div>
    </div>
  )
   
  };
export default Navbar;

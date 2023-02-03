import React,{useState} from "react";
import {AiOutlineInstagram} from "react-icons/ai"
import {FaCampground} from "react-icons/fa";
import {VscThreeBars} from "react-icons/vsc"
import navbarimg from "./assets/navbar.jpg"
const Navbar = () => {

  const [nav,setNav] = useState(false);

const handleNavbar = () => {
  setNav(!nav);
}


  return (
    <div className=" w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-[#7ab9d6]" >
      <ul className="hidden sm:flex px-4">
        <li><a href="">Home</a></li>
        <li><a href=""></a>About</li>
        <li><a href="">Deals</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div className="flex justify-between font-bold text-md">
      <FaCampground className="mt-1 mx-2" />
      <p>CampGrounds</p>
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

import React,{useState} from "react";
import activityimg from "./assets/activity.jpg";
import activityimg1 from "./assets/snowcamp.jpg";
import activityimg2 from "./assets/desertcamp.jpg";
import activityimg3 from "./assets/forestcamp.jpg";
const Activities = () => {

  const [datk,setDark] = useState(" ");
  // const darkModeHandler =() => {
  //   setDark(!dark);
  // }
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]" id="activities">
      <div className=" relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-xl font-bold">Snow Camping</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg"  src={activityimg1} alt="" />
      </div>
      
      
        <div className=" relative p-4">
            <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-xl font-bold  ">Desert Camping</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={activityimg2} alt="" />
        </div>
      
      <div className=" relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tect-white text-xl font-bold text-white">Forest Camping</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={activityimg3} alt="" />
      </div>
    </div>
  );
};

export default Activities;

import React from "react";
import activityimg from "./assets/activity.jpg";
const Activities = () => {
  return (
    <div className="max-w-[1140px] m-auto w-full md:flex mt-[-75px]" id="activities">
      <div className=" relative p-4">
        <h3 className="">Resort</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg"  src={activityimg} alt="" />
      </div>
      
      
        <div className=" relative p-4">
            <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold  ">Resort</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={activityimg} alt="" />
        </div>
      
      <div className=" relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] tect-white text-2xl font-bold text-white">Resort</h3>
        <img className="w-full h-full object-cover relative border-4 border-white shadow-lg" src={activityimg} alt="" />
      </div>
    </div>
  );
};

export default Activities;

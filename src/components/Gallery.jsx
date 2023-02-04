import React from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full py-16 px-4 ">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={img1} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img2} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img3} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img4} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

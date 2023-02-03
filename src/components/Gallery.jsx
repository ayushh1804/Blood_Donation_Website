import React from "react";
import galleryimg from "./assets/gallery.jpg";
const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full py-16 px-4">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2">
          <img className="w-full h-full object-cover" src={galleryimg} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={galleryimg} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={galleryimg} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={galleryimg} alt="" />
        </div>
        <div>
          <img className="w-full h-full object-cover" src={galleryimg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

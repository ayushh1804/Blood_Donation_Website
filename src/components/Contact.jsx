import React from "react";
import contactimg from "./assets/gallery.jpg";
const Contact = () => {
  return (
    <div id="contact" className="max-w-[1140px] m-auto w-full py-16 p-4">
      <h2 className="text-center text-gray-700 ">send us a message</h2>
      <p className="text-center text-gray-700 py-2">We're waiting </p>
      <div className="grid md:grid-cols-2">
        <img
          src={contactimg}
          alt=""
          className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] "
        />
        <form>
          <div className="grid grid-cols-2">
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="FirstName"
              id=""
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="LastName"
              id=""
            />
            <input
              className="border m-2 p-2"
              type="text"
              placeholder="Email"
              id=""
            />
            <input
              className="border m-2 p-2"
              type="tel"
              placeholder="Phone"
              id=""
            />
            <input
              className="border col-span-2 m-2 p-2"
              type="text"
              placeholder="Address"
              id=""
            />
            <textarea
              className="border col-span-2 m-2 p-2"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="col-span-2 m-2 p-2 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const Book = () => {
  return (
    <div id="deals" className="max-w-[1140px] m-auto w-full p-4" id="book">
      <form className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label>Destination </label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option>Solang Valley, Manali</option>
            <option>Tso Moriri Lake, Ladakh</option>
            <option>Camp Desert, Pushkar</option>
            <option>Coorg Planter’s Camp, Coorg</option>
            
          </select>
        </div>
        
          <div className="flex w-full">
            <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
              <label>Check in</label>
              <input className="border rounded-md p-2 " type="date" />
            </div>
          
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>check out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className=" flex justify-center ">Search</label>
          <button className="px-4 py-2 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white">Rates and Availability</button>
        </div>
      </form>
    </div>
  );
};

export default Book;

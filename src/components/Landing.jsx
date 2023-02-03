import React from 'react'
import navbarimg from "./assets/landingimg.jpg";
const Landing = () => {
  return (
   <div className='w-full h-[90vh] bg-[#16181D]' id="landing" >
    <img src={navbarimg} alt="" className='w-full h-full object-cover' />
    <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-white p-4'>
        <h1 className='font-bold text-3xl mb-8'>Create Your OUTDOOR Adventure</h1>
        
        <p>Spending time in open air, gazing out at stars and taking in every bit of the tranquillity that comes with being so close to nature is the joy of camping.</p>
    </div>
    </div>
   </div>
  )
}

export default Landing
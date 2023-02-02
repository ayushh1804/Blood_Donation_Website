import React from 'react'
import logo from "./assets/navbar.jpg";
const Landing = () => {
  return (
   <div className='w-full h-[90vh]'>
    <img src={logo} alt="" className='w-full h-full object-cover' />
    <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-white p-4'>
        <h1 className='font-bold text-4xl'>Find your special trip</h1>
        <h2 className='text-4xl py-4 italic'>with weekaway</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloremque modi eum! Veniam ea non neque animi repellat qui voluptates laboriosam vitae possimus voluptatem natus, eum voluptatum quae magnam, dolor quisquam repellendus officiis obcaecati incidunt accusantium quod accusamus blanditiis rem cum. Corporis, eveniet quis expedita odit necessitatibus dolores molestiae aliquam.</p>
    </div>
    </div>
   </div>
  )
}

export default Landing
import React from 'react'

const Footer = () => {
  return (
    <div className=' flex items-center justify-around w-max-[1140px] m-auto w-full bg-blue-400 p-8 bottom-0 text-gray-700'>
        <div className='text-sm font-bold '>
            <p className='my-4'>Home</p>
            <p>Gallery</p>
            
        </div>
        <div className='text-sm font-bold'>
            <p className='text-black'>&copy; Copyright 2023</p>
        </div>
        <div className='text-sm font-bold'>
            <p className='my-4'>Deals</p>
            <p>Contacts</p>
        </div>
    </div>
  )
}

export default Footer
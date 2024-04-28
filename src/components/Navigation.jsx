import React from 'react'
import logo from '../assets/iconpng.png'

function navigation() {
  return (
    <>
      <div className='flex relative items-center py-5 px-[100px] z-10 font-inter'>
        <div className=''>
          <img src={logo} alt="logo" className='h-auto w-[100px]'/>
        </div>
        <div className='mx-5 text-black'>
          <a href="" className=' mx-5 text-[15px] '>Home</a>
          <a href="" className='mx-5 text-[15px] '>About Cybershield</a>
          <a href="" className='mx-5 text-[15px] '>Contact</a>
        </div>
        <div className='absolute right-[100px] text-white flex gap-2'>
          <button className='bg-black py-2 px-6 rounded-md text-[14px]'>Login</button>
          <button className='bg-black py-2 px-6 rounded-md text-[14px]'>Register</button>
        </div>
      </div>
    </>
  )
}

export default navigation
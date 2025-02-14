import React from 'react'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'

const NavBar = () => {
  return (
    <div className="flex flex-row h-[4.75rem] w-3/4 bg-[#05252C] bg-opacity-[40%] rounded-[1.5rem] bg-clip-padding backdrop-filter backdrop-blur-sm border border-[#197686] fixed z-[10000] items-center py-[0.75rem] px-[1rem]">
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 grid-rows-1 place-content-stretch items-center">
        <a href="#" className='mr-auto'>
          <img src="/logo.svg" alt="logo" className='h-full w-auto' />
        </a>
        <div className="hidden lg:flex flex-row text-[1rem] text-[#fff] gap-6 text-center mx-auto">
          <a href="#" className='hover:text-[#B3B3B3]'>Events</a>
          <a href="#" className='hover:text-[#B3B3B3]'>My Tickets</a>
          <a href="#" className='hover:text-[#B3B3B3]'>About Project</a>
        </div>
        <a href="#" className='ml-auto'>
          <button className='inline-flex px-[1.5rem] h-[3.25rem] text-[#0A0C11] hover:text-white bg-white hover:bg-[#24A0B5] justify-center items-center rounded-xl border border-[#D9D9D9] gap-1 text-[0.75rem] lg:text-[1rem] font-extrabold group transition-all duration-300 navBtn'>
            MY TICKETS
            <LiaLongArrowAltRightSolid className='group-hover:-rotate-45' />
          </button>
        </a>
      </div>
    </div>
  )
}

export default NavBar
import React from 'react'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'

const NavBar = () => {
  return (
    <
      div
      className="flex flex-row h-[4.75rem] w-3/4 bg-[#05252C] bg-opacity-[40%] rounded-[1.5rem] bg-clip-padding backdrop-filter backdrop-blur-sm border border-[#197686] fixed z-[10000] items-center py-[0.75rem] px-[1rem]">
      <div className="grid grid-cols-3 grid-rows-1 items-center gap-12">
        <a href="#" className='mr-auto'>
          <img src="/logo.svg" alt="logo" className='h-full w-auto' />
        </a>
        <div className="flex flex-row text-[1.125rem] text-[#B3B3B3] gap-6 text-center mx-auto">
          <a href="#" className='hover:text-[#FFF]'>Events</a>
          <a href="#" className='hover:text-[#FFF]'>My Tickets</a>
          <a href="#" className='hover:text-[#FFF]'>About Project</a>
        </div>
        <a href="#" className='ml-auto'>
          <button className='inline-flex px-[1.5rem] h-[3.25rem] text-[#0A0C11] hover:text-white bg-white hover:bg-[#24A0B5] justify-center items-center rounded-xl border border-[#D9D9D9] gap-1 text-[1rem] group transition-all duration-300'>
            MY TICKETS
            <LiaLongArrowAltRightSolid className='group-hover:-rotate-45' />
          </button>
        </a>
      </div>

    </div>
  )
}

export default NavBar
import React from 'react'
import { VscCloudDownload } from 'react-icons/vsc'
import { FiMail } from 'react-icons/fi'
import { RxAvatar } from "react-icons/rx"

const AttendeeDetails = ({ onBack, onSubmit }) => {
  return (
    <div className='w-[43.75rem] h-max-content bg-[#041E23] border border-[#0E464F] rounded-[2rem] mt-[8rem] text-white p-[3rem]'>
      <div className="flex flex-row w-full items-center mb-2">
        <div className="text-[2rem] pageTitle">Attendee Details</div>
        <div className="text-[1rem] ml-auto">Step 2/3</div>
      </div>
      <div className="w-full h-[0.25rem] bg-[#0E464F] relative rounded-full mb-[2rem]">
        <div className="absolute h-full rounded-full bg-[#24a0b5] w-2/3 "></div>
      </div>

      {/* Upload photo container */}
      <div className="w-full h-max-content bg-[#08252B] border border-[#0E464F] rounded-[2rem] p-[1.5rem]">
        <div className="flex flex-col mb-[2rem] h-[20.5rem] w-full p-[1.5rem] border border-[#07373F] rounded-2xl gap-4 relative">
          <p className='text-[1rem] mb-auto font-normal'>Upload Profile Photo</p>
          <div className="w-full bg-black/20 h-[12.5rem] -translate-y-[3%]"></div>
          <a href="">
            <div className="flex flex-col absolute border-[4px] border-[#24A0B5]/50 w-[15rem] h-[15rem] rounded-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-[43%] bg-[#0E464F] text-[#fafafa] justify-center items-center gap-3">
              <VscCloudDownload size={32} />
              <p className="text-center text-[1rem] font-normal max-w-48">Drag & drop or click to upload</p>
            </div>
          </a>
        </div>

        <div className="w-full h-[0.25rem] bg-[#0E464F] rounded-full mb-[2rem]"></div>

        <div className="mb-[2rem] flex flex-col gap-4">
          <label htmlFor="email">Enter your name</label>
          <div className="relative">
            <input type="email" name="email" id="email" className="w-full h-[3rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4 pl-12 placeholder:text-white"
              placeholder="Gabriel Isaac"
            />
            <RxAvatar
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
              size={20}
            />
          </div>
        </div>

        <div className="mb-[2rem] flex flex-col gap-4">
          <label htmlFor="email">Enter your email *</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full h-[3rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4 pl-12 placeholder:text-white"
              placeholder="hello@gabrielisaac.co"
            />
            <FiMail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-none"
              size={20}
            />
          </div>
        </div>

        <div className="mb-[2rem] flex flex-col gap-4">
          <label htmlFor="comment">Special request?</label>
          <textarea name="comment" id="comment" cols="30" className='w-full h-[7.94rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4 placeholder:text-white' placeholder="Enter your request here..."></textarea>
        </div>

        <div className="flex flex-row gap-[1.5rem] w-full">
          <button
            onClick={onBack}
            className='w-full h-[3.25rem] hover:bg-[#24A0B5]/20 justify-center rounded-xl border border-[#24A0B5] text-[#24A0B5] text-[1rem] text-center transition-all duration-300'
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            className='w-full h-[3.25rem] bg-[#24A0B5] justify-center rounded-xl border border-[#24A0B5] hover:bg-opacity-80 text-white text-[1rem] text-center transition-all duration-300'
          >
            Get My Free Ticket
          </button>
        </div>
      </div>

    </div>
  )
}

export default AttendeeDetails
import React from 'react'

const SelectTicket = () => {
  return (
    <div className='w-[43.75rem] h-max-content bg-[#041E23] border border-[#0E464F] rounded-[2rem] mt-[8rem] text-white p-[3rem]'>
      <div className="flex flex-row w-full items-center mb-2">
        <div className="text-[2rem] pageTitle">Ticket Selection</div>
        <div className="text-[1rem] ml-auto">Step 1/3</div>
      </div>
      <div className="w-full h-[0.25rem] bg-[#0E464F] relative rounded-full mb-[2rem]">
        <div className="absolute h-full rounded-full bg-[#24a0b5] w-1/3 "></div>
      </div>
      <div className="w-full h-max-content bg-[#08252B] border border-[#0E464F] rounded-[2rem] p-[1.5rem]">
        <div className="flex flex-col mb-[2rem] h-[12.5rem] w-full p-[1.5rem] border border-[#07373F] rounded-2xl text-center justify-center gap-4">
          <p className="text-[3.875rem] eventTitle">TechEmber Fest ”25</p>
          <p className="max-w-[21.25rem] text-[1rem] mx-auto">Join us for an unforgettable experience at TechEmber! Secure your spot now.</p>
          <div className="inline-flex gap-4 text-center mx-auto">
            <p>📍 Abuja, NG</p>
            <p>||</p>
            <p>March 15, 2025 | 7:00 PM</p>
          </div>
        </div>

        <div className="w-full h-[0.25rem] bg-[#0E464F] rounded-full mb-[2rem]"></div>

        <div className="flex flex-col gap-4">
          <div className="text-[1rem]">Select Ticket Type:</div>
          <div className="grid grid-cols-3 grid-row-1 mb-[2rem] h-[8.875rem] w-full p-[1rem] border border-[#07373F] rounded-2xl gap-6">
            <a href="#">
              <div className="h-[6.875rem] w-full border border-[#197686] bg-transparent hover:bg-[#2C545B] selection:bg-[#12464E] rounded-xl transition-colors duration-200 p-[0.75rem]">
                <p className='text-[1.5rem] text-white font-semibold'>
                  Free
                </p>
                <div>
                  <p className="text-[0.9rem] text-[#fafafa] mt-2">REGULAR ACCESS</p>
                  <p className="text-[0.875rem] text-[#D9D9D9]">20/52</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="h-[6.875rem] w-full border border-[#197686] bg-transparent hover:bg-[#2C545B] selection:bg-[#12464E] rounded-xl transition-colors duration-200 p-[0.75rem]">
                <p className='text-[1.5rem] text-white font-semibold'>
                  $150
                </p>
                <div>
                  <p className="text-[0.9rem] text-[#fafafa] mt-2">VVIP ACCESS</p>
                  <p className="text-[0.875rem] text-[#D9D9D9]">20/52</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div className="h-[6.875rem] w-full border border-[#197686] bg-transparent hover:bg-[#2C545B] selection:bg-[#12464E] rounded-xl transition-colors duration-200 p-[0.75rem]">
                <p className='text-[1.5rem] text-white font-semibold'>
                  $250
                </p>
                <div>
                  <p className="text-[0.9rem] text-[#fafafa] mt-2">VIP ACCESS</p>
                  <p className="text-[0.875rem] text-[#D9D9D9]">20/52</p>
                </div>
              </div>
            </a>

          </div>
        </div>

        <div className="mb-[2rem] flex flex-col gap-4">
          <label htmlFor="numOfTicket">Number of Tickets:</label>
          <input type="number" name="numOfTicket" id="numOfTicket" className='w-full h-[3rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4' />
        </div>

        <div className="flex flex-row gap-[1.5rem] w-full">
          <a href="#" className='w-full'>
            <button className='w-full h-[3.25rem] hover:bg-[#24A0B5]/20 justify-center rounded-xl border border-[#24A0B5] text-[#24A0B5] text-[1rem] text-center transition-all duration-300'>
              Back
            </button>
          </a>
          <a href="#" className='w-full'>
            <button className='w-full h-[3.25rem] bg-[#24A0B5] justify-center rounded-xl border border-[#24A0B5] hover:bg-opacity-80 text-white text-[1rem] text-center transition-all duration-300'>
              Get My Free Ticket
            </button>
          </a>
        </div>
      </div>

    </div>
  )
}

export default SelectTicket
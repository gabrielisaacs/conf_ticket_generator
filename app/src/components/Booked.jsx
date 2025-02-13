import React from 'react'

const Booked = ({ onBookAnother }) => {
  return (
    <div className='w-[43.75rem] h-max-content bg-[#041E23] border border-[#0E464F] rounded-[2rem] mt-[8rem] text-white p-[3rem]'>
      <div className="flex flex-row w-full items-center mb-2">
        <div className="text-[2rem] pageTitle">Ready</div>
        <div className="text-[1rem] ml-auto">Step 3/3</div>
      </div>
      <div className="w-full h-[0.25rem] bg-[#0E464F] relative rounded-full mb-[2rem]">
        <div className=" h-full rounded-full bg-[#24a0b5] w-full "></div>
      </div>
      <div className="w-full h-max-content bg-[#08252B] border border-[#0E464F] rounded-[2rem] p-[1.45rem]">

        <div className="ticketContainer w-[18.75rem] h-[37.5rem] p-[1rem] mx-auto my-8">
          <div className="flex flex-col mb-[2rem] h-[27.875rem] w-full py-[1.65rem] px-4 border border-[#24A0B5] rounded-2xl text-center justify-center gap-4">
            <div className="flex flex-col w-full justify-center gap-4">
              <div className="flex flex-col w-full justify-center gap-2">
                <p className="text-[2.125rem] eventTitle mb-2 mt-4">TechEmber Fest "25</p>
                <div className="flex flex-col gap-1 text-center mx-auto text-[0.625rem]">
                  <p>📍 Novare Mall, Wuse Zone 5, Abuja</p>
                  <p>🗓️ March 15, 2025 | 7:00 PM</p>
                </div>
              </div>
              <div className="">
                <div className="flex border-[4px] border-[#24A0B5]/50 w-[8.75rem] h-[8.75rem] rounded-2xl bg-[#0E464F] mx-auto">
                </div>
              </div>
              <div className="w-full bg-[#08343C] border border-[#133D44] rounded-md p-2 text-[0.65rem] text-left">
                {/* User Info Section */}
                <div className="flex justify-between divide-x divide-[#133D44]">
                  <div className="w-[6.75rem] h-[2.8125rem]">
                    <p className="text-[#D9D9D9]/60">Enter your name</p>
                    <p className="text-white font-bold">Avi Chukwu</p>
                  </div>
                  <div className="w-[6.75rem] h-[2.8125rem] pl-2">
                    <p className="text-[#D9D9D9]/60">Enter your email *</p>
                    <p className="text-white font-bold">User@email.com</p>
                  </div>
                </div>

                {/* Ticket Info Section */}
                <div className="flex justify-between divide-x divide-[#133D44]">
                  <div className="w-[6.75rem] h-[2.8125rem] border-t border-[#133D44] pt-2">
                    <p className="text-[#D9D9D9]/60">Ticket Type:</p>
                    <p className="text-white">VIP</p>
                  </div>
                  <div className="w-[6.75rem] h-[2.8125rem] pl-2 border-t border-l border-[#133D44] pt-2">
                    <p className="text-[#D9D9D9]/60">Ticket for:</p>
                    <p className="text-white">1</p>
                  </div>
                </div>

                {/* Special Request */}
                <div className='w-full h-[4.0625] border-t border-[#133D44] pt-2'>
                  <p className="text-[#D9D9D9]/60">Special request?</p>
                  <p className="text-white max-h-[3rem] overflow-hidden">
                    Nil? Or the user's story they write in there gets this whole space, Max of three rows.
                  </p>
                </div>
              </div>

            </div>

          </div>
          <div className="flex w-full justify-center translate-y-5">
            <img src="/barcode.svg" alt="barcode" />
          </div>
        </div>

        <div className="flex flex-row gap-[1.5rem] w-full">
          <a href="#" className='w-full'>
            <button
              onClick={onBookAnother}
              className='w-full h-[3.25rem] hover:bg-[#24A0B5]/20 justify-center rounded-xl border border-[#24A0B5] text-[#24A0B5] text-[1rem] text-center transition-all duration-300'
            >
              Book Another Ticket
            </button>
          </a>
          <a href="#" className='w-full'>
            <button className='w-full h-[3.25rem] bg-[#24A0B5] justify-center rounded-xl border border-[#24A0B5] hover:bg-opacity-80 text-white text-[1rem] text-center transition-all duration-300'>
              Download Ticket
            </button>
          </a>
        </div>
      </div>

    </div >
  )
}

export default Booked
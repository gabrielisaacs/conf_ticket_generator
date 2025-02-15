import React, { useRef } from 'react';
import { useTicket } from '../context/TicketContext';
import html2canvas from 'html2canvas';

const TicketSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
    <g opacity="0.5">
      <path d="M242.773 553.368L242.912 553.274C252.397 546.764 264.859 545.677 275.339 550.461L300 562.303V600H0V562.303L24.6614 550.461C35.1408 545.677 47.603 546.764 57.0877 553.274L57.2267 553.368C68.6922 561.331 84.5352 559.338 93.75 548.876V548.876C102.965 538.414 118.808 536.421 130.273 544.384L130.412 544.478C139.897 550.988 152.359 552.075 162.839 547.291L163.455 546.991C173.935 542.207 186.397 543.294 195.881 549.804L196.02 549.898C207.486 557.861 223.329 555.868 232.544 545.406V545.406C235.767 541.63 239.993 538.902 242.773 553.368Z" fill="url(#paint0_linear_422_4563)" />
      <path d="M242.773 46.6321L242.912 46.7264C252.397 53.2362 264.859 54.3227 275.339 49.5387L300 37.697V0H0V37.697L24.6614 49.5387C35.1408 54.3227 47.603 53.2362 57.0877 46.7264L57.2267 46.6321C68.6922 38.6687 84.5352 40.6619 93.75 51.1241V51.1241C102.965 61.5863 118.808 63.5795 130.273 55.6161L130.412 55.5218C139.897 49.012 152.359 47.9255 162.839 52.7095L163.455 53.0092C173.935 57.7932 186.397 56.7067 195.881 50.1969L196.02 50.1026C207.486 42.1392 223.329 44.1324 232.544 54.5946V54.5946C235.767 58.3697 239.993 61.0981 242.773 46.6321Z" fill="url(#paint1_linear_422_4563)" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_422_4563" x1="150" y1="536" x2="150" y2="600" gradientUnits="userSpaceOnUse">
        <stop stopColor="#24A0B5" stopOpacity="0" />
        <stop offset="1" stopColor="#24A0B5" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="paint1_linear_422_4563" x1="150" y1="64" x2="150" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#24A0B5" stopOpacity="0" />
        <stop offset="1" stopColor="#24A0B5" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
);

const Booked = ({ onBookAnother }) => {
  const { ticketData } = useTicket();
  const ticketRef = useRef(null);

  const formatSpecialRequest = (request) => {
    if (!request) return "Nil";
    return request.length > 120 ? `${request.substring(0, 120)}...` : request;
  };

  const downloadTicket = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        backgroundColor: '#041E23',
        logging: false,
        useCORS: true,
        allowTaint: true
      });

      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = `TechEmber-Ticket-${ticketData.fullName || 'Ticket'}.png`;
      link.href = image;
      link.click();
    } catch (error) {
      console.error('Error downloading ticket:', error);
    }
  };

  return (
    <div className='w-[90%] md:w-[80%] lg:w-[43.75rem] h-max-content bg-[#041E23] border border-[#0E464F] rounded-2xl lg:rounded-[2rem] mt-[6rem] lg:mt-[8rem] mb-4 lg:mb-16 text-white p-4 md:p-6 lg:p-[3rem]'>
      <div className="flex flex-col sm:flex-row w-full mb-2 gap-2">
        <div className="text-2xl lg:text-[2rem] pageTitle">Ready</div>
        <div className="text-sm lg:text-[1rem] ml-0 lg:ml-auto">Step 3/3</div>
      </div>
      <div className="w-full h-[0.25rem] bg-[#0E464F] relative rounded-full mb-4 lg:mb-[2rem]">
        <div className="h-full rounded-full bg-[#24a0b5] w-full"></div>
      </div>
      <div className="w-full h-max-content bg-[#08252B] border border-[#0E464F] rounded-xl lg:rounded-[2rem] p-4 lg:p-[1.45rem]">
        {/* Ticket Container with preserved aspect ratio */}
        <div className="relative w-full max-w-[18.75rem] mx-auto my-4 lg:my-8">
          <div ref={ticketRef} className="relative aspect-[300/600] w-full bg-[#041E23] rounded-[2rem] overflow-hidden">
            {/* SVG Background */}
            <TicketSVG />

            {/* Content wrapper */}
            <div className="relative z-10 p-[1rem]">
              <div className="flex flex-col h-[27.875rem] w-full py-[1.65rem] px-4 border border-[#24A0B5] rounded-2xl text-center justify-center gap-4">
                <div className="flex flex-col w-full justify-center gap-4">
                  <div className="flex flex-col w-full justify-center gap-2">
                    <p className="text-2xl sm:text-[2.125rem] eventTitle mb-2 mt-4">TechEmber Fest "25</p>
                    <div className="flex flex-col gap-1 text-center mx-auto text-[0.625rem]">
                      <p>📍 Novare Mall, Wuse Zone 5, Abuja</p>
                      <p>🗓️ March 15, 2025 | 7:00 PM</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex border-[4px] border-[#24A0B5]/50 w-28 h-28 sm:w-[8.75rem] sm:h-[8.75rem] rounded-2xl bg-[#0E464F] mx-auto overflow-hidden">
                      {ticketData.avatarUrl && (
                        <img
                          src={ticketData.avatarUrl}
                          alt="Profile"
                          className="w-full h-full object-cover"
                          crossOrigin="anonymous"
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full bg-[#08343C] border border-[#133D44] rounded-md p-2 text-[0.65rem] text-left">
                    {/* User Info Section */}
                    <div className="flex justify-between divide-x divide-[#133D44]">
                      <div className="w-1/2 sm:w-[6.75rem]">
                        <p className="text-[#D9D9D9]/60">Name</p>
                        <p className="text-white font-bold truncate">{ticketData.fullName || 'N/A'}</p>
                      </div>
                      <div className="w-1/2 sm:w-[6.75rem] pl-2">
                        <p className="text-[#D9D9D9]/60">Email *</p>
                        <p className="text-white font-bold truncate">{ticketData.email || 'N/A'}</p>
                      </div>
                    </div>

                    {/* Ticket Info Section */}
                    <div className="flex justify-between divide-x divide-[#133D44]">
                      <div className="w-1/2 sm:w-[6.75rem] border-t border-[#133D44] pt-2">
                        <p className="text-[#D9D9D9]/60">Ticket Type:</p>
                        <p className="text-white truncate">
                          {ticketData.ticketType ?
                            ticketData.ticketType.toUpperCase() : 'N/A'}
                        </p>
                      </div>
                      <div className="w-1/2 sm:w-[6.75rem] pl-2 border-t border-l border-[#133D44] pt-2">
                        <p className="text-[#D9D9D9]/60">Ticket for:</p>
                        <p className="text-white">{ticketData.numOfTickets || 1}</p>
                      </div>
                    </div>

                    {/* Special Request */}
                    <div className='w-full min-h-[4.0625rem] border-t border-[#133D44] pt-2'>
                      <p className="text-[#D9D9D9]/60">Special request?</p>
                      <p className="text-white max-h-[3rem] overflow-hidden line-clamp-3">
                        {formatSpecialRequest(ticketData.specialRequest)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center -translate-y-4 lg:translate-y-5">
                <img
                  src="/barcode.svg"
                  alt="barcode"
                  className="w-full max-w-[80%] sm:max-w-none"
                  crossOrigin="anonymous"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[1.5rem] w-full mt-8">
          <button
            onClick={onBookAnother}
            className='w-full h-[3.25rem] hover:bg-[#24A0B5]/20 justify-center rounded-xl border border-[#24A0B5] text-[#24A0B5] text-sm lg:text-[1rem] text-center transition-all duration-300'
          >
            Book Another Ticket
          </button>
          <button
            onClick={downloadTicket}
            className='w-full h-[3.25rem] bg-[#24A0B5] justify-center rounded-xl border border-[#24A0B5] hover:bg-opacity-80 text-white text-sm lg:text-[1rem] text-center transition-all duration-300'
          >
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booked;
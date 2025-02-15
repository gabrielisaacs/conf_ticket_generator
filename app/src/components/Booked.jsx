import React, { useRef } from 'react';
import { useTicket } from '../context/TicketContext';
import html2canvas from 'html2canvas';

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
        <div className="relative w-full max-w-[18.75rem] mx-auto my-4 lg:my-8">
          <div ref={ticketRef} className="ticketContainer aspect-[300/600] w-full">
            <div className="absolute inset-0 p-[1rem]">
              <div className="flex flex-col h-[23.875rem] lg:h-[27.875rem] w-full py-3 lg:py-[1.65rem] px-4 border border-[#24A0B5] rounded-2xl text-center justify-center gap-4">
                <div className="flex flex-col w-full justify-center gap-4">
                  <div className="flex flex-col w-full justify-center gap-2">
                    <p className="text-2xl sm:text-[2.125rem] eventTitle mb-0 lg:mb-2 mt-2 lg:mt-4">TechEmber Fest "25</p>
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
                      <div className="w-1/2 sm:w-[6.75rem] border-t border-[#133D44] pt-1 lg:pt-2">
                        <p className="text-[#D9D9D9]/60">Ticket Type:</p>
                        <p className="text-white truncate">
                          {ticketData.ticketType ?
                            ticketData.ticketType.toUpperCase() : 'N/A'}
                        </p>
                      </div>
                      <div className="w-1/2 sm:w-[6.75rem] pl-2 border-t border-l border-[#133D44] pt-1 lg:pt-2">
                        <p className="text-[#D9D9D9]/60">Ticket for:</p>
                        <p className="text-white">{ticketData.numOfTickets || 1}</p>
                      </div>
                    </div>

                    {/* Special Request */}
                    <div className='w-full h-[4.0625rem] border-t border-[#133D44] pt-2'>
                      <p className="text-[#D9D9D9]/60">Special request?</p>
                      <p className="text-white max-h-[3rem] overflow-hidden line-clamp-3">
                        {formatSpecialRequest(ticketData.specialRequest)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center -translate-y-4 lg:-translate-y-5">
                <img
                  src="/barcode.svg"
                  alt="barcode"
                  className="w-[15rem] max-w-[80%] sm:max-w-none"
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
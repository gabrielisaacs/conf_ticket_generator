import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTicket } from '../context/TicketContext';

const SelectTicket = ({ onSelect }) => {
  const { ticketData, setTicketData } = useTicket();
  const [selectedTicket, setSelectedTicket] = useState(ticketData.ticketType || null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({
    defaultValues: {
      numOfTickets: ticketData.numOfTickets || 1
    }
  });

  const tickets = [
    { id: 'free', price: 'Free', type: 'REGULAR ACCESS', available: '20/52', cost: 0 },
    { id: 'vvip', price: '$150', type: 'VVIP ACCESS', available: '20/52', cost: 150 },
    { id: 'vip', price: '$250', type: 'VIP ACCESS', available: '20/52', cost: 250 }
  ];

  const onSubmit = (data) => {
    if (!selectedTicket) return;

    setTicketData({
      ...ticketData,
      ticketType: selectedTicket,
      numOfTickets: parseInt(data.numOfTickets),
      ticketPrice: tickets.find(t => t.id === selectedTicket).price,
      purchaseDate: new Date().toISOString(),
      username: 'gabrielisaacs'
    });

    onSelect();
  };

  return (
    <div className='w-[43.75rem] h-max-content bg-[#041E23] border border-[#0E464F] rounded-[2rem] mt-[8rem] text-white p-[3rem]'>
      <div className="flex flex-row w-full items-center mb-2">
        <div className="text-[2rem] pageTitle">Ticket Selection</div>
        <div className="text-[1rem] ml-auto">Step 1/3</div>
      </div>
      <div className="w-full h-[0.25rem] bg-[#0E464F] relative rounded-full mb-[2rem]">
        <div className="absolute h-full rounded-full bg-[#24a0b5] w-1/3"></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="w-full h-max-content bg-[#08252B] border border-[#0E464F] rounded-[2rem] p-[1.5rem]">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-[#08252b] from-20% via-[#24a0b5]/30 via-50% to-[#08252b] t0-80% flex flex-col mb-[2rem] h-[12.5rem] w-full p-[1.5rem] border border-[#07373F] rounded-2xl text-center justify-center gap-4">
            <p className="text-[3.875rem] eventTitle">TechEmber Fest "25</p>
            <p className="max-w-[21.25rem] text-[1rem] mx-auto">
              Join us for an unforgettable experience at TechEmber! Secure your spot now.
            </p>
            <div className="inline-flex gap-4 text-center mx-auto">
              <p>📍 Abuja, NG</p>
              <p>||</p>
              <p>March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          <div className="w-full h-[0.25rem] bg-[#0E464F] rounded-full mb-[2rem]"></div>

          {/* Selection Section */}
          <div className="flex flex-col gap-4">
            <div className="text-[1rem]">Select Ticket Type: *</div>
            <div className="grid grid-cols-3 grid-row-1 mb-[2rem] h-[8.875rem] w-full p-[1rem] border border-[#07373F] rounded-2xl gap-6">
              {tickets.map((ticket) => (
                <button
                  key={ticket.id}
                  type="button"
                  onClick={() => setSelectedTicket(ticket.id)}
                  className={`h-[6.875rem] w-full border ${selectedTicket === ticket.id
                    ? 'border-[#24A0B5] bg-[#2C545B]'
                    : 'border-[#197686] bg-transparent hover:bg-[#2C545B]'
                    } rounded-xl transition-colors duration-200 p-[0.75rem] text-left`}
                  aria-pressed={selectedTicket === ticket.id}
                >
                  <p className='text-[1.5rem] text-white font-semibold'>
                    {ticket.price}
                  </p>
                  <div>
                    <p className="text-[0.9rem] text-[#fafafa] mt-2">{ticket.type}</p>
                    <p className="text-[0.875rem] text-[#D9D9D9]">{ticket.available}</p>
                  </div>
                </button>
              ))}
            </div>
            {!selectedTicket && (
              <span role="alert" className="text-red-500 text-sm">
                Please select a ticket type
              </span>
            )}
          </div>

          <div className="mb-[2rem] flex flex-col gap-4">
            <label htmlFor="numOfTickets">
              Number of Tickets: *
              {errors.numOfTickets && (
                <span role="alert" className="text-red-500 text-sm ml-2">
                  {errors.numOfTickets.message}
                </span>
              )}
            </label>
            <input
              type="number"
              id="numOfTickets"
              min="1"
              max="10"
              {...register('numOfTickets', {
                required: 'Number of tickets is required',
                min: {
                  value: 1,
                  message: 'Minimum 1 ticket required'
                },
                max: {
                  value: 10,
                  message: 'Maximum 10 tickets allowed'
                }
              })}
              className='w-full h-[3rem] bg-transparent border border-[#0e464f] text-white rounded-xl focus-within:outline-none p-4'
            />
          </div>

          <div className="flex flex-row gap-[1.5rem] w-full">
            <button
              type="button"
              className='w-full h-[3.25rem] hover:bg-[#24A0B5]/20 justify-center rounded-xl border border-[#24A0B5] text-[#24A0B5] text-[1rem] text-center transition-all duration-300'
            >
              Back
            </button>
            <button
              type="submit"
              disabled={!selectedTicket}
              className='w-full h-[3.25rem] bg-[#24A0B5] justify-center rounded-xl border border-[#24A0B5] hover:bg-opacity-80 text-white text-[1rem] text-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {selectedTicket === 'free' ? 'Get My Free Ticket' : 'Continue to Payment'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectTicket;
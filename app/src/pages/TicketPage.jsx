import React from 'react';
import { useNavigate } from 'react-router-dom';
import Booked from '../components/Booked';
import NavBar from '../components/NavBar';

const TicketPage = () => {
  const navigate = useNavigate();

  const handleBookAnother = () => {
    navigate('/');
  };

  return (
    <div className='flex bg-[#02191D] w-full min-h-screen px-16 py-8 justify-center'>
      <NavBar />
      <Booked onBookAnother={handleBookAnother} />
    </div>
  );
};

export default TicketPage;
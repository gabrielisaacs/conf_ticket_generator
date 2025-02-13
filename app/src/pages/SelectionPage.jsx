import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectTicket from '../components/SelectTicket';
import NavBar from '../components/NavBar';

const SelectionPage = () => {
  const navigate = useNavigate();

  const handleTicketSelect = () => {
    navigate('/user-details');
  };

  return (
    <div className='flex bg-[#02191D] w-full min-h-screen px-16 py-8 justify-center'>
      <NavBar />
      <SelectTicket onSelect={handleTicketSelect} />
    </div>
  );
};

export default SelectionPage;
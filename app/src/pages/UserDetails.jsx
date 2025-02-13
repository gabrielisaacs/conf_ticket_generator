import React from 'react';
import { useNavigate } from 'react-router-dom';
import AttendeeDetails from '../components/AttendeeDetails';
import NavBar from '../components/NavBar';

const UserDetailsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = () => {
    navigate('/ticket');
  };

  return (
    <div className='flex bg-[#02191D] w-full min-h-screen px-16 py-8 justify-center'>
      <NavBar />
      <AttendeeDetails onBack={handleBack} onSubmit={handleSubmit} />
    </div>
  );
};

export default UserDetailsPage;
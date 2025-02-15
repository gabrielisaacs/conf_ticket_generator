import React, { createContext, useContext, useState, useEffect } from 'react';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketData, setTicketData] = useState(() => {
    const savedData = localStorage.getItem('ticketData');
    return savedData ? JSON.parse(savedData) : {
      fullName: '',
      email: '',
      avatarUrl: '',
      specialRequest: '',
      ticketType: '',
      numberOfTickets: 1,
      username: 'gabrielisaacs'
    };
  });

  useEffect(() => {
    localStorage.setItem('ticketData', JSON.stringify({
      ...ticketData,
      lastUpdated: new Date().toISOString(),
      username: 'gabrielisaacs'
    }));
  }, [ticketData]);

  return (
    <TicketContext.Provider value={{ ticketData, setTicketData }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);

export default TicketProvider;
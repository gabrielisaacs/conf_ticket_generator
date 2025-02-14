import React, { createContext, useContext, useState, useEffect } from 'react';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketData, setTicketData] = useState({
    fullName: '',
    email: '',
    avatarUrl: '',
    specialRequest: '',
    ticketType: '',
    numberOfTickets: 1
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('ticketData');
    if (savedData) {
      setTicketData(JSON.parse(savedData));
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('ticketData', JSON.stringify(ticketData));
  }, [ticketData]);

  return (
    <TicketContext.Provider value={{ ticketData, setTicketData }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => useContext(TicketContext);
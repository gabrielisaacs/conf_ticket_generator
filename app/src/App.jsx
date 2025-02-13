import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import SelectionPage from './pages/SelectionPage';
import UserDetailsPage from './pages/UserDetails';
import TicketPage from './pages/TicketPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/user-details" element={<UserDetailsPage />} />
        <Route path="/ticket" element={<TicketPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
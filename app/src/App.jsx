import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import SelectTicket from './components/SelectTicket'
import AttendeeDetails from './components/AttendeeDetails'
import Booked from './components/Booked'

const App = () => {
  return (
    <div className='flex bg-[#02191D] w-full min-h-screen px-16 py-8 justify-center'>
      <NavBar />
      {/* <SelectTicket /> */}
      {/* <AttendeeDetails /> */}
      <Booked />

    </div>
  )
}

export default App
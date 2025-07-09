import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Barbers from './pages/Barbers';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barbers" element={<Barbers />} />
        <Route path="/barbers:speciality" element={<Barbers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment" element={<Appointment />} />

      </Routes>
    </div>
  )
}

export default App
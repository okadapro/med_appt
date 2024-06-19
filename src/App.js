import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';

function App() {
    return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
                <Routes>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/booking-consultation" element={<BookingConsultation />} />
                </Routes>
          </BrowserRouter>
         
      </div>
    );
 };
  export default App;
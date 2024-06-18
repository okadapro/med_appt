import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import Landing_Page from './Components/Landing_Page/Landing_Page';

function App() {
    return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
                <Routes>
                </Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
          </BrowserRouter>
         
      </div>
    );
  }
  export default App;
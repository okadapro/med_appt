import './App.css';
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';

function App() {
    return (
      <div className="App">
          <BrowserRouter>
            <Navbar/>
                <Routes>
                </Routes>
              
          </BrowserRouter>
         
      </div>
    );
  }
  export default App;
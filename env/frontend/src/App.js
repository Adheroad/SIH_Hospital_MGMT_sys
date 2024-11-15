// src/App.js
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import SOSMap from './SOSMap'; 
import './Registeration'
import './App.css';
import './Bed'
import Bed from './Bed';
import './Doctor'
import Doctor from './Doctor';
import Registeration from './Registeration';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainindex" element={<ProtectedRoute element={<MainIndex />} />} />
        <Route path="/sos" element={<SOSMap />} /> 
        <Route path="/Bed" element={< Bed />} />
        <Route path="/Doctor" element={< Doctor />} />
        <Route path="/Registeration" element={< Registeration />} />

        
   
      </Routes>
    </div>
  );
}

export default App;

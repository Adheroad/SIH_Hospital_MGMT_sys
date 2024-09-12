import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainIndex from './MainIndex';
import Home from './Home';
import SOSMap from './SOSMap'; 
import Registeration from './Registeration'; 
import './App.css';
import './Bed'
import Bed from './Bed';
import './Doctor'
import Doctor from './Doctor';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainindex" element={<MainIndex />} />
        <Route path="/sos" element={<SOSMap />} /> 
        <Route path="/Bed" element={< Bed />} />
        <Route path="/Doctor" element={< Doctor />} />
        
   
      </Routes>
    </div>
  );
}
export default App;
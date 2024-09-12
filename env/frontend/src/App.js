import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainIndex from './MainIndex';
import Home from './Home'
import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainindex" element={<MainIndex />} />
      </Routes>
    </div>
  );
}

export default App;
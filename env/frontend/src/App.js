import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainIndex from './MainIndex';
import OPDqueue from './OPDqueue';
import Home from './Home'
import './App.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainindex" element={<MainIndex />} />
        <Route path="/OPDqueue" element={<OPDqueue />} />
      </Routes>
    </div>
  );
}

export default App;
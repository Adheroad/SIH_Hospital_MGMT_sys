// src/App.js
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import MainIndex from './MainIndex';
import SOSMap from './components/SOSMap';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sos" element={<SOSMap />} />
          <Route path="/mainindex" element={<ProtectedRoute element={<MainIndex />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

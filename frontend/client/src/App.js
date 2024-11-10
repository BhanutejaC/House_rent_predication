import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Predict from './components/Predict';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Router>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/predict" element={<Predict />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

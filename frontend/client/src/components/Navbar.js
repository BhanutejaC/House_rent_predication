import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          House Rent Predictor
        </Link>
        <div className="space-x-6">
          <Link to="/login" className="text-white hover:text-gray-300 transition duration-200">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-300 transition duration-200">Register</Link>
          <Link to="/predict" className="text-white hover:text-gray-300 transition duration-200">Predict</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

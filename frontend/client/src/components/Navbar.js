// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from storage
    localStorage.removeItem("user"); // Adjust based on your app's storage logic
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          House Rent Predictor
        </Link>
        <div className="space-x-6">
          <Link to="/login" className="text-white hover:text-gray-300 transition duration-200">Login</Link>
          <Link to="/register" className="text-white hover:text-gray-300 transition duration-200">Register</Link>

          {/* Only show Predict for Renter role */}
          {role === 'renter' && (
            <Link to="/renter/predict" className="text-white hover:text-gray-300 transition duration-200">
              Predict
            </Link>
          )}

          {/* Show Logout button when user is logged in */}
          <button onClick={handleLogout} className="text-white hover:text-gray-300 transition duration-200">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

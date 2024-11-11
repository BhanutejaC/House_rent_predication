import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password || !role) {
      setError("All fields are required.");
      return;
    }
    setError(''); // Reset error if validation passes

    try {
      const response = await axios.post('http://localhost:5000/register', { username, password, role });
      setMessage(response.data.message);

      // Clear form fields after successful registration
      setUsername('');
      setPassword('');
      setRole('');

      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Registration failed. Please try again.";
      setMessage('');
      setError(errorMsg);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create an Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="" disabled>Select role</option>
              <option value="renter">Renter</option>
              <option value="landlord">Landlord</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Display messages */}
        {message && <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>}
        {error && <p className="mt-4 text-center text-red-600 font-semibold">{error}</p>}
      </div>
    </div>
  );
}

export default Register;

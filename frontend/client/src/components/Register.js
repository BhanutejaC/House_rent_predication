import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password, role });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.message : "Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full p-4 border" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full p-4 border" />
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full p-4 border">
            <option value="renter">Renter</option>
            <option value="landlord">Landlord</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" className="w-full py-3 bg-green-600 text-white rounded-lg">Register</button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default Register;

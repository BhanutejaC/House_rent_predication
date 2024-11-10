import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.message === 'Login successful') {
        setRole(response.data.role);
      }
      console.log("Login successful:", response.data.message);
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      alert(error.response ? error.response.data.message : "Login failed. Please try again.");
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ease-in-out duration-200"
          >
            Login
          </button>
        </form>
        {role && <p className="mt-4 text-center text-gray-700">Logged in as: {role}</p>}
      </div>
    </div>
  );
}

export default Login;

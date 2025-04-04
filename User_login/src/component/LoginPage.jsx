import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const users = response.data.users;

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));

        navigate('/profile');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Login error: ', err);
      setError('An error occurred while logging in');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 sm:px-8">
      <div className="w-full max-w-sm p-8 space-y-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>

          {error && (
            <div className="text-center text-red-600 text-sm mt-4">
              {error}
            </div>
          )}
        </form>

        <div className="text-center text-sm text-gray-500">
         <p> Don't have an account? <a className="text-indigo-600 hover:text-indigo-800">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


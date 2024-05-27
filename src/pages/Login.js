import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/user/login', { email, password });
      localStorage.setItem('token', response.data.token);
      window.location = '/';
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="app-title">Rentify</div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
}  

export default Login;

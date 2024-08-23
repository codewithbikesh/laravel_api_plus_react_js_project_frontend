// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // To display error messages
  const [loading, setLoading] = useState(false); // To manage loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const loginData = {
      email,
      password,
    };

    setLoading(true); // Start loading when submitting

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.ok) {
        // Handle successful login, store token and navigate to dashboard
        localStorage.setItem('token', data.token);
        console.log('Login successful:', data);
        navigate('/dashboard');
      } else {
        // Handle errors
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // End loading regardless of the result
    }
  };

  return (
    <div className="container flex justify-center items-center min-h-screen min-w-fit bg-[#4e4e62]">
      <div className="form-container max-h-[60vh]">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="forgot">
              <a href="#" rel="noopener noreferrer">Forgot Password?</a>
            </div>
          </div>
          <button className="sign" type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>

        <div className="social-message">
          <div className="line"></div>
          <p className="message">Login with social accounts</p>
          <div className="line"></div>
        </div>

        <div className="social-icons">
          <button aria-label="Log in with Google" className="icon">
            {/* Google SVG icon here */}
          </button>
          <button aria-label="Log in with Twitter" className="icon">
            {/* Twitter SVG icon here */}
          </button>
          <button aria-label="Log in with GitHub" className="icon">
            {/* GitHub SVG icon here */}
          </button>
        </div>

        <p className="signup">
          Don't have an account? 
          <a href="#" rel="noopener noreferrer" className="">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

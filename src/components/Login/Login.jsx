import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
  // State management for form inputs and status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send login request to the API
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        username,
        password
      });

      // Extract token from response
      const token = response.data.token;

      // Store token securely (localStorage in this example)
      localStorage.setItem('authToken', token);

      // Handle successful login (e.g., redirect or update UI)
      console.log('Login successful:', response.data);

      // Example of redirecting to a different page
      // window.location.href = '/dashboard';

    } catch (err) {
      // Handle errors (e.g., display error message)
      console.error('Login failed:', err.response ? err.response.data : err.message);
      setError('Login failed. Please check your username and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex justify-center items-center min-h-screen min-w-fit bg-[#4e4e62]">
      <div className="form-container max-h-[60vh]">
        <p className="title">Login</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={username}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={handleInputChange}
            />
            <div className="forgot">
              <a rel="noopener noreferrer" href="#">Forgot Password?</a>
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
          {/* Social login buttons */}
          <button aria-label="Log in with Google" className="icon">
            {/* Google SVG icon */}
          </button>
          <button aria-label="Log in with Twitter" className="icon">
            {/* Twitter SVG icon */}
          </button>
          <button aria-label="Log in with GitHub" className="icon">
            {/* GitHub SVG icon */}
          </button>
        </div>
        <p className="signup">
          Don't have an account?
          <a rel="noopener noreferrer" href="#" className="">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


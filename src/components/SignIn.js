import React, { useState } from "react";
import logo from '../images/logo.jpeg';
import design from '../images/illustration.png';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'; // SweetAlert for error handling
import '../styles/SignIn.css';
function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }
    
    // Proceed with login
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have logged in successfully!",
    });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-left">
          <a href='/'><img
                      src={logo}
                      alt="Filuick Pay Logo"
                      className="logo"
                      style={{ height: '125px', width: 'auto' }}
                    /></a>
          <div className="form-container">
            <h2>Sign In</h2>
            <p>Please enter your details</p>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                  >
                    {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div className="form-options">
                <label className="check">
                  <input type="checkbox" />
                  Remember for 30 days
                </label>
                <a href="/forgot-password">Forgot Password?</a>
              </div>
              <button type="submit" className="btn-primary">
                Sign In
              </button>
            </form>
            <div className="social-login">
              <p>Or</p>
              <button className="btn-secondary">
                <FcGoogle style={{ color: '#1877F2', marginRight: '28px' }} /> Sign up with Google
              </button>
              <button className="btn-secondary">
                <FaFacebook style={{ color: '#1877F2', marginRight: '10px' }} /> Sign up with Facebook
              </button>
            </div>
            <p className="para">
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
        <div className="login-right">
          <h1>Welcome back!</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque voluptate delectus repudiandae natus consequatur corporis officia debitis!</p>
          <img
            src={design}
            alt="Filuick Pay Illustration"
            className="sales-report"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

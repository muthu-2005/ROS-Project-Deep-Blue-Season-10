import React, { useState } from "react";
import logo from '../images/logo.jpeg';
import design from '../images/illustration.png';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2'; // SweetAlert for error handling
import '../styles/SignUp.css';
import { Link } from 'react-router-dom';


function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  // Password validation
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!fullName || !email || !password || !confirmPassword || !phoneNumber) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please fill in all the fields.",
      });
      return;
    }

    // Check if email is valid
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "The passwords do not match.",
      });
      return;
    }

    // Check if password meets the criteria
    if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password should be at least 6 characters long.",
      });
      return;
    }

    // Proceed with signup
    Swal.fire({
      icon: "success",
      title: "Signup Successful",
      text: "You have signed up successfully!",
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
      <div className="signup-right">
          <h1>Welcome to FleetOptimyze!</h1>
          <p>Join us today to experience seamless transactions and financial management!</p>
          <img
            src={design}
            alt="Filuick Pay Illustration"
            className="sales-report"
          />
        </div>
        <div className="signup-left">
          <a href='/'><img
            src={logo}
            alt="Filuick Pay Logo"
            className="logo"
            style={{ height: '125px', width: 'auto' }}
          /></a>
          <div className="form-container">
            <h2>Create an Account</h2>
            <p>Please fill in your details</p>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
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
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
              <div className="form-group">
                <label>Confirm Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={confirmPasswordVisible ? 'text' : 'password'}
                    placeholder="Confirm your password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                    }}
                  >
                    {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Sign Up
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
  Already have an account? <Link to="/signin">Sign in</Link>
</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default SignUp;

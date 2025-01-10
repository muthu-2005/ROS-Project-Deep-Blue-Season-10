import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import necessary Router components
import { Menu, X } from 'lucide-react';
import '../styles/Home.css'; // Use specific styles for the Home page if needed
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons
import logo from '../images/logo.jpeg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false); // Scroll to Top button visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && comment.trim() !== '') {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  // Handle Scroll event to toggle Scroll to Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to Top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="header-content">
            <div className="logo">
            <a href='/'> <img src={logo} alt="FleetOptimize Logo" className="logo-img" /></a>
  <span className="logo-text">FleetOptimize</span>
</div>

              
              {/* Desktop Navigation */}
              <nav className="nav-desktop" style={{
      textDecoration: 'none'}}>
                <a href="#features" className="nav-link" style={{
      textDecoration: 'none'}}>Features</a>
                <a href="#dashboard" className="nav-link"style={{
      textDecoration: 'none'}}>Dashboard</a>
                <a href="#tracking" className="nav-link"style={{
      textDecoration: 'none'}}>Live Tracking</a>
                <a href="#about-feed" className="nav-link"style={{
      textDecoration: 'none'}}>About Us</a>
              </nav>

              <div className="nav-login">
                {/* Use Link to navigate to SignIn page */}
                <Link to="/signin" style={{
      textDecoration: 'none',
      fontWeight: 'bold',
      letterSpacing: '1px', 
    }} className="btn-primaryy">
  LOGIN
</Link>

              </div>

              {/* Mobile menu button */}
              <div className="menu-button">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="icon-button"
                >
                  {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <div className="nav-mobile-links">
              <a href="#features" className="nav-link">Features</a>
              <a href="#dashboard" className="nav-link">Dashboard</a>
              <a href="#tracking" className="nav-link">Live Tracking</a>
              <a href="#support" className="nav-link">Support</a>
              <Link to="/signin" style={{
      textDecoration: 'none',
      fontWeight: 'bold',
      letterSpacing: '1px', 
    }} className="btn-primaryy">
  LOGIN
</Link>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                <span>Optimize Your Fleet</span>
                <span className="highlight">Routes Intelligently</span>
              </h1>
              <p className="hero-description">
  Streamline your operations with our advanced route optimization system, featuring real-time tracking, intelligent planning, and data-driven insights all within a single platform.
</p>

              <div className="hero-buttons">
                <a href="#" className="btn-primarys" style={{
      textDecoration: 'none'}}>Get Started</a>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Fleet management"
            />
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="features" >
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Features</h2>
              <p className="section-description">Everything you need to manage your fleet</p>
            </div>

            <div className="feature-grid">
              <a href="#analytics" className="feature-item">
                <div className="feature-icon">
                  <img src={logo} alt="Analytics Dashboard" className="feature-image" />
                </div>
                <p className="feature-title">Analytics Dashboard</p>
                <p className="feature-text">
                  Real-time analytics and insights about your fleet's performance and efficiency.
                </p>
              </a>

              <a href="#support" className="feature-item">
                <div className="feature-icon">
                  <img src={logo}  alt="Support System" className="feature-image" />
                </div>
                <p className="feature-title">Support System</p>
                <p className="feature-text">
                  24/7 chatbot support and live agent assistance when you need it.
                </p>
              </a>

              <a href="#tracking" className="feature-item">
                <div className="feature-icon">
                  <img src={logo}  alt="Live Tracking" className="feature-image" />
                </div>
                <p className="feature-title">Live Tracking</p>
                <p className="feature-text">
                  Real-time GPS tracking and route monitoring for your entire fleet.
                </p>
              </a>

              <a href="#monitoring" className="feature-item">
                <div className="feature-icon">
                  <img src={logo}  alt="Vehicle Monitoring" className="feature-image" />
                </div>
                <p className="feature-title">Vehicle Monitoring</p>
                <p className="feature-text">
                  Comprehensive vehicle condition monitoring and maintenance alerts.
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div id="about-feed" className="about-feedback-container">
      <div className="section-header">
  <h2 className="section-title">Our Story & Your Voice</h2>
  <p className="section-description">Learn more about us and share your valuable feedback</p>
</div>

      <div className="container">
        <div className="about-feedback-layout">
          {/* Left Section - About Us */}
          <div className="about-us">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-text">
              FleetOptimize is a leading logistics platform focused on providing fleet
              management solutions. Our goal is to help businesses optimize their routes,
              reduce costs, and ensure efficiency in their fleet operations.
            </p>
            <p className="about-us-text">
              With advanced technology, we offer real-time tracking, analytics, and
              comprehensive vehicle monitoring to ensure that your fleet performs at its
              highest potential.
            </p>
          </div>

          {/* Right Section - Feedback Form */}
          <div className="feedback">
            <h2 className="feedback-title">We Value Your Feedback</h2>
            <p className="feedback-description">Please let us know how we can improve our service.</p>

            {isSubmitted ? (
              <div className="feedback-thank-you">
                <h3>Thank you for your feedback!</h3>
                <p>Your input helps us improve our services.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="feedback-form">
                <div className="feedback-rating">
                  <label htmlFor="rating">Rating:</label>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`rating-star ${rating >= value ? 'filled' : ''}`}
                        onClick={() => setRating(value)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="feedback-comment">
                  <label htmlFor="comment">Comment:</label>
                  <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment here..." required
                  />
                </div>

                <button type="submit" className="btn-primary">Submit Feedback</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>


        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-column">
                <h3 className="footer-title">Solutions</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Route Optimization</a></li>
                  <li><a href="#" className="footer-link">Fleet Management</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Support</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Documentation</a></li>
                  <li><a href="#" className="footer-link">Contact</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Company</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">About</a></li>
                  <li><a href="#" className="footer-link">Careers</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="footer-title">Legal</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Privacy</a></li>
                  <li><a href="#" className="footer-link">Terms</a></li>
                </ul>
              </div>
            </div>

        
            <div className="footer-bottom">
      <div className="footer-social">
        <a href="#" className="social-link"><FaFacebook size={24} /></a>
        <a href="#" className="social-link"><FaTwitter size={24} /></a>
        <a href="#" className="social-link"><FaLinkedin size={24} /></a>
        <a href="#" className="social-link"><FaInstagram size={24} /></a>
      </div>

              <p className="footer-copyright">© 2025 FleetOptimize. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}
      </div>

     
  );
}

export default App;

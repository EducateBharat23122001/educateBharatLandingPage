import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet';
import './PrivacyPolicy.css';
import './Home.css';

const TermsAndConditions = () => {
  const { user, logout } = useAuth();

  return (
    <div className="App">
      <Helmet>
        <title>Terms and Conditions - Educate Bharat</title>
        <meta name="description" content="Educate Bharat's Terms and Conditions governing the use of our platform and services." />
      </Helmet>
      
      {/* Navigation - Same as Home page */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Educate Bharat</h1>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              {user && (
                <div className="user-menu">
                  <span>Welcome, {user.name}</span>
                  <button onClick={logout} className="logout-button">Logout</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Terms and Conditions Content */}
      <section className="privacy-policy">
        <div className="container">
          <h1>Terms and Conditions</h1>
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="policy-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Educate Bharat platform ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of the terms, you may not access the Service.
            </p>
          </div>

          <div className="policy-section">
            <h2>2. User Accounts</h2>
            <p>When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Immediately notifying us of any unauthorized use of your account</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Course Enrollment and Payments</h2>
            <ul>
              <li>Course fees are non-refundable except as required by law or at our discretion</li>
              <li>We reserve the right to modify course prices at any time</li>
              <li>Access to purchased courses is granted for the duration specified at purchase</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for any illegal purpose</li>
              <li>Post or transmit any harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Share your account credentials with others</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>5. Intellectual Property</h2>
            <p>
              All course materials, including videos, texts, and assessments, are the property of Educate Bharat or its content providers and are protected by copyright laws. You may not reproduce, distribute, or create derivative works without our express permission.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Limitation of Liability</h2>
            <p>
              Educate Bharat shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the Service.
            </p>
          </div>

          <div className="policy-section">
            <h2>7. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes through our website or via email. Your continued use of the Service constitutes acceptance of the modified Terms.
            </p>
          </div>

          <div className="policy-section">
            <h2>8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.
            </p>
          </div>

          <div className="policy-section">
            <h2>9. Contact Information</h2>
            <p>
              For any questions about these Terms, please contact us at:
              <br />
              <strong>Email:</strong> educatebharat23122001@gmail.com
              <br />
            </p>
          </div>
        </div>
      </section>

      {/* Footer - Same as Home page */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Educate Bharat</h3>
              <p>Empowering India through education</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Educate Bharat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
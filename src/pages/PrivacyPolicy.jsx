import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet';
import './PrivacyPolicy.css';
import './Home.css';


const PrivacyPolicy = () => {
  const { user, logout } = useAuth();

  return (
    <div className="App">
      <Helmet>
        <title>Privacy Policy - Educate Bharat</title>
        <meta name="description" content="Educate Bharat's Privacy Policy outlining how we collect, use, and protect your information." />
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

      {/* Privacy Policy Content */}
      <section className="privacy-policy">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              Educate Bharat ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          <div className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, payment details when you register or make purchases.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited.</li>
              <li><strong>Student Data:</strong> Academic information, progress reports, and performance data for educational purposes.</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>To provide and maintain our educational services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis for improving our platform</li>
              <li>To monitor usage and detect technical issues</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div className="policy-section">
            <h2>5. Third-Party Services</h2>
            <p>
              We may employ third-party companies to facilitate our services ("Service Providers"), provide services on our behalf, or assist in analyzing how our services are used. These third parties have access to your Personal Data only to perform these tasks and are obligated not to disclose or use it for any other purpose.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Children's Privacy</h2>
            <p>
              Our services are intended for students of all ages, including children under 13. We comply with applicable children's privacy laws and require parental consent for the collection of personal information from children under 13.
            </p>
          </div>

          <div className="policy-section">
            <h2>7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          <div className="policy-section">
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
              <h4>Contact Us</h4>
              <p>educatebharat23122001@gmail.com</p>
              <p>+91 96969 45516</p>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                <li><a href="/deleteaccount">Delete Account</a></li>
           
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

export default PrivacyPolicy;
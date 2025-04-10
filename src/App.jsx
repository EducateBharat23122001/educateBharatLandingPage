import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">Educate Bharat</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transforming Education in India</h1>
            <p>Quality learning for every student, anywhere in India</p>
            <button className="btn-primary">Explore Courses</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Educate Bharat?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>Covering all major subjects aligned with Indian education standards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👩‍🏫</div>
              <h3>Expert Educators</h3>
              <p>Learn from the best teachers across India</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Interactive Learning</h3>
              <p>Engaging videos, quizzes, and assignments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <div className="container">
          <h2>Popular Courses</h2>
          <div className="course-grid">
            <div className="course-card">
              <h3>CBSE Class 10 Complete Package</h3>
              <p>Master all subjects with our comprehensive program</p>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="course-card">
              <h3>JEE Preparation 2024</h3>
              <p>Crash course for engineering aspirants</p>
              <button className="btn-secondary">Learn More</button>
            </div>
            <div className="course-card">
              <h3>NEET Biology Mastery</h3>
              <p>In-depth coverage of biology concepts</p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <li><a href="#home">Home</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>info@educatebharat.com</p>
              <p>+91 9876543210</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Educate Bharat. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
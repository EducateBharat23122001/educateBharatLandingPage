import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Helmet } from 'react-helmet';
import './DeleteAccount.css';
import './Home.css';

const DeleteAccount = () => {
    const { logout, deleteAccountRequest } = useAuth();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        let usertemp = localStorage.getItem('user');
        setUser(JSON.parse(usertemp));
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {

            console.log(user)
            if (email === user?.email) {
                // Call the delete account function from AuthContext
                const result = await deleteAccountRequest();

                if (result.success) {
                    setMessage('Account deletion request has been sent. Please check your email for further instructions.');
                } else {
                    setMessage(result.message || 'An error occurred. Please try again later.');
                }

            } else {
                setMessage('The email entered does not match your account email.');
            }
        } catch (error) {
            console.log(error)
            setMessage('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="App">
            <Helmet>
                <title>Delete Account - Educate Bharat</title>
                <meta name="description" content="Request to delete your Educate Bharat account" />
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

            {/* Delete Account Content */}
            <section className="delete-account">
                <div className="container">
                    <h1>Delete Your Account</h1>
                    <p className="subtitle">
                        We're sorry to see you go. Once you delete your account, all your data will be permanently removed.
                    </p>

                    <div className="delete-form-container">
                        <form onSubmit={handleSubmit} className="delete-form">
                            <div className="form-group">
                                <label htmlFor="email">Enter your email to confirm:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="warning-message">
                                <p><strong>Warning:</strong> This action cannot be undone. All your courses, progress, and data will be permanently deleted.</p>
                            </div>

                            <button type="submit" className="delete-button" disabled={isLoading}>
                                {isLoading ? 'Processing...' : 'Send Deletion Request'}
                            </button>

                            {message && <div className={`message ${email === user?.email ? 'success' : 'error'}`}>{message}</div>}
                        </form>
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

export default DeleteAccount;
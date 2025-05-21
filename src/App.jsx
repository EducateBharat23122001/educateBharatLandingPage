import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import './App.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DeleteAccount from './pages/DeleteAccount';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Helmet>
            <meta name="fast2sms" content="uKUwuyymxtG6qVjMGj1wtHILvJIFnsCl" />
          </Helmet>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />

            <Route path="/deleteaccount" element={
              <PrivateRoute>
                <DeleteAccount />
              </PrivateRoute>
            } />

            {/* DeleteAccount */}
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
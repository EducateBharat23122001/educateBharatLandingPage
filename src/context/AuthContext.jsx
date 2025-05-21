import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/checklogin`, {
          withCredentials: true
        });
        if (response.data.ok) {
          const userResponse = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/getuser`, {
            withCredentials: true
          });
          setUser(userResponse.data.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
        email,
        password
      }, {
        withCredentials: true
      });
      console.log(response.data)
      localStorage.setItem('user',JSON.stringify(response.data.data.user))
      setUser(response.data.data.user);
      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, {
        withCredentials: true
      });
      setUser(null);
      setIsAuthenticated(false);
      return { success: true };
    } catch (error) {
      console.error('Logout failed:', error);
      return { success: false, message: 'Logout failed' };
    }
  };

  const register = async (name, email, password, otp) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
        name,
        email,
        password,
        otp
      });
      return { success: true };
    } catch (error) {
      console.error('Registration failed:', error);
      return { success: false, message: error.response?.data?.message || 'Registration failed' };
    }
  };

  const sendOtp = async (email) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/sendotp`, {
        email
      });
      return { success: true };
    } catch (error) {
      console.error('OTP send failed:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to send OTP' };
    }
  };

  const deleteAccountRequest = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/delete-account-request`,
        {},
        {
          withCredentials: true
        }
      );
      
      return { 
        success: true, 
        message: response.data.message || 'Account deletion request sent successfully' 
      };
    } catch (error) {
      console.error('Delete account request failed:', error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Failed to send account deletion request' 
      };
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      loading, 
      login, 
      logout, 
      register, 
      sendOtp,
      deleteAccountRequest
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
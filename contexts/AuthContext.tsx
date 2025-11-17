
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User, Role } from '../types';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

// --- API Contract for Backend Developers ---
//
// 1. Register Endpoint:
//    - URL: POST /api/auth/register
//    - Request Body: { name: string, email: string, password: string, role: Role }
//    - Success Response (201): { message: "Registration successful. Please check your email for OTP." }
//    - Error Response (400/409): { error: "Invalid data" | "User already exists" }
//
// 2. Verify OTP Endpoint:
//    - URL: POST /api/auth/verify-otp
//    - Request Body: { email: string, otp: string }
//    - Success Response (200): { message: "Account verified successfully." }
//    - Error Response (400): { error: "Invalid or expired OTP." }
//
// 3. Login Endpoint:
//    - URL: POST /api/auth/login
//    - Request Body: { email: string, password: string }
//    - Success Response (200): { token: string, user: User }
//    - Error Response (401): { error: "Invalid credentials." }
//
// 4. Get User Profile Endpoint (for session validation):
//    - URL: GET /api/auth/profile
//    - Headers: { Authorization: "Bearer <token>" }
//    - Success Response (200): { user: User }
//    - Error Response (401/403): { error: "Unauthorized." }
//
// 5. Logout Endpoint (Optional - for token invalidation):
//    - URL: POST /api/auth/logout
//    - Headers: { Authorization: "Bearer <token>" }
//    - Success Response (200): { message: "Logged out successfully." }
//

// FIX: Export interface to be used in the useAuth hook.
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: Role) => Promise<boolean>;
  verifyOtp: (email: string, otp: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const navigate = useNavigate();
  const { request, isLoading, error, clearError } = useApi();

  // On initial load, check for a token and validate the session
  useEffect(() => {
    const validateSession = async () => {
      const token = localStorage.getItem('medconnect_token');
      if (token) {
        try {
          const data = await request<{ user: User }>('/auth/profile', { method: 'GET' });
          if (data && data.user) {
            setUser(data.user);
          }
        } catch (err) {
          // Token is invalid or expired, so we log out
          console.error("Session validation failed:", err);
          logout();
        }
      }
      setIsInitializing(false);
    };

    validateSession();
  }, []);

  const handleSuccessfulAuth = (userData: User, token: string) => {
    setUser(userData);
    localStorage.setItem('medconnect_token', token);
    // Note: Using httpOnly cookies is more secure but requires server-side setup.
    // This localStorage approach is common for client-rendered apps.

    switch (userData.role) {
      case Role.PATIENT:
        navigate('/patient/dashboard');
        break;
      case Role.DOCTOR:
        navigate('/doctor/dashboard');
        break;
      case Role.ADMIN:
        navigate('/admin/dashboard');
        break;
      default:
        navigate('/');
    }
  };

  const register = async (name: string, email: string, password: string, role: Role): Promise<boolean> => {
    clearError();
    try {
      await request('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password, role }),
      });
      return true; // Registration successful
    } catch (err) {
      return false; // Registration failed
    }
  };

  const verifyOtp = async (email: string, otp: string): Promise<boolean> => {
    clearError();
    try {
      await request('/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ email, otp }),
      });
      return true; // Verification successful
    } catch (err) {
      return false; // Verification failed
    }
  };

  const login = async (email: string, password: string) => {
    clearError();
    try {
      const data = await request<{ user: User, token: string }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      if (data && data.user && data.token) {
        handleSuccessfulAuth(data.user, data.token);
      }
    } catch (err) {
      // Error is already set by useApi hook
      console.error("Login failed:", err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('medconnect_token');
    // Optional: Call a backend endpoint to invalidate the token
    // request('/auth/logout', { method: 'POST' }).catch(err => console.error("Logout API call failed:", err));
    navigate('/login');
  };

  const isAuthenticated = !!user;

  // Render a loader while session is being validated
  if (isInitializing) {
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
        </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, error, login, register, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
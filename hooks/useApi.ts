import { useState, useCallback } from 'react';
import { User, Role } from '../types';

// --- Mock API Simulation ---
// To resolve the "Failed to fetch" error, we are simulating the backend API responses here.
// This allows the frontend to be developed and tested independently without a live backend.
// In a real application, you would remove this simulation.

const mockApi = <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Mock API call to: ${endpoint}`, { ...options, body: options.body ? JSON.parse(options.body as string) : {} });

      let body;
      try {
        body = options.body ? JSON.parse(options.body as string) : {};
      } catch (e) {
        return reject(new Error("Invalid JSON in request body"));
      }
      
      switch (endpoint) {
        case '/auth/login':
          if (body.email === 'patient@medconnect.com' && body.password === 'password123') {
            const user: User = { id: 'u1', name: 'John Doe', email: 'patient@medconnect.com', role: Role.PATIENT, avatarUrl: 'https://picsum.photos/seed/u1/200' };
            resolve({ user, token: 'mock-jwt-token-for-patient' } as T);
          } else if (body.email === 'doctor@medconnect.com' && body.password === 'password123') {
            const user: User = { id: 'u2', name: 'Dr. Alice Smith', email: 'doctor@medconnect.com', role: Role.DOCTOR, avatarUrl: 'https://picsum.photos/seed/u2/200' };
            resolve({ user, token: 'mock-jwt-token-for-doctor' } as T);
          } else if (body.email === 'admin@medconnect.com' && body.password === 'password123') {
            const user: User = { id: 'u3', name: 'Admin User', email: 'admin@medconnect.com', role: Role.ADMIN, avatarUrl: 'https://picsum.photos/seed/u3/200' };
            resolve({ user, token: 'mock-jwt-token-for-admin' } as T);
          } else {
            reject({ error: 'Invalid credentials.' });
          }
          break;
          
        case '/auth/register':
          resolve({ message: "Registration successful. Please check your email for OTP." } as T);
          break;
          
        case '/auth/verify-otp':
           resolve({ message: "Account verified successfully." } as T);
           break;
           
        case '/auth/profile':
            const token = (options.headers as Headers).get('Authorization')?.split(' ')[1];
            let userToReturn: User | null = null;
            
            if (token === 'mock-jwt-token-for-patient') {
                userToReturn = { id: 'u1', name: 'John Doe', email: 'patient@medconnect.com', role: Role.PATIENT, avatarUrl: 'https://picsum.photos/seed/u1/200' };
            } else if (token === 'mock-jwt-token-for-doctor') {
                userToReturn = { id: 'u2', name: 'Dr. Alice Smith', email: 'doctor@medconnect.com', role: Role.DOCTOR, avatarUrl: 'https://picsum.photos/seed/u2/200' };
            } else if (token === 'mock-jwt-token-for-admin') {
                userToReturn = { id: 'u3', name: 'Admin User', email: 'admin@medconnect.com', role: Role.ADMIN, avatarUrl: 'https://picsum.photos/seed/u3/200' };
            }
            
            if (userToReturn) {
                resolve({ user: userToReturn } as T);
            } else {
                reject({ error: 'Unauthorized.' });
            }
            break;
            
        default:
          reject({ error: `Mock API endpoint "${endpoint}" not found.` });
      }
    }, 500); // 500ms delay to simulate network latency
  });
};


interface ApiState<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

export const useApi = () => {
  const [state, setState] = useState<ApiState<any>>({
    data: null,
    error: null,
    isLoading: false,
  });

  const request = useCallback(async <T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> => {
    setState({ data: null, error: null, isLoading: true });

    try {
      const token = localStorage.getItem('medconnect_token');
      
      const headers = new Headers(options.headers || {});
      headers.append('Content-Type', 'application/json');
      if (token) {
        headers.append('Authorization', `Bearer ${token}`);
      }
      
      // Use the mock API instead of fetch
      const responseData = await mockApi<T>(endpoint, {
        ...options,
        headers,
      });

      setState({ data: responseData, error: null, isLoading: false });
      return responseData;
    } catch (err: any) {
      const errorMessage = err.error || (err instanceof Error ? err.message : 'An unexpected error occurred.');
      console.error('API request failed:', errorMessage);
      setState({ data: null, error: errorMessage, isLoading: false });
      throw new Error(errorMessage);
    }
  }, []);
  
  const clearError = () => {
      setState(prevState => ({ ...prevState, error: null }));
  };

  return { ...state, request, clearError };
};

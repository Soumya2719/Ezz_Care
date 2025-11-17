
import { useContext } from 'react';
// FIX: Import AuthContextType from AuthContext to avoid re-definition and type errors.
import { AuthContext, AuthContextType } from '../contexts/AuthContext';


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Role } from '../../types';
import Loader from '../ui/Loader';

interface ProtectedRouteProps {
  allowedRoles: Role[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  
  // A loading state could be added here if auth check is async
  if (user === undefined) {
      return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user && !allowedRoles.includes(user.role)) {
    // Redirect to a 'Not Authorized' page or back to their respective dashboard
    const homePath = user.role === Role.PATIENT ? '/patient/dashboard' : user.role === Role.DOCTOR ? '/doctor/dashboard' : '/admin/dashboard';
    return <Navigate to={homePath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

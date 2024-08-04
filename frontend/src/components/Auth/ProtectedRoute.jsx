import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, isSubscribed }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!isSubscribed) {
    return <Navigate to="/subscribe" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
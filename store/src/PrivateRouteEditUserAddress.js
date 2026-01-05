// PrivateRouteFeedback.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import EditUserAddress from './EditUserAddress';

const PrivateRouteEditUserAddress = () => {
  // Check if the user is authenticated based on the value stored in session storage
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <EditUserAddress /> : <Navigate to="/login" />;
};

export default PrivateRouteEditUserAddress;

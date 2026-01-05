// PrivateRouteFeedback.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import EditUserAddressSelect from './EditUserAddressSelect';

const PrivateRouteEditUserAddressSelect = () => {
  // Check if the user is authenticated based on the value stored in session storage
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <EditUserAddressSelect /> : <Navigate to="/login" />;
};

export default PrivateRouteEditUserAddressSelect;

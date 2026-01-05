import React from 'react';
import { Navigate } from 'react-router-dom';
import PaymentGateWay from "./PaymentGateWay";

const PrivateRoutePayment = () => {
  // Check if the user is authenticated based on the value stored in session storage
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <PaymentGateWay /> : <Navigate to="/login" />;
};

export default PrivateRoutePayment;

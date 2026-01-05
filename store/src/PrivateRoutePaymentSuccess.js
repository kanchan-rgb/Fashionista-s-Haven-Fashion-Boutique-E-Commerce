import React from 'react';
import { Navigate} from 'react-router-dom';
import PaymentSuccess from './PaymentSuccess';

const PrivateRoutePaymentSuccess = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <PaymentSuccess/> : <Navigate to="/login" />;
};

export default PrivateRoutePaymentSuccess;

import React from 'react';
import { Navigate} from 'react-router-dom';
import Order from './Order';

const PrivateRouteOrder = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <Order/> : <Navigate to="/login" />;
};

export default PrivateRouteOrder;

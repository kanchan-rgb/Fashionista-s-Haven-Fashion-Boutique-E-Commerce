import React from 'react';
import { Navigate} from 'react-router-dom';
import Invoice from './Invoice';

const PrivateRouteInvoice = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <Invoice/> : <Navigate to="/login" />;
};

export default PrivateRouteInvoice;

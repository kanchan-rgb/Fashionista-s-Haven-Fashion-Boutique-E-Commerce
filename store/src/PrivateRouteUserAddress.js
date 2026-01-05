import React from 'react';
import { Navigate} from 'react-router-dom';
import UserAddress from './UserAddress';

const PrivateRouteUserAddress = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <UserAddress /> : <Navigate to="/login" />;
};

export default PrivateRouteUserAddress;

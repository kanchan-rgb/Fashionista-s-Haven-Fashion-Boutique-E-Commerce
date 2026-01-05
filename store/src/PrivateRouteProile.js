import React from 'react';
import { Navigate} from 'react-router-dom';
import Profile from './Profile';

const PrivateRouteProile = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <Profile /> : <Navigate to="/login" />;
};

export default PrivateRouteProile;

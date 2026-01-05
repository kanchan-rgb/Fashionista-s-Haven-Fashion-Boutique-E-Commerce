import React from 'react';
import { Navigate} from 'react-router-dom';
import AddNewUserAddress from './AddNewUserAddress';

const PrivateRouteAddNewUserAddress = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <AddNewUserAddress /> : <Navigate to="/login" />;
};

export default PrivateRouteAddNewUserAddress;

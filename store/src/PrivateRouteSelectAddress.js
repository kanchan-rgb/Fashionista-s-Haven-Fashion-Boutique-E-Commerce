import React from 'react';
import { Navigate} from 'react-router-dom';
import SelectAddress from './SelectAddress';

const PrivateRouteSelectAddress = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <SelectAddress /> : <Navigate to="/login" />;
};

export default PrivateRouteSelectAddress;

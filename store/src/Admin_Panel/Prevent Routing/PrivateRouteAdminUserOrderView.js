import React from 'react';
import { Navigate} from 'react-router-dom';
import UserOrderView from '../UserOrderView';

const PrivateRouteAdminUserOrderView = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <UserOrderView/>  : <Navigate to="/login" />;
};

export default PrivateRouteAdminUserOrderView;



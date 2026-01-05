import React from 'react';
import { Navigate} from 'react-router-dom';
import UserCartView from '../UserCartView';

const PrivateRouteUserCartView = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <UserCartView/>  : <Navigate to="/login" />;
};

export default PrivateRouteUserCartView;

import React from 'react';
import { Navigate} from 'react-router-dom';
import Cart from './Cart';


const PrivateRouteCart = () => {
  const isAuthenticated = sessionStorage.getItem('userlogin') === 'true';

  return isAuthenticated ? <Cart /> : <Navigate to="/login" />;
};

export default PrivateRouteCart;

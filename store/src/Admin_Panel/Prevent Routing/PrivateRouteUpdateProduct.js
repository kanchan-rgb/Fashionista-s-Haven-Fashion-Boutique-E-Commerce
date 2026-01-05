import React from 'react';
import { Navigate} from 'react-router-dom';
import UpdateProduct from '../UpdateProduct';

const PrivateRouteUpdateProduct = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <UpdateProduct/>  : <Navigate to="/login" />;
};

export default PrivateRouteUpdateProduct;

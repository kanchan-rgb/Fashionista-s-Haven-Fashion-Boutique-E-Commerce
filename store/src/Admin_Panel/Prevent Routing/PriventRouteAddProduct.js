import React from 'react';
import { Navigate} from 'react-router-dom';
import AddProduct from "../AddProduct"

const PrivateRouteAddProduct = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <AddProduct/>  : <Navigate to="/login" />;
};

export default PrivateRouteAddProduct;

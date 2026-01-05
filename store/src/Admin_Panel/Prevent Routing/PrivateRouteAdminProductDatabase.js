import React from 'react';
import { Navigate} from 'react-router-dom';
import AdminProductDatabase from "../AdminProductDatabase"

const PrivateRouteAdminProductDatabase = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <AdminProductDatabase/>  : <Navigate to="/login" />;
};

export default PrivateRouteAdminProductDatabase;

import React from 'react';
import { Navigate} from 'react-router-dom';
import AdminMain from "../AdminMain"

const PrivateRouteAdminMain = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <AdminMain/>  : <Navigate to="/login" />;
};

export default PrivateRouteAdminMain;

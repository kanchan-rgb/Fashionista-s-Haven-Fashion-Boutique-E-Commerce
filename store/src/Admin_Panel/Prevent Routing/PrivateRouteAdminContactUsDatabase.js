import React from 'react';
import { Navigate} from 'react-router-dom';
import AdminConatactUsDatabase from'../AdminContactUsDatabase'

const PrivateRouteContactUsDatabase = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <AdminConatactUsDatabase/>  : <Navigate to="/login" />;
};

export default PrivateRouteContactUsDatabase;



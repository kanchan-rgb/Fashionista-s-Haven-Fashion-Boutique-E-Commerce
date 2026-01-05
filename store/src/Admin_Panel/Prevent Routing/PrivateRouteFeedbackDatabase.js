import React from 'react';
import { Navigate} from 'react-router-dom';
import AdminContactUsDatabase from '../AdminFeedbackDatabase';

const PrivateRouteFeedbackDatabase = () => {
  const isAuthenticated2 = sessionStorage.getItem('admin') === 'true';
  return isAuthenticated2 ? <AdminContactUsDatabase/>  : <Navigate to="/login" />;
};

export default PrivateRouteFeedbackDatabase;


